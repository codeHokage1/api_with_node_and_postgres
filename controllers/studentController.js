const studentsPool = require('../config/dbConfig');
const queries = require('../src/student/queries')

exports.getStudents = (req, res) => {
    studentsPool.query(
        queries.getStudentsQ,
        (err, students) => {
            if (err) return res.status(500).send(err.message);
            res.status(200).json({ students: students.rows });
        }
    )
}

exports.getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    studentsPool.query(
        queries.getStudentByIdQ,
        [id],
        (err, student) => {
            if (err) return res.status(500).send(err.message);
            if (!student.rows.length) return res.status(404).send(`Can not find student with id ${id}`);
            
            res.status(200).json({student: student.rows});
        }
    )
}

exports.addStudent = (req, res) => {
    const { name, email } = req.body;
    // check if email already exists
    studentsPool.query(
        queries.checkForEmail,
        [email],
        (err, students) => {
            if (err) return res.status(500).send(err.message);
            if (students.rows.length) return res.status(401).json({message: `Email address ${email} already in use.`});
            
        }
    );
    
    // email is okay, add to db
    studentsPool.query(
        queries.addStudent,
        [name, email],
        (err, result) => {
            if (err) return res.status(500).send(err.message);
            res.status(201).json({newStudents: result.rows});
        }
    )
}