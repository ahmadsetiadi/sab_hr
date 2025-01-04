// employeeService.js
// const connection = require('./../config/db'); 
const SUser = require('./../models/s_user');
const SUsergroup = require('../models/s_usergroup');

/**
 * Get employee IDs for a given username.
 * @param {string} username - The username of the user.
 * @returns {Promise<number[]>} - A promise that resolves to an array of employee IDs.
 */
async function getEmployeeIds(username) {
    const user = await SUser.findOne({
        where: {
            username: username,
            active: 1
        },
        include: [
            {
                model: SUsergroup,
                as: 'usergroup'
            }
        ]
    });

    if (!user) {
        return null; // Return null if user is not found
    }

    let list = user.listemployeeid;

    if (list == null || list === undefined || list === "") {
        list = user.employee_id.toString();
    }

    const employeeIds = list.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id));
    return employeeIds; // Return the array of employee IDs
}

module.exports = { getEmployeeIds };
