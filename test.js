const employees = [

    {

        empId: 12003,

        empName: "Rahul Singh",

	empDob: "1990-11-24",

	empGender: "M",

        shiftId: 27

    },

    {

	empId: 12002,

        empName: "Monika Roy",

	empDob: "1987-06-11",

	empGender: "F",

        shiftId: 14

    },

    {

	empId: 12007,

        empName: "Abhay Chakraborty",

	empDob: "1992-07-19",

	empGender: "M",

        shiftId: 22

    },

    {

	empId: 12003,

        empName: "Rahul Singh",

	empDob: "1990-11-24",

	empGender: "M",

        shiftId: 27

    },

    {

        empId: 12026,

        empName: "Arnab Roy",

	empDob: "1983-05-02",

	empGender: "M",

        shiftId: 14

    }

];


function empDob(employees){
    const result =employees.map((employee)=>(employee.empDob<=1990))
 for(let i=0;i<=employee.length)
    console.log(result)
}


empDob();
// function sortArray(employees){
// console.log(employees.empDob)

// };
// sortArray();


// function deuplicateObject(employees){
//   const duplicateObj= employees.empName.sort()
// console.log(duplicateObj)
// }


// function duplicateObj();