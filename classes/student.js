const Person = require('./person');

// Your code here

class Student extends Person {

  constructor(firstName, lastName, major, subject, gpa){
    super(firstName,lastName);
    this.major = major;
    this.subject = subject;
    this.gpa = gpa;
  }


  static compareGPA(s1,s2){

    if (s1.gpa < s2.gpa){ return `${s2.firstName} ${s2.lastName} has the higher gpa`;}

    else if (s1.gpa > s2.gpa){return `${s1.firstName} ${s1.lastName} has the greater gpa `;}

    else{return `Both students have the same GPA`; }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
