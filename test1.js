// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString();
// }
// console.log(numberToString(67));


function getGrade (s1, s2, s3) {
    // Code here
    let score = (s1 + s2 + s3)/3;
    switch (true) {
      case (90 <= score):
      return "yourGrade: 'A'";
      case (80 <= score):
        return "yourGrade: 'B'";
      case (70 <= score):
        return "yourGrade: 'C'";
      case (60 <= score):
        return "yourGrade: 'D'"; 
      case (0 <= score):
        return "yourGrade: 'F'";
       
     }
  }
  console.log(getGrade (78, 99, 67));

// function getGrade (myScore) {
  

//   if (100 >= myScore && myScore >= 90) {
//     return "A";
//   } else if (90 > myScore && myScore>= 80) {
//     return "B";
//   } else if (80 > myScore && myScore >= 70) {
//     return "C";
//   } else if (70 > myScore && myScore >= 60) {
//     return "D"; 
//   } else if (60 > myScore && myScore >= 0) {
//     return "F";
//   } else {
//     return "You were absent!";
//   }
// }
// console.log(getGrade (48));