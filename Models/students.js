const mongoose = require('mongoose');

// Defining the schema for students
const studentSchema = new mongoose.Schema(
    {
        stu_name: {
            type: String,
            required: true
            },
        stu_id: {
            type: Number,
            required: true,
            unique: true
        },
        batch: {
            type: Number,
            required: true,
            },
        college: {
            type: String,
            required: true
        },
        yop: {
            type: String,
            required: true
        },
        score: {
            type: Array,
            default: [],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model('students', studentSchema);
module.exports = Student;

