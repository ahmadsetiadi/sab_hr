// routes/tCuti.js
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
// 
// const moment = require('moment');
// const { body, validationResult } = require('express-validator');
// 

const ZProcess = require('../models/z_process');
const v_summary = require('../models/v_summary');
const { authenticateToken  } = require('../utils/jwt');
const { sendProgressUpdate  } = require('../utils/websocket');
// const { getEmployeeIds } = require('./global'); 
const sequelize = require('../config/database');

router.post('/process', authenticateToken, async (req, res) => {
      // console.log("process");
      // let { startdate, condition1, enddate } = req.body;    
      let zp;
      let totalSteps = 100;
      let currentStep = 0;
      let pid;

      try {        
          zp = await ZProcess.create(req.body);
          pid = zp.process_id; console.log(pid);        
          const interval = setInterval(async () => {
              const zz = await ZProcess.findOne({ where: { process_id: pid } });
              if (zz) {
                  currentStep = zz.nomor;
                  totalSteps  = zz.total;                   
                  const progress = (currentStep / totalSteps) * 100;                  
                  sendProgressUpdate(progress);
                  if (currentStep >= totalSteps) {
                      clearInterval(interval);  
                      console.log("run payroll finished");          
                  }
              } else {
                  console.log(`Tidak ditemukan ZProcess dengan process_id: ${pid}`);
              }
          }, 1000); // Simulasi setiap detik        

          res.status(201).json(zp);
      } catch (error) {
          res.status(400).json({ error: error.message });
      }
});

router.get('/exists/:id/:tdate', authenticateToken, async (req, res) => {     
      try {        
        const employeeId = parseInt(req.params.id);
        const tdate = new Date(req.params.tdate);

        if (isNaN(employeeId) || isNaN(tdate.getTime())) {
        return res.status(400).json({ message: 'Invalid ID or Date format' });
        }
        
        const existingPayroll = await v_summary.findOne({
            where: {
                employee_id: employeeId,
                startdate: { [Op.lte]: tdate },
                enddate: { [Op.gte]: tdate }
            }
        });
        
        if (existingPayroll) {
            return res.status(200).json({ message: 'Payroll Exists' });
        } else {
            return res.status(201).json({ message: 'Payroll Not Exists' });
        }
        
      } catch (error) {
          res.status(400).json({ error: error.message });
      }
});


router.delete('/', async (req, res) => {
  try {
    console.log("==========================test====================");
    console.log(req.body);
    const { employee_id, tdate } = req.body;
    const employeeId = employee_id;

    if (!employee_id || !tdate) {
      return res.status(400).json({ message: 'employee_id dan tdate wajib diisi' });
    }

    const tdateObj = new Date(tdate);
    const tMonth = tdateObj.getMonth() + 1;
    const tYear = tdateObj.getFullYear();

    // 1. Cek apakah ada payroll lebih baru
    const [newerPayroll] = await sequelize.query(`
      SELECT payroll_id FROM t_payroll
      WHERE employee_id = :employee_id
        AND (
          YEAR(tdate) > :tYear
          OR (YEAR(tdate) = :tYear AND MONTH(tdate) > :tMonth)
        )
      LIMIT 1
    `, {
      replacements: { employee_id, tYear, tMonth },
      type: sequelize.QueryTypes.SELECT
    });

    if (newerPayroll) {
      return res.status(403).json({ message: 'Tidak bisa dihapus. Ada payroll lebih baru untuk karyawan ini.' });
    }

    // 2. Cari payroll_id untuk tdate tersebut
    const [payroll] = await sequelize.query(`
      SELECT payroll_id FROM t_payroll
      WHERE employee_id = :employee_id
        AND YEAR(tdate) = :tYear
        AND MONTH(tdate) = :tMonth
      LIMIT 1
    `, {
      replacements: { employee_id, tYear, tMonth },
      type: sequelize.QueryTypes.SELECT
    });

    if (!payroll) {
      return res.status(404).json({ message: 'Payroll tidak ditemukan untuk bulan dan tahun tersebut' });
    }

    const payrollId = payroll.payroll_id;

    await sequelize.query(`
      DELETE FROM t_transferbank WHERE payroll_id = :payrollId
    `, {
      replacements: { payrollId }
    });
    await sequelize.query(`
      DELETE FROM t_summary WHERE payroll_id = :payrollId
    `, {
      replacements: { payrollId }
    });

    // set null payrolldate di t_loan_detail
    await sequelize.query(`
        update t_loan_detail set payrolldate=null 
        where 
        loan_id in (
            select loan_id from t_loan 
            where employee_id= :employeeId			
        ) and payrolldate is not null and 
        month(payrolldate)=:tMonth and 
        year(payrolldate)=:tYear 
    `, {
      replacements: { employeeId, tYear, tMonth },
    });
    await sequelize.query(`
      update t_loan set sudahbayar=0 where employee_id=:employeeId
    `, {
      replacements: { employeeId }
    });
    await sequelize.query(`
      update t_loan a, (
        select ld.loan_id, sum(ld.amount) as sudahbayar 
        from t_loan_detail ld
        inner join t_loan lh on ld.loan_id=lh.loan_id
        where lh.employee_id = :employeeId
        and payrolldate is not null 
        group by lh.loan_id
    ) b
    set a.sudahbayar=b.sudahbayar
    where a.loan_id=b.loan_id
    `, {
      replacements: { employeeId }
    });
    await sequelize.query(`
      update t_loan set sisa = total-sudahbayar where employee_id= :employeeId
    `, {
      replacements: { employeeId }
    });

    // 3. Hapus detail
    await sequelize.query(`
      DELETE FROM t_payroll_detail WHERE payroll_id = :payrollId
    `, {
      replacements: { payrollId }
    });

    // 4. Hapus header
    await sequelize.query(`
      DELETE FROM t_payroll WHERE payroll_id = :payrollId
    `, {
      replacements: { payrollId }
    });

    return res.status(200).json({ message: 'Payroll berhasil dihapus' });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
