// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    randomGrade(student){
        `${student}'s grade is now going to be ` + Math.random(student.studentGrade);
    }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']

// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.studentGrade = studentAttributes.studentGrade;
    }
    listsSubjects(){
        this.favSubjects.forEach(function(subject){
            console.log(subject);
          });
    }
    PRAssignement(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    mygrade(){
        return `${this.name} is currently making ${this.studentGrade} in class.`;
    }
}

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor{
    constructor(PMAttributes){
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. 

//Instructors:
const Brit = new Instructor({
    name: 'Brit',
    location: 'Canada',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Ayy it's cold in Canada!`
  });

  const Bob = new Instructor({
    name: 'Bob',
    location: 'New York',
    age: 27,
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `I like bagels and coffee`
  });

  // Student:
  const Sally = new Student({
    name: 'Sally',
    location: 'California',
    age: 21,
    previousBackground: "Starbucks Barista",
    className: "Web15",
    favSubjects: ["Reading", "CSS", "HTML"],
    studentGrade: 94,
  })

  const Kevin = new Student({
    name: 'Kevin',
    location: 'Texas',
    age: 28,
    previousBackground: 'College Mascot',
    className: "UX10",
    favSubjects: ["Lunch", "Nap time", "Math"],
    studentGrade: 88,
  })

  //Project Manager:
  const Mary = new ProjectManagers({
    name: 'Mary',
    location: 'North Carolina',
    age: 42,
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: "Let it be",
    gradClassName: "Web14",
    favInstructor: "Brit"
  })

const Patrick = new ProjectManagers({
    name: 'Patrick',
    location: 'Ohio',
    age: 35,
    favLanguage: 'C#',
    specialty: 'Back-end',
    catchPhrase: "I'm lovin' it!",
    gradClassName: "CS12",
    favInstructor: "Bob"
})


console.log(Brit.speak());
console.log(Brit.demo("Objects"));
console.log(Brit.grade(Kevin, "HTML"));
console.log(Brit.randomGrade(Sally));

console.log(Bob.speak());
console.log(Bob.demo("Arrays"));
console.log(Bob.grade(Mary, "CSS"));

console.log(Sally.speak());
Sally.listsSubjects();
console.log(Sally.PRAssignement("functions"));
console.log(Sally.sprintChallenge("Ruby"));
console.log(Sally.mygrade());


console.log(Kevin.speak());
Kevin.listsSubjects();
console.log(Kevin.PRAssignement("forLoops"));
console.log(Kevin.sprintChallenge("Node"));
console.log(Kevin.mygrade());

console.log(Mary.speak());
console.log(Mary.standUp("Web25_Mary"));
console.log(Mary.debugsCode(Sally, "History"));

console.log(Patrick.speak());
console.log(Patrick.standUp("Web13_help"));
console.log(Patrick.debugsCode(Kevin, "Science"));



