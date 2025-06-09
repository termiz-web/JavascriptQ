
// Question 1: Student Grade Processing
const learners = [
  { name: "Alice", grade: 85, subject: "Math" },
  { name: "Bob", grade: 92, subject: "Science" },
  { name: "Charlie", grade: 78, subject: "Math" },
  { name: "Diana", grade: 96, subject: "English" },
  { name: "Eve", grade: 88, subject: "Science" }
];


// a) Create a new array containing only the student names
const studentname = learners.map((onlynames)=>{
      return onlynames.name; 
    })
console.log(studentname);

// 2 )  Create a new array with grade percentages converted to letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)

const lettergrade = learners.map((letter)=> {
  if (letter.grade>90) return "A"; 
    else if (letter.grade >= 80) return "B";
  else if (letter.grade >= 70) return "C";
  else if (letter.grade >= 60) return "D";
  else return "F";
})
console.log(lettergrade);


// 3 ) Add a "status" property to each student object ("Excellent" for 90+, "Good" for 80-89, "Average" for 70-79, "Needs Improvement" for <70)



const updatedStudents = learners.map((student) => {
  let status = "";

  if (student.grade >= 90) status = "Excellent";
  else if (student.grade >= 80) status = "Good";
  else if (student.grade >= 70) status = "Average";
  else status = "Needs Improvement";

  return { ...student, status: status };
});

console.log(updatedStudents);





