from sqlalchemy.orm import Session, declarative_base, registry
from sqlalchemy import text, Table, MetaData
from app.models.payroll import TPayroll
from app.models.payrolldetail import TPayrollDetail
from app.models.employee import Employee
from app.models.tmppayroll import TMPPayroll
from app.models.tmppayrolldetail import TMPPayrollDetail
from app.schemas.payroll_schema import PayrollSchema
from sqlalchemy.orm import registry
import uuid
from fastapi import HTTPException
from datetime import datetime, date
# from dateutil.relativedelta import relativedelta
import re

mapper_registry = registry()
Base = mapper_registry.generate_base()

def create_dynamic_model(table_name: str, db_session, model_name: str = "DynamicModel"):
    metadata = MetaData()
    engine = db_session.get_bind()
    table = Table(table_name, metadata, autoload_with=engine)
    DynamicModel = type(
        model_name,
        (Base,),
        {"__table__": table}
    )
    return DynamicModel

class PayrollService:
    def __init__(self, db: Session, td, eid):
        self.db = db
        self.tdate = td
        self.employee_id = eid
        self.employee : Employee = self.get_employee_by_id(eid)
        # self.uid = "2b2b3e4720034d2f8465444639e7e549" # uuid.uuid4().hex
        self.uid = uuid.uuid4().hex
        self.bjab_bln = 12
        self.tmp_payroll_tablename = f"tmp_payroll_{self.uid}" # "tmp_payroll_abc"
        self.tmp_payroll_detail_tablename = f"tmp_payroll_detail_{self.uid}" # "tmp_payroll_abc"
        # print(self.tmp_payroll_tablename)
        self._hapus_payroll_exists(eid, td)
        self._create_temp_table()        
        self._load_biayajabatan()
        
        TempPayrollModel = create_dynamic_model(self.tmp_payroll_tablename, self.db, "TMPPayroll")
        self.payroll : TMPPayroll = TempPayrollModel()
        self.TempPayrollDetailModel = create_dynamic_model(self.tmp_payroll_detail_tablename, self.db, "TMPPayrollDetail")

        self.bulanpengali = 0
        self.selesai = False
        self.taxType = 1
        self.taxIrregular = 1
        self.taxFinal = 1
        self.nettosebelum_m_employee = 0
        

    def _create_temp_table(self):
        query = f"""CREATE TABLE {self.tmp_payroll_tablename} LIKE t_payroll"""        
        self.db.execute(text(query))
        query = f"""CREATE TABLE {self.tmp_payroll_detail_tablename} LIKE t_payroll_detail"""        
        self.db.execute(text(query))

        # query = f"""DELETE FROM {self.tmp_payroll_tablename} """        
        # self.db.execute(text(query))
        # query = f"""DELETE FROM {self.tmp_payroll_detail_tablename} """        
        # self.db.execute(text(query))
        query = f"""INSERT INTO {self.tmp_payroll_tablename} 
                 SELECT * FROM t_payrolL where year(tdate)=year('{self.tdate}') and employee_id={self.employee_id}"""        
        self.db.execute(text(query))
        query = f"""INSERT INTO {self.tmp_payroll_detail_tablename} 
                    SELECT * FROM t_payroll_detail where payroll_id in ( 
                        select payroll_id from t_payroll where year(tdate)=year('{self.tdate}') and employee_id={self.employee_id}
                    )"""        
        self.db.execute(text(query))

    def _drop_temp_table(self):
        query = f"""drop table if EXISTS {self.tmp_payroll_tablename}"""
        self.db.execute(text(query))
        query = f"""drop table if EXISTS {self.tmp_payroll_detail_tablename}"""
        self.db.execute(text(query))

    def _load_biayajabatan(self):
        sql = text("SELECT biayajabatan, maxbiayajabatan FROM m_biayajabatan where tdate <= :tdate order by tdate desc LIMIT 1")
        row = self.db.execute(sql, {"tdate": self.tdate}).mappings().first()
        if row:
            self.bjab_pct = row["biayajabatan"]
            self.bjab_max = row["maxbiayajabatan"]
        else:
            self.bjab_pct = 0
            self.bjab_max = 0

    def _hapus_payroll_exists(self, eid: str, payrolldate):
        query = text("""
            SELECT payroll_id FROM t_payroll
            WHERE employee_id = :eid AND month(tdate) = month(:payrolldate) and year(tdate) = year(:payrolldate)
        """)
        result = self.db.execute(query, {"eid": eid, "payrolldate": payrolldate}).mappings().all()

        for row in result:
            payroll_id = row["payroll_id"]
            self.db.execute( text("DELETE FROM t_payroll_detail WHERE payroll_id = :pid"), {"pid": payroll_id} )
            self.db.execute( text("DELETE FROM t_payroll WHERE payroll_id = :pid"), {"pid": payroll_id} )

        if result:
            self.db.commit()

    def get_employee_by_id(self, employee_id: int) -> Employee:
        employee = self.db.query(Employee).filter(Employee.employee_id == employee_id).first()
        if not employee:
            raise HTTPException(status_code=404, detail="Employee not found")
        return employee

    def set_default_and_payrolldate(self):
        query = text("""
                    SELECT payrollfield, tdate
                    FROM m_payrolldate
                    WHERE payrollfield IN ('tdate', 'startdate', 'enddate', 'transferdate')
                """)
        result = self.db.execute(query).mappings().all()
        date_map = {row['payrollfield']: row['tdate'] for row in result}
        for field in ['tdate', 'startdate', 'enddate', 'transferdate']:
            setattr(self.payroll, field, date_map.get(field))

        self.level = "" # "Slip_202503_aam.pdf";
        
        fields_to_copy = ["bank_id", "bankaccountnumber", "bankaccountname", "bankbranch", "nip", "ptkp", "npwpemployee", "npwpdate", "company_id", "department_id", "division_id", "workarea_id", "position_id", "level_id", "lvl_id", "employeestatus_id", "jamsostek_id", "joindate", "resigndate", "taxtype", "taxirregular", "taxfinal", "note", "harikerja", "codestatus", "codelevel", "code"]
        for field in fields_to_copy:
            setattr(self.payroll, field, getattr(self.employee, field, None))
            
        resigndate = self.payroll.resigndate
        startdate = self.payroll.startdate
        enddate = self.payroll.enddate
        if resigndate is not None:
            if resigndate < startdate or resigndate > enddate:
                self.payroll.resigndate = None
                
        self.payroll.npwpemployee = ''
        if self.employee.npwp is not None:
            self.payroll.npwpemployee = self.employee.npwp

    def save_to_tpayroll(self):
        self.db.add(self.payroll)
        self.db.commit()
        self.db.refresh(self.payroll)

    def migrate_tmppayroll_to_tpayroll(self) :
        new_record = TPayroll()
        for column in TPayroll.__table__.columns:
            col_name = column.name
            if col_name == "payroll_id":
                continue
            if hasattr(self.payroll, col_name):
                setattr(new_record, col_name, getattr(self.payroll, col_name))

        self.db.add(new_record)
        self.db.commit()
        self.db.refresh(new_record)
        
        tmp_details = self.db.query(self.TempPayrollDetailModel).all() 

        for tmp_detail in tmp_details:
            detail = TPayrollDetail()
            for column in TPayrollDetail.__table__.columns:
                col_name = column.name
                if col_name == "payroll_detail_id":
                    continue
                if hasattr(tmp_detail, col_name):
                    setattr(detail, col_name, getattr(tmp_detail, col_name))

            # Ganti payroll_id dengan yang baru
            detail.payroll_id = new_record.payroll_id
            self.db.add(detail)

        self.db.commit() 

        # print(new_record)
        return new_record

    def get_all(self):
        return self.db.query(TPayroll).all()
    
    def months_between(start_date, end_date):
        """Hitung jumlah bulan antara dua tanggal"""
        return (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month)

    def setting_bulan_bjab(self):
        self.bjab_bln = 12
        joindate = self.payroll.joindate
        tdate = self.payroll.tdate
        resigndate = self.payroll.resigndate
        startdate = self.payroll.startdate
        enddate = self.payroll.enddate
        employee_id = self.payroll.employee_id

        if not joindate or not tdate:
            return self.bjab_bln

        if joindate.strftime('%Y-%m') > f"{tdate.year}-01":
            if resigndate:
                if startdate <= resigndate <= enddate:
                    query = text("""
                        SELECT tdate FROM :tablename 
                        WHERE employee_id = :eid AND YEAR(tdate) = :year 
                        ORDER BY tdate LIMIT 1
                    """)
                    result = self.db.execute(query, {'tablename': self.tmp_payroll_tablename, 'eid': employee_id, 'year': tdate.year}).fetchone()
                    if result:
                        self.bjab_bln = 1 + self.months_between(result.tdate, tdate)
                    else:
                        jan1 = date(tdate.year, 1, 1)
                        self.bjab_bln = 1 + self.months_between(jan1, tdate)
            else:
                query = text("""
                    SELECT tdate FROM :tablename 
                    WHERE employee_id = :eid AND YEAR(tdate) = :year 
                    ORDER BY tdate LIMIT 1
                """)
                result = self.db.execute(query, {'tablename': self.tmp_payroll_tablename, 'eid': employee_id, 'year': tdate.year}).fetchone()
                if result:
                    self.bjab_bln = 1 + self.months_between(result.tdate, tdate)
                else:
                    jan1 = date(tdate.year, 1, 1)
                    self.bjab_bln = 1 + self.months_between(jan1, tdate)
        else:
            if resigndate and startdate <= resigndate <= enddate:
                query = text("""
                    SELECT tdate FROM :tablename 
                    WHERE employee_id = :eid AND YEAR(tdate) = :year 
                    ORDER BY tdate LIMIT 1
                """)
                result = self.db.execute(query, {'tablename': self.tmp_payroll_tablename, 'eid': employee_id, 'year': tdate.year}).fetchone()
                if result:
                    self.bjab_bln = 1 + self.months_between(result.tdate, tdate)
                else:
                    jan1 = date(tdate.year, 1, 1)
                    self.bjab_bln = 1 + self.months_between(jan1, tdate)

        return self.bjab_bln


    def setting_salary_nonat(self, tipe='ST'):
        query = text("""
            SELECT * 
            FROM m_salary
            WHERE acctype <> 'tunjangan' 
            AND txtlap = :txtlap
            ORDER BY procorder
        """)
        salaries = self.db.execute(query, {"txtlap": tipe}).mappings().all()

        for row in salaries:
            # print(row["name"])
            salary_id = row["salary_id"]
            sql = row["param"]
            hf  = row["payrollheaderfield"]            
            sql = sql.strip()
            if not sql:
                continue

            sql = sql.replace('$EMPLOYEE_ID', str(self.employee.employee_id))
            sql = sql.replace('$SALARY_ID', str(salary_id))
            sql = sql.replace('$TDATE', self.payroll.tdate.strftime("%Y-%m-%d"))
            sql = sql.replace('$STARTDATE', self.payroll.startdate.strftime("%Y-%m-%d"))
            sql = sql.replace('$ENDDATE', self.payroll.enddate.strftime("%Y-%m-%d"))
            sql = sql.replace('$TRANSFERDATE', self.payroll.transferdate.strftime("%Y-%m-%d"))
            amount = self.db.execute(text(sql)).scalar()  # Mengambil single nilai kolom 'amount'
            if amount is None:
                continue

            if hf:
                current_value = getattr(self.payroll, hf, 0) or 0
                setattr(self.payroll, hf, current_value + int(amount))

                payrolldetail = self.TempPayrollDetailModel()
                for key in row.keys():
                    if key == 'payroll_id':
                        continue
                    if hasattr(payrolldetail, key):
                        setattr(payrolldetail, key, row[key])

                setattr(payrolldetail, 'payroll_id', self.payroll.payroll_id)
                setattr(payrolldetail, 'amount', amount)
                setattr(payrolldetail, 'debugamount', 0)
                setattr(payrolldetail, 'diff', 0)
                self.db.add(payrolldetail)
        self.db.flush()        

    def setting_bulan_pengali(self):
        # Ambil bulan dari EDate
        bln = self.payroll.enddate.month
        result = 13 - bln

        # Query data employee
        query = text("SELECT resigndate, resigntype_id FROM m_employee WHERE employee_id = :eid")
        row = self.db.execute(query, {"eid": self.payroll.employee_id}).mappings().first()

        if row and row["resigndate"]:
            resigndate = row["resigndate"]
            resigntype_id = row["resigntype_id"]

            # Ambil nilai yearly dari m_resigntype
            q2 = text("SELECT yearly FROM m_resigntype WHERE resigntype_id = :rid")
            resigntype = self.db.execute(q2, {"rid": resigntype_id}).mappings().first()
            sthn = resigntype["yearly"] if resigntype else 0

            if self.payroll.startdate <= resigndate <= self.payroll.enddate:
                if sthn == 1:
                    result = 13 - bln
                else:
                    result = 1
            else:
                result = 13 - bln
        else:
            result = 13 - bln

        self.bulanpengali = result


    def get_q_value_double(self, sql: str) -> float:
        result = self.db.execute(text(sql)).scalar()
        return float(result) if result is not None else 0.0

    def get_value_jamsostek(self, kolom: str, jid: str, dt: date) -> float:
        kolom = kolom.lower()
        sql = (
            "SELECT base FROM m_jamsostekrate "
            "WHERE jamsostek_id = :jid AND name = :kolom AND tdate <= :dt "
            "ORDER BY tdate DESC LIMIT 1"
        )
        result = self.db.execute(text(sql), {"jid": jid, "kolom": kolom, "dt": dt}).scalar()
        return float(result) if result is not None else 0.0

    def setting_jamsostek(self):
        q_emp = self.employee
        qh_payroll = self.payroll
        tdate = qh_payroll.tdate
        jamsostek_id = qh_payroll.jamsostek_id

        q = self.db.execute(text("SELECT * FROM m_jamsostek WHERE jamsostek_id = :jid"), {"jid": jamsostek_id}).fetchone()
        if not q:
            return

        jenis = (q.type or '').upper()
        base_jamsostek = 0
        base_jamsostek1 = 0

        if jenis == 'RATE':
            min_base = self.get_value_jamsostek('UMR', jamsostek_id, tdate)

            sql_base = """
            SELECT SUM(amount) FROM tmp_payroll_detail 
            INNER JOIN m_salary ON m_salary.salary_id = tmp_payroll_detail.salary_id
            WHERE m_salary.acctype <> 'tunjangan'
            AND m_salary.slipname IN (
                SELECT slipname FROM m_jamsostek_base WHERE jamsostek_id = :jid
            ) GROUP BY payroll_id
            """
            base_jamsostek = self.db.execute(text(sql_base), {"jid": jamsostek_id}).scalar() or 0.0
            base_jamsostek1 = base_jamsostek

        elif jenis == 'FIX BASE':
            base_jamsostek = self.get_value_jamsostek('Fix Base', jamsostek_id, tdate)

        elif jenis == 'FIX VALUE':
            base_jamsostek = 0  # Tetap nol, hanya pakai rate langsung

        # Ambil semua rate
        jkmr  = self.get_value_jamsostek('JKM Rate', jamsostek_id, tdate)
        jkkr  = self.get_value_jamsostek('JKK Rate', jamsostek_id, tdate)
        jhtcr = self.get_value_jamsostek('JHTComp Rate', jamsostek_id, tdate)
        jhter = self.get_value_jamsostek('JHTEmp Rate', jamsostek_id, tdate)
        jkncr = self.get_value_jamsostek('JKNComp Rate', jamsostek_id, tdate)
        jkner = self.get_value_jamsostek('JKNEmp Rate', jamsostek_id, tdate)
        jpscr = self.get_value_jamsostek('JPSComp Rate', jamsostek_id, tdate)
        jpser = self.get_value_jamsostek('JPSEmp Rate', jamsostek_id, tdate)
        max_base_jkn = self.get_value_jamsostek('Max Base BPJS Kesehatan', jamsostek_id, tdate)
        max_base_jps = self.get_value_jamsostek('Max Base BPJS Pensiun', jamsostek_id, tdate)

        if base_jamsostek > 0:
            jkm  = round(jkmr * base_jamsostek / 100)
            jkk  = round(jkkr * base_jamsostek / 100)
            jhte = round(jhter * base_jamsostek / 100)
            jhtc = round(jhtcr * base_jamsostek / 100)
            jknc = round(jkncr * min(base_jamsostek, max_base_jkn) / 100)
            jkne = round(jkner * min(base_jamsostek, max_base_jkn) / 100)
            jpsc = round(jpscr * min(base_jamsostek, max_base_jps) / 100)
            jpse = round(jpser * min(base_jamsostek, max_base_jps) / 100)

            jkm1 = round(jkmr * base_jamsostek1 / 100)
            jkk1 = round(jkkr * base_jamsostek1 / 100)
            jhte1 = round(jhter * base_jamsostek1 / 100)
            jhtc1 = round(jhtcr * base_jamsostek1 / 100)
            jknc1 = round(jkncr * min(base_jamsostek1, max_base_jkn) / 100)
            jkne1 = round(jkner * min(base_jamsostek1, max_base_jkn) / 100)
            jpsc1 = round(jpscr * min(base_jamsostek1, max_base_jps) / 100)
            jpse1 = round(jpser * min(base_jamsostek1, max_base_jps) / 100)
        else:
            jkm = jkk = jhte = jhtc = jknc = jkne = jpsc = jpse = 0
            jkm1 = jkk1 = jhte1 = jhtc1 = jknc1 = jkne1 = jpsc1 = jpse1 = 0

        if jenis == 'FIX VALUE':
            jkm = jkm1 = jkmr
            jkk = jkk1 = jkkr
            jhte = jhte1 = jhter
            jhtc = jhtc1 = jhtcr
            jknc = jknc1 = jkncr
            jkne = jkne1 = jkner
            jpsc = jpsc1 = jpscr
            jpse = jpse1 = jpser

        # Set field payroll
        qh_payroll.typejamsostek = jenis
        qh_payroll.basejamsostek = base_jamsostek
        qh_payroll.basejamsostek1 = base_jamsostek1

        qh_payroll.jkm = (qh_payroll.jkm or 0) + jkm # qh_payroll.jkm += jkm        
        qh_payroll.jkk = (qh_payroll.jkk or 0) + jkk # qh_payroll.jkk += jkk
        qh_payroll.jhtcompany = (qh_payroll.jhtcompany or 0) + jhtc
        qh_payroll.jhtemployee = (qh_payroll.jhtemployee or 0) +  jhte
        qh_payroll.jkn = (qh_payroll.jkn or 0) + jknc
        qh_payroll.jknemployee = (qh_payroll.jknemployee or 0) + jkne
        qh_payroll.jpscompany = (qh_payroll.jpscompany or 0) + jpsc
        qh_payroll.jpsemployee = (qh_payroll.jpsemployee or 0) + jpse

        qh_payroll.jkm1 = jkm1
        qh_payroll.jkk1 = jkk1
        qh_payroll.jhtcompany1 = jhtc1
        qh_payroll.jhtemployee1 = jhte1
        qh_payroll.jkn1 = jknc1
        qh_payroll.jknemployee1 = jkne1
        qh_payroll.jpscompany1 = jpsc1
        qh_payroll.jpsemployee1 = jpse1

        self.db.commit()

    def create(self, data: PayrollSchema):

        self.payroll.employee_id = data.employee_id
        self.set_default_and_payrolldate()

        self.setting_bulan_bjab()
        self.setting_salary_nonat()
        self.setting_bulan_pengali()
        self.setting_jamsostek()

        self.selesai = False
        self.taxType = self.payroll.taxtype
        self.taxIrregular = self.payroll.taxirregular
        self.taxFinal = self.payroll.taxfinal

        # kerjain update_thr_bonus

        self.payroll.nettosebelum = self.nettosebelum_m_employee

        self.save_to_tpayroll()
        new_record = self.migrate_tmppayroll_to_tpayroll()         
        self._drop_temp_table()

        # return new_record    
        return {
            column.name: getattr(new_record, column.name)
            for column in TPayroll.__table__.columns
        }