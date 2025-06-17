from sqlalchemy.orm import Session, declarative_base, registry
from sqlalchemy import text, Table, MetaData
from app.models.payroll import TPayroll
from app.models.employee import Employee
from app.models.tmppayroll import TMPPayroll
from app.models.tmppayrolldetail import TMPPayrollDetail
from app.schemas.payroll_schema import PayrollSchema
from sqlalchemy.orm import registry
import uuid
from fastapi import HTTPException
from datetime import datetime, date
from dateutil.relativedelta import relativedelta
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
        self.uid = uuid.uuid4().hex
        self.bjab_bln = 12
        self.tmp_payroll_tablename = f"tmp_payroll_{self.uid}" # "tmp_payroll_abc"
        self.tmp_payroll_detail_tablename = f"tmp_payroll_detail_{self.uid}" # "tmp_payroll_abc"
        print(self.tmp_payroll_tablename)
        self._hapus_payroll_exists(eid, td)
        self._create_temp_table()        
        self._load_biayajabatan()
        

        TempPayrollModel = create_dynamic_model(self.tmp_payroll_tablename, self.db, "TMPPayroll")
        self.payroll : TMPPayroll = TempPayrollModel()
        # self.payroll_id = 0

        TempPayrollDetailModel = create_dynamic_model(self.tmp_payroll_detail_tablename, self.db, "TMPPayrollDetail")
        self.payrolldetail : TMPPayrollDetail = TempPayrollDetailModel()

    def _create_temp_table(self):
        query = f"""CREATE TABLE {self.tmp_payroll_tablename} LIKE t_payroll"""        
        self.db.execute(text(query))
        query = f"""CREATE TABLE {self.tmp_payroll_detail_tablename} LIKE t_payroll_detail"""        
        self.db.execute(text(query))
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
        return new_record

    def get_all(self):
        return self.db.query(TPayroll).all()
    
    def months_between(start_date, end_date):
        """Hitung jumlah bulan antara dua tanggal"""
        return (end_date.year - start_date.year) * 12 + (end_date.month - start_date.month)

    def set_bulan_bjab(self):
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


    def set_salary_nonat(self, tipe='ST'):
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

            print("amount:")
            print(amount)
            if hf:
                current_value = getattr(self.payroll, hf, 0) or 0
                setattr(self.payroll, hf, current_value + int(amount))

                print("a")
                # for col in row._mapping:
                #     setattr(self.payrolldetail, col, getattr(row, col))

                setattr(self.payrolldetail, 'payroll_id', self.payroll.payroll_id)
                setattr(self.payrolldetail, 'amount', amount)
                setattr(self.payrolldetail, 'debugamount', 0)
                setattr(self.payrolldetail, 'diff', 0)
                print("b")
                self.db.add(self.payrolldetail)
                print("c")


        print("d")
        self.db.flush()
        print("e")

    def create(self, data: PayrollSchema):

        self.payroll.employee_id = data.employee_id
        self.set_default_and_payrolldate()

        self.set_bulan_bjab()

        print(self.bjab_bln)
        print(self.bjab_pct)
        print(self.bjab_max)

        self.payroll.totalincome = 3000

        self.set_salary_nonat()
        
        self.save_to_tpayroll()
        new_record = self.migrate_tmppayroll_to_tpayroll()         
        # self._drop_temp_table()

        return new_record    