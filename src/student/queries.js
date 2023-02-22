exports.getStudentsQ = "select * from students";

exports.getStudentByIdQ = "select * from students where id = $1";

exports.addStudent = "insert into students (name, email) values($1, $2)"

exports.checkForEmail = "select * from students where email = $1";
