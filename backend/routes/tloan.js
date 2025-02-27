// routes/tCuti.js
const express = require('express');
const router = express.Router();
const TLoan = require('../models/t_loan');
const TLoanDetail = require('../models/t_loan_detail');
const MEmployee = require('../models/m_employee');
const moment = require('moment');

// validationResult

const { authenticateToken  } = require('../utils/jwt');
const { body } = require('express-validator');
const { Op } = require('sequelize');
// const connection = require('./../config/db'); 
const { getEmployeeIds } = require('./global'); 
const Employee = require('../models/m_employee');

async function insertLoanDetails(loan_id, startdate, total, bulan, amount) {
  try {
      // Parse tanggal startdate
      let startDate = new Date(startdate); console.log(startDate);

      // Hitung total pembayaran berdasarkan amount dan bulan
      let totalAmountFromRegularPayments = amount * (bulan - 1);

      // Hitung pembayaran terakhir
      let lastPaymentAmount = total - totalAmountFromRegularPayments;

      // Buat array untuk paymentSchedule
      let paymentSchedule = [];
      for (let i = 0; i < bulan - 1; i++) {
          paymentSchedule.push(amount);
      }
      paymentSchedule.push(lastPaymentAmount);

      const deletedCount = await TLoanDetail.destroy({
        where: {
          loan_id: loan_id
        }
      });

      // Mulai transaksi
      const transaction = await TLoanDetail.sequelize.transaction();

      try {
          // Insert detail cicilan
          for (let i = 0; i < bulan; i++) {
              console.log(startDate.getDate());
              let momentStartDate = moment(startDate);

              //let tdate = new Date(startDate.getFullYear(), startDate.getMonth() + i+1, startDate.getDate());
              let newDate = momentStartDate.add(i, 'months');            
              let tdate = newDate.toDate();
              console.log(tdate);

              let tdateString = tdate.toISOString().split('T')[0];
              console.log(tdateString);
              await TLoanDetail.create({
                  loan_id: loan_id,
                  tdate: tdateString,
                  payroll_date: null,
                  amount: paymentSchedule[i]
              }, { transaction });
          }

          // Commit transaksi
          await transaction.commit();
          return { success: true, message: 'Data cicilan berhasil dimasukkan ke dalam tabel t_loan_detail.' };
      } catch (error) {
          // Rollback transaksi jika terjadi kesalahan
          await transaction.rollback();
          throw error;
      }
  } catch (error) {
      console.error('Error inserting loan details:', error);
      return { success: false, message: 'Gagal memasukkan data cicilan ke dalam tabel t_loan_detail.' };
  }
}

// Create a new t_ad record
router.post('/', async (req, res) => {
    try {
        const employee = await MEmployee.findOne({
            where: { employee_id: req.body.employee_id }
        });

        const tloan = await TLoan.create({
            startdate: req.body.startdate,
            employee_id: req.body.employee_id,
            nip: employee.nip,
            total: req.body.total,
            bulan: req.body.bulan,
            amount: req.body.amount,
            sudahbayar: req.body.sudahbayar,
            sisa: req.body.sisa,
            tipe: "Hutang Perusahaan",
            keterangan: req.body.keterangan,
            company_id: employee.company_id,
            department_id: employee.department_id,
            position_id: employee.position_id,
            employeestatus_id: employee.employeestatus_id,
            useradded: req.body.useradded, // Contoh penggunaan user dari req
            dateadded: new Date(),
          });

        const result = await insertLoanDetails(tloan.loan_id, tloan.startdate, tloan.total, tloan.bulan, tloan.amount);
        // console.log(result);

        res.status(201).json(tloan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', authenticateToken, async (req, res) => {
    try {

        const employee = await MEmployee.findOne({
            where: { employee_id: req.body.employee_id }
        });
        
        const tloan = await TLoan.findByPk(req.params.id);
        if (!tloan) {
        return res.status(404).json({ message: 'Record not found' });
        }
        // await tad.update(req.body);
        await tloan.update({
            startdate: req.body.startdate,
            employee_id: req.body.employee_id,
            nip: employee.nip,
            total: req.body.total,
            bulan: req.body.bulan,
            amount: req.body.amount,
            sudahbayar: req.body.sudahbayar,
            sisa: req.body.sisa,
            tipe: "Hutang Perusahaan",
            keterangan: req.body.keterangan,
            company_id: employee.company_id,
            department_id: employee.department_id,
            position_id: employee.position_id,
            employeestatus_id: employee.employeestatus_id,            
            useredited: req.body.useredited, // Contoh penggunaan user dari req
            dateedited: new Date(),            
        })
        res.status(200).json(tloan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a t_ad record by ID
router.delete('/:id', authenticateToken, async (req, res) => {    
    try {
        const tloan = await TLoan.findByPk(req.params.id);

        if (!tloan) {
            return res.status(404).json({ message: 'Record not found' });
        }

        await tloan.update({
            status_deleted: 1,
            useredited: req.body.useredited, // Contoh penggunaan user dari req
            dateedited: new Date(), 
        });
        res.status(200).json(tloan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all t_cuti records
router.get('/', authenticateToken, async (req, res) => {
    try {
      const { search, username, startdate, enddate }= req.query;
      let whereConditions = [];
    //   whereConditions.push({
    //     status_deleted: 0
    //   });

      console.log("a1");
      const employeeIds = await getEmployeeIds(username); //console.log(employeeIds)
      if (employeeIds && employeeIds.length > 0) {        
        whereConditions.push({
            employee_id: {
                [Op.in]: employeeIds // Assuming you are searching by name
            }
        });
      }
      console.log("a2");
      if (search) {
        whereConditions.push({
            [Op.or]: [
                { '$employee.name$': { [Op.like]: `%${search}%` } },
                {
                    keterangan: {
                        [Op.like]: `%${search}%` // Mencari berdasarkan description
                    }
                }
            ]
        });
      }
      console.log("a3");
      if (startdate && enddate) {
        whereConditions.push({
            startdate: {
                [Op.gte]: new Date(startdate) // Greater than or equal to startdate
            }
        });
        whereConditions.push({
          startdate: {
                [Op.lte]: new Date(enddate) // Less than or equal to enddate
            }
        });
     }
     console.log("a4");
      const tloans = await TLoan.findAll({
          where: whereConditions, 
          include: [
            {
                model: Employee,
                as: 'employee'
            }
          ],
          order: [
            [{ model: Employee, as: 'employee' }, 'name', 'ASC'], // Urutkan berdasarkan Employee.name
            ['startdate', 'ASC'] // Urutkan berdasarkan TAd.tdate
          ]
      });

      console.log("a5");
      res.json(tloans);

    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message });
    }
});

// Get a single t_cuti record by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        // const employee = await MEmployee.findOne({
        //     where: { employee_id: req.body.employee_id }
        // });

    //   const tad = await TAd.findByPk(req.params.id);
      
      const tloan = await TLoan.findOne({
        where: { loan_id: req.params.id },
        include: [
            {
                model: Employee,
                as: 'employee'
            }
        ]
      });

      if (tloan) {
        res.json(tloan);
      } else {
        res.status(404).json({ error: 'Record not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
