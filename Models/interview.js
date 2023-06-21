const mongoose = require('mongoose');

// Defining the schema for interviews
const interviewSchema = new mongoose.Schema(
    {
        batch: {
            type: Number,
            required: true,
            },
        stu_id: {
            type: Number,
            required: true,
            unique: true
        },
        company: {
            type: String,
            required: true
        },
        interview_date: {
            type: String,
            required: true
        },
        result: {
            type: String,
            required: true
        },
        placement_status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Interview = mongoose.model('interviews', interviewSchema);
module.exports = Interview;

