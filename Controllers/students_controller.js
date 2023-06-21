const Student = require('../Models/students');
const Interview = require('../Models/interview');

// Format: module.exports.actionName = function() { body/definition }

// Add new student to the students collection
module.exports.addStudent = (req, res) => {
    Student.create({
        batch: req.body.batch,
        stu_id: req.body.student_id,
        stu_name: req.body.student_name,
        college: req.body.college,
        yop: req.body.yop,
        score: req.body.score
    });
    return res.redirect('back');
}

module.exports.interviewUpdate = (req, res) => {
    Interview.create({
        batch: req.body.batch,
        stu_id: req.body.student_id,
        company: req.body.company,
        interview_date: req.body.interview_date,
        result: req.body.result,
        placement_status: req.body.placement_status
    });
    return res.redirect('back');
}

const { Parser } = require('json2csv');
module.exports.downloadStudentsList = async (req, res) => {
    let list = await Student.find({});
    const fields = ['batch', 'stu_name', 'stu_name', 'college', 'yop', 'score[0]','score[1]','score[2]','score[3]','score[4]'];
        const json2csvParser = new Parser({ fields, excelStrings: true });
        const csvFormat = json2csvParser.parse(list);

        res.attachment('Students_List.csv');
        res.status(200).send(csvFormat);
}

module.exports.downloadInterviews = async (req, res) => {
    let interviews = await Interview.find({});
    const fields = ['batch', 'stu_id', 'company', 'interview_date', 'result', 'placement_status'];
        const json2csvParser = new Parser({ fields, excelStrings: true });
        const csvFormat = json2csvParser.parse(interviews);

        res.attachment('Interviews.csv');
        res.status(200).send(csvFormat);
}