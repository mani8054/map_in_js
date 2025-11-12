const input = require("readline-sync");

// This is your student Map
const students = new Map([
  [101, { name: "Mani", subjects: { english: 85, math: 90, science: 88 } }],
  [102, { name: "Kavin", subjects: { english: 75, math: 65, science: 80 } }],
  [103, { name: "Sasi", subjects: { english: 85, math: 90, science: 88 } }],
  [104, { name: "Mahi", subjects: { english: 75, math: 65, science: 80 } }],
  [105, { name: "Devi", subjects: { english: 85, math: 90, science: 88 } }],
]);

// Add one more student
students.set(106, { name: "Arun", subjects: { english: 70, math: 75, science: 72 } });

// Loop through Map and print total marks
for (let [roll, data] of students) {
  let total = data.subjects.english + data.subjects.math + data.subjects.science; // sum of marks
  let average = total / 3; // optional: find average too
  console.log("Roll No: " + roll + ", Name: " + data.name + ", Total: " + total + ", Average: " + average.toFixed(2));

}