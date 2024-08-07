const db = require('../../db');
const queries = require('./queries');


const getStudents = (req, res) => {
    db.query(queries.getStudents, (err, results) => {
        if(err) throw err;
        res.status(200).json(results);
    });
}
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    db.query(queries.getStudentById, [id], (err, results) => {
        if(err) throw err;
        res.status(200).json(results);
    });
}
const addStudent = (req, res) => {
    const {name, email, age, dob} = req.body;

    // check if email exists
    db.query(queries.checkEmailExists, [email], (err, results) => {
        if(results.length) {
            res.send('Email already exists');
        }
        else {
            // Add student
            db.query(queries.addStudent, [name, email, age, dob], (err, results) => {
                if(err) throw err;
                res.status(201).send('Student succesfully added');
            });
        }
        
    });

}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
};