export default function updateStudentGradeByCity(stdArr, city, newGrades) {
  const students = stdArr.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const moja = student;
    for (const grade of newGrades) {
      if (moja.id === grade.studentId) {
        moja.grade = grade.grade;
      }
    }
    return moja;
  });
  return newStudents;
}
