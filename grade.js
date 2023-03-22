//*This is how the grades should be allocated in the grade converter.*//
let grade;
if (numeric > 79 ) { 
    grade = "A";
  } else if(numeric >= 60) {
    grade = "B";
  } else if(numeric >= 49) {
    grade =  "C";
  } else if(numeric >= 40) {
    grade = "D";
  } else if(numeric < 40) {
    grade = "E";
  }
