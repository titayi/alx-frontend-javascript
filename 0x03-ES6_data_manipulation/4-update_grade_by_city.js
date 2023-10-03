export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  return studentArray
    .filter(student => student.location === city)
    .map(student => {
      const gradeInfo = newGrades.find(grade => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeInfo ? gradeInfo.grade : "N/A"
      };
    });
}
