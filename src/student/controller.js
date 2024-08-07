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

module.exports = {
    getStudents,
    getStudentById,
};