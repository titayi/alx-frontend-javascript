export default function getListStudentIds(stdArr) {
  if (!Array.isArray(stdArr)) {
    return [];
  }
  return stdArr.map((student) => student.id);
}
