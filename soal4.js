function getReport(studentGrades) {
  var arrBaru = [];
  var hasil = [];

  for (var i = 0; i < studentGrades.length; i++) {
    if (arrBaru.includes(studentGrades[i].classCode) === false) {
      arrBaru.push(studentGrades[i].classCode);
    }
  }
  for (var a = 0; a < arrBaru.length; a++) {
    var updateReport = {};
    var passed = [];
    var failed = [];
    for (var e = 0; e < studentGrades.length; e++) {
      if (arrBaru[a] === studentGrades[e].classCode && studentGrades[e].score < 70) {
        failed.push(studentGrades[e].name);
      } else {
        if (arrBaru[a] === studentGrades[e].classCode && studentGrades[e].score >= 70) {
          passed.push(studentGrades[e].name);
        }
      }
    }
    updateReport.classCode = arrBaru[a];
    updateReport.passed = passed;
    updateReport.failed = failed;
    hasil.push(updateReport);
  }
  return hasil;
}
var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];
console.log(getReport(grades1));