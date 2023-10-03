export default function getStudentsByLocation(stdArr, city) {
  return stdArr.filter((student) => student.location === city);
}
