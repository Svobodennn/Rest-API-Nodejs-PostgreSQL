const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = ?";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES (?, ?, ?, ?)";
const checkEmailExists = "SELECT 1 FROM students where email = ?";
const removeStudent = "DELETE FROM students WHERE id = ?";
const updateStudent = "UPDATE students set name = ? WHERE id = ?";

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    checkEmailExists,
    removeStudent,
    updateStudent,
}