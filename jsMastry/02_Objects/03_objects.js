//object destructiring and spread operator
const course={
    conrsename: "JavaScript Mastery",
    price: 999,
    courseInstructor: "Kunal Deshmukh",
    courseDuration: "3 months",
    courseContent: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
}

const {courseInstructor: a} = course;

console.log(a); //Output the course instructor

