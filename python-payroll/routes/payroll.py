# routes/payroll.py

from flask import Blueprint, request, jsonify
from db import get_connection
from mysql.connector import Error
from services.payroll_service import set_salary_non_at, set_biaya_jabatan, set_bulan_pengali, set_jamsostek

payroll_bp = Blueprint('payroll', __name__)

@payroll_bp.route('/payroll', methods=['POST'])
def payroll():
    data = request.get_json()

    payrolldate = data.get('payrolldate')
    employee_id = data.get('employee_id')

    if not payrolldate or not employee_id:
        return jsonify({'error': 'Payrolldate and employee_id are required'}), 400

    try:
        conn = get_connection()        
        cursor = conn.cursor(dictionary=True) 

        # Eksekusi FUNCTION MySQL via SELECT
        cursor.execute("SELECT p01_FillPayrollDate(%s) as res", [payrolldate])
        result1 = cursor.fetchone()

        cursor.execute("SELECT p02_DeleteFirst(%s, %s) as res", [payrolldate, employee_id])
        result2 = cursor.fetchone()

        cursor.execute("SELECT p03_InsertDefault(%s) as res", [employee_id])
        result3 = cursor.fetchone()

        conn.commit()

        # ====================================================
        cursor.execute("SELECT * FROM m_employee WHERE employee_id = %s", (employee_id,))
        emp_row = cursor.fetchone()
        cursor.execute("""
            SELECT * FROM t_payroll 
            WHERE employee_id = %s 
              AND MONTH(tdate) = MONTH(%s) 
              AND YEAR(tdate) = YEAR(%s)
        """, (employee_id, payrolldate, payrolldate))
        pay_row = cursor.fetchone()
        # ====================================================

        # ====================================================
        bjab = {
            'pct': 0,
            'max': 0,
            'bln': 0
        }        
        set_biaya_jabatan(conn, payrolldate, bjab, emp_row, pay_row)
        bjab_pct = bjab['pct']
        bjab_max = bjab['max']
        bjab_bln = bjab['bln']
        # ====================================================

        # set_salary_non_at(conn, payrolldate, employee_id)
        set_salary_non_at(conn, emp_row, pay_row, 'ST')
        bulanpengali = set_bulan_pengali(conn, employee_id, pay_row['startdate'], pay_row['enddate'])
        # print(bulanPengali)

        set_jamsostek(conn, pay_row)

        return jsonify({
            'p01_result': result1['res'] if result1 else None,
            'p02_result': result2['res'] if result2 else None,
            'p03_result': result3['res'] if result3 else None,
            'message': 'Payroll functions executed successfully'
        }), 200

    except Error as e:
        return jsonify({'error': str(e)}), 500

    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()
