from mysql.connector import Error
import datetime
from dateutil.relativedelta import relativedelta

def MonthsBetween(date1, date2):
    # Ambil tahun dan bulan dari kedua tanggal
    year1, month1 = date1.year, date1.month
    year2, month2 = date2.year, date2.month
    
    # Hitung selisih bulan
    return (year2 - year1) * 12 + (month2 - month1)


def set_biaya_jabatan(conn, payrolldate_str, bjab, emp_row, pay_row ):
    cursor = conn.cursor(dictionary=True)
    query = f"""
            SELECT * FROM m_biayajabatan
            WHERE tdate <= '{payrolldate_str}'
            ORDER BY tdate DESC
            LIMIT 1
            """
    cursor.execute(query)
    row_bjab = cursor.fetchone()
    if row_bjab:
        bjab['pct'] = float(row_bjab['biayajabatan'])  # atau row['biayajabatan'] jika pakai DictCursor
        bjab['max'] = float(row_bjab['maxbiayajabatan'])
        

    bjab['bln'] = 12
    
    payrolldate = datetime.datetime.strptime(payrolldate_str, "%Y-%m-%d")
    joindate = pay_row['joindate']
    resigndate = pay_row.get('resigndate', None)
    startdate = pay_row['startdate']
    enddate = pay_row['enddate']
    tdate = pay_row['tdate']

    if joindate.strftime('%Y-%m') > payrolldate.strftime('%Y-01'):
        if resigndate:  # Resign date is filled
            # Check if resign date is within the start and end date
            if startdate <= resigndate <= enddate:
                # Get the first payroll in the year of tdate
                cursor = conn.cursor(dictionary=True)
                cursor.execute("""
                    SELECT tdate 
                    FROM t_payroll 
                    WHERE employee_id = %s 
                    AND YEAR(tdate) = %s
                    ORDER BY tdate
                    LIMIT 1
                """, (emp_row['employee_id'], tdate.year))
                first_payroll = cursor.fetchone()

                if first_payroll:
                    bjab['bln'] = 1 + MonthsBetween(first_payroll['tdate'], tdate) # ((first_payroll['tdate'] - tdate).days // 30)
                else:
                    bjab['bln'] = 1 + MonthsBetween(datetime.date(tdate.year, 1, 1), tdate) #((tdate.replace(month=1, day=1) - tdate).days // 30)
        else:
            # Resign date is empty
            cursor = conn.cursor(dictionary=True)
            cursor.execute("""
                SELECT tdate 
                FROM t_payroll 
                WHERE employee_id = %s 
                AND YEAR(tdate) = %s
                ORDER BY tdate
                LIMIT 1
            """, (emp_row['employee_id'], tdate.year))
            first_payroll = cursor.fetchone()

            if first_payroll:
                bjab['bln'] = 1 + MonthsBetween(first_payroll['tdate'], tdate) # ((first_payroll['tdate'] - tdate).days // 30)
            else:
                bjab['bln'] = 1 + MonthsBetween(datetime.date(tdate.year, 1, 1), tdate) # ((tdate.replace(month=1, day=1) - tdate).days // 30)
    else:
        if resigndate:  # Resign date is filled
            if startdate <= resigndate <= enddate:
                cursor = conn.cursor(dictionary=True)
                cursor.execute("""
                    SELECT tdate 
                    FROM t_payroll 
                    WHERE employee_id = %s 
                    AND YEAR(tdate) = %s
                    ORDER BY tdate
                    LIMIT 1
                """, (emp_row['employee_id'], tdate.year))
                first_payroll = cursor.fetchone()

                if first_payroll:
                    bjab['bln'] = 1 + MonthsBetween(first_payroll['tdate'], tdate) # ((first_payroll['tdate'] - tdate).days // 30)
                else:
                    bjab['bln'] = 1 + MonthsBetween(datetime.date(tdate.year, 1, 1), tdate)  # ((tdate.replace(month=1, day=1) - tdate).days // 30)
    cursor.close()

