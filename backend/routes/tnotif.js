const express = require('express');
const router = express.Router();
const TNotif = require('../models/t_notif');

const { authenticateToken  } = require('../utils/jwt');
const { Op, Sequelize } = require('sequelize');

const { getEmployeeIds, getActiveEmployeeIds } = require('./global'); 
const Employee = require('../models/m_employee');

const { sendNotification } = require('./../firebase.js');

router.get('/:username', authenticateToken, async (req, res) => {
    try {
      const username = req.params.username;
      const yearNow = new Date().getFullYear();
      
      let whereConditions = [];
      whereConditions.push({
            tousername: username
      });
      whereConditions.push(
        Sequelize.where(
          Sequelize.fn("YEAR", Sequelize.col("tdate")),
          yearNow
        )
      );
      
      const tnotif = await TNotif.findAll({
          where: whereConditions, 
          include: [
            {
                model: Employee,
                as: 'employee'
            }
          ],
          order: [
            [{ model: Employee, as: 'employee' }, 'name', 'ASC'], // Urutkan berdasarkan Employee.name
            ['tdate', 'DESC'], // Urutkan berdasarkan TAd.tdate
            ['ttime', 'DESC'],
          ]
      });

      res.json(tnotif);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
