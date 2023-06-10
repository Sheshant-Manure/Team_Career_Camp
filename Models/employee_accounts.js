const mongoose = require('mongoose');

// Defining the schema for employee accounts
const employeeSchema = new mongoose.Schema(
    {
        emp_name: {
            type: String,
            required: true
            },
        emp_id: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
            },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Employee = mongoose.model('employee_accounts', employeeSchema);
module.exports = Employee;

