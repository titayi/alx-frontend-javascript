export default function getStudentIdsSum(stdArr) {
  return stdArr.reduce((sum, student) => sum + student.id, 0);
}