def set_salary_non_at(conn, emp_row, pay_row, tipe='ST'):
    try:
        cursor = conn.cursor(dictionary=True)
        
        # Ambil data dari m_salary
        cursor.execute("""
            SELECT * FROM m_salary
            WHERE salary_id in (1, 205, 403) and acctype <> 'tunjangan' AND txtlap = %s
            ORDER BY procorder
        """, (tipe,))
        salary_rows = cursor.fetchall()

        # Ambil field payroll_date
        cursor.execute("SELECT * FROM m_payrolldate")  # Contoh tabel, ganti sesuai aslinya
        date_rows = cursor.fetchall()

        for q in salary_rows:
            name = q['name']
            sql = q['param'].strip()
            hf = q['payrollheaderfield']
            salary_id = q['salary_id']

            if sql:
                sql = sql.replace('$EMPLOYEE_ID', str(emp_row['employee_id']))
                sql = sql.replace('$SALARY_ID', str(salary_id))

                for date_row in date_rows:
                    pf = date_row['payrollfield'].upper()
                    tdate = date_row['tdate']
                    sql = sql.replace(f"${pf}", f"{tdate}")  # asumsi format SQL string

                # print(f"[INFO] Processing salary: {name} {q['salary_id']}")
                # if q['salary_id']=1
                # print(f"[DEBUG SQL]: {sql}")

                cursor.execute(sql)
                qry_rows = cursor.fetchall()

                if qry_rows:
                    for qry in qry_rows:
                        amount = qry.get('amount', 0)
                        # print(f"{hf}")
                        # Update hf field di pay_rows
                        if hf and hf in pay_row:
                            pay_row[hf] = float(pay_row[hf]) + float(amount)
                        # print("a1")
                        # Insert ke t_payroll_detail
                        cursor.execute("""
                            INSERT INTO t_payroll_detail (payroll_id, amount, debugamount, diff,
                                        salary_id, salarycode, jurnalorder ,name ,
                                        slipname ,acc ,sliporder, summaryorder)
                            VALUES (%s, %s, %s, %s, 
                                    %s, %s, %s, %s,
                                    %s, %s, %s, %s)
                        """, (pay_row['payroll_id'], amount, 0, 0,
                              q['salary_id'], q['salarycode'], q['jurnalorder'], q['name'], 
                              q['slipname'], q['acc'], q['sliporder'], q['summaryorder'] )) 
                        # print("a2")
                        # Update field selain AMOUNT ke t_payroll
                        for field in qry:
                            if field.upper() != 'AMOUNT' and field in pay_row:
                                cursor.execute(f"""
                                    UPDATE t_payroll
                                    SET {field} = %s
                                    WHERE payroll_id = %s
                                """, (qry[field], pay_row['payroll_id']))
        conn.commit()
        cursor.close()
    except Error as e:
        print(f"[ERROR] set_salary_non_at: {str(e)}")

def set_bulan_pengali(conn, eid: str, sdate: datetime.date, edate: datetime.date) -> int:
    try:
        cursor = conn.cursor(dictionary=True)

        # Ambil tahun dan bulan dari tanggal edate
        thn = edate.year
        bln = edate.month

        result = 13 - bln

        # Query m_employee untuk mendapatkan resigndate dan resigntype_id
        cursor.execute("SELECT resigndate, resigntype_id FROM m_employee WHERE employee_id = %s", (eid,))
        emp = cursor.fetchone()

        if emp and emp['resigndate'] is not None:
            resigndate = emp['resigndate']
            resigntype_id = emp['resigntype_id']

            # Query yearly dari m_resigntype
            cursor.execute("SELECT yearly FROM m_resigntype WHERE resigntype_id = %s", (resigntype_id,))
            resign_type = cursor.fetchone()
            sthn = resign_type['yearly'] if resign_type else 0

            # Cek apakah resigndate berada dalam rentang sdate sampai edate
            if sdate <= resigndate <= edate:
                if sthn == 1:
                    result = 13 - bln
                else:
                    result = 1

        return result

    except Error as e:
        print("Database error:", e)
        return 0

    finally:
        cursor.close()

def get_qvaluedouble(query, db):
    try:
        cursor = db.cursor()
        cursor.execute(query)
        row = cursor.fetchone()
        if row and row[0] is not None:
            return float(row[0])
        return 0.0
    except Exception as e:
        print(f"Error in get_qvaluedouble: {e}")
        return 0.0

def date_to_sql(dt: datetime) -> str:
    return dt.strftime('%Y-%m-%d')

def get_value_jamsostek(kolom: str, jid: str, dt: datetime, db) -> float:
    kolom = kolom.lower()
    sql = f"""
        SELECT base 
        FROM m_jamsostekrate
        WHERE jamsostek_id = '{jid}'
          AND name = '{kolom}'
          AND tdate <= '{date_to_sql(dt)}'
        ORDER BY tdate DESC
        LIMIT 1
    """
    return get_qvaluedouble(sql, db)

def set_jamsostek(conn, pay_row ):
    cursor = conn.cursor(dictionary=True)
    jamsostek_id = pay_row.get('jamsostek_id')
    tdate = pay_row.get('tdate')

    jkm = jkk = jhtc = jhte = jknc = jkne = jpsc = jpse = 0
    jkmr= jkkr= jhtcr= jhter= jkncr= jkner= jpscr= jpser= 0

    cursor.execute("SELECT * FROM m_jamsostek WHERE jamsostek_id = %s", (pay_row['jamsostek_id'],))
    jam_row = cursor.fetchone()
    if not jam_row:        
        return
    
    basejamsostek = 0
    basejamsostek1= 0
    jamsostek_type = jam_row['type'].upper()
    if jamsostek_type == 'RATE':
        min_base = get_value_jamsostek('UMR', jamsostek_id, tdate, conn)
        base_jamsostek = get_qvaluedouble(f"""
            SELECT SUM(amount)
            FROM tmp_payroll_detail
            INNER JOIN m_salary ON m_salary.salary_id = tmp_payroll_detail.salary_id
            WHERE m_salary.acctype <> 'tunjangan'
            AND m_salary.slipname IN (
                SELECT slipname FROM m_jamsostek_base
                WHERE jamsostek_id = '{jamsostek_id}'
            )
            GROUP BY payroll_id
        """, conn)
        base_jamsostek1 = base_jamsostek
    elif jamsostek_type == 'FIX BASE':
        base_jamsostek = get_value_jamsostek('Fix Base', jamsostek_id, tdate)

    jkmr = get_value_jamsostek('JKM Rate', jamsostek_id, tdate, conn)
    jkkr = get_value_jamsostek('JKK Rate', jamsostek_id, tdate, conn)
    jhtcr = get_value_jamsostek('JHTComp Rate', jamsostek_id, tdate, conn)
    jhter = get_value_jamsostek('JHTEmp Rate', jamsostek_id, tdate, conn)
    jkncr = get_value_jamsostek('JKNComp Rate', jamsostek_id, tdate, conn)
    jkner = get_value_jamsostek('JKNEmp Rate', jamsostek_id, tdate, conn)
    jpscr = get_value_jamsostek('JPSComp Rate', jamsostek_id, tdate, conn)
    jpser = get_value_jamsostek('JPSEmp Rate', jamsostek_id, tdate, conn)
    max_base_jkn = get_value_jamsostek('Max Base BPJS Kesehatan', jamsostek_id, tdate, conn)
    max_base_jps = get_value_jamsostek('Max Base BPJS Pensiun', jamsostek_id, tdate, conn)

    if base_jamsostek > 0:
        jkm = round(jkmr * base_jamsostek / 100)
        jkk = round(jkkr * base_jamsostek / 100)
        jhte = round(jhter * base_jamsostek / 100)
        jhtc = round(jhtcr * base_jamsostek / 100)
        jknc = round(jkncr * base_jamsostek / 100)
        jkne = round(jkner * base_jamsostek / 100)
        jpsc = round(jpscr * base_jamsostek / 100)
        jpse = round(jpser * base_jamsostek / 100)
        jkm1 = round(jkmr * base_jamsostek1 / 100)
        jkk1 = round(jkkr * base_jamsostek1 / 100)
        jhte1 = round(jhter * base_jamsostek1 / 100)
        jhtc1 = round(jhtcr * base_jamsostek1 / 100)
        jknc1 = round(jkncr * base_jamsostek1 / 100)
        jkne1 = round(jkner * base_jamsostek1 / 100)
        jpsc1 = round(jpscr * base_jamsostek1 / 100)
        jpse1 = round(jpser * base_jamsostek1 / 100)
        if base_jamsostek >= max_base_jkn:
            jknc = round(jkncr * max_base_jkn / 100)
            jkne = round(jkner * max_base_jkn / 100)
        if base_jamsostek >= max_base_jps:
            jpsc = round(jpscr * max_base_jps / 100)
            jpse = round(jpser * max_base_jps / 100)
        if base_jamsostek1 >= max_base_jkn:
            jknc1 = round(jkncr * max_base_jkn / 100)
            jkne1 = round(jkner * max_base_jkn / 100)
        if base_jamsostek1 >= max_base_jps:
            jpsc1 = round(jpscr * max_base_jps / 100)
            jpse1 = round(jpser * max_base_jps / 100)

    jkm1 = 0
    jkk1 = 0
    jhte1 = 0
    jhtc1 = 0
    jknc1 = 0
    jkne1 = 0
    jpsc1 = 0
    jpse1 = 0
    if jamsostek_type == 'FIX VALUE':
        jkm = jkm1 = jkmr
        jkk = jkk1 = jkkr
        jhte = jhte1 = jhter
        jhtc = jhtc1 = jhtcr
        jknc = jknc1 = jkncr
        jkne = jkne1 = jkner
        jpsc = jpsc1 = jpscr
        jpse = jpse1 = jpser

    pay_row['typejamsostek'] = jamsostek_type
    pay_row['basejamsostek'] = basejamsostek
    pay_row['jkm'] = pay_row['jkm'] + jkm
    pay_row['jkk'] = pay_row['jkk'] + jkk
    pay_row['jhtcompany'] = pay_row['jhtcompany'] + jhtc
    pay_row['jhtemployee'] = pay_row['jhtemployee'] + jhte
    pay_row['jkn'] = pay_row['jkn'] + jknc
    pay_row['jknemployee'] = pay_row['jknemployee'] + jkne
    pay_row['jpscompany'] = pay_row['jpscompany'] + jpsc
    pay_row['jpsemployee'] = pay_row['jpsemployee'] + jpse
        
    pay_row['basejamsostek'] = basejamsostek1
    pay_row['jkm1'] = jkm1
    pay_row['jkk1'] = jkk1
    pay_row['jhtcompany1'] = jhtc1
    pay_row['jhtemployee1'] = jhte1
    pay_row['jkn1'] = jknc1
    pay_row['jknemployee1'] = jkne1
    pay_row['jpscompany1'] = jpsc1
    pay_row['jpsemployee1'] = jpse1
    
    conn.commit()
    cursor.close()

