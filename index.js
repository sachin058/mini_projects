let report = [
  { name: "Sachin", marks: 70 },
  { name: "Pavan", marks: 89 },
  { name: "Gemini", marks: 67 },
  { name: "Mann", marks: 94 },
  { name: "Meet", marks: 32 },
  { name: "Saurav", marks: 99 },
  { name: "Puneet", marks: 56 },
];

function printReport(report) {
  console.log("Student \t Marks");
  console.log("----------------------");
  report.forEach((student) => {
    console.log(`${student.name} \t\t ${student.marks}`);
  });
}
printReport(report);

function printTopper() {
  let topper = report.reduce((topper, curr) => {
    return topper["marks"] < curr["marks"] ? curr : topper;
  });
  console.log(`Topper is ${topper.name} with ${topper.marks} marks.`);
}

printTopper();

function averageMarks() {
  let sum = 0;
  sum = report.reduce((res, curr) => {
    return res + curr["marks"];
  }, 0);
  let average = sum / report.length;
  console.log(sum);
  console.log(
    `The average marks of this class is ${average} with a total of ${report.length} students`
  );
}

averageMarks();

function cutOff() {
  let cutOff = report.filter((student) => {
    return student["marks"] > 80;
  });
  console.log("Below students have above cut off marks ");
  printReport(cutOff);

}

cutOff();
