const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = ?";

module.exports = {
    getStudents,
    getStudentById,
}