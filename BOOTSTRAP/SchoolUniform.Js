let timeTable = [
    {
        days: "Monday", time: [
            {subjectTime:"9:00AM" , subject:"Mathematics", teacher:"Mrs Adola"},
            {subjectTime:"11:00AM" , subject:"English", teacher:"Mrs Sunmi"},
            {subjectTime:"2:00PM" , subject:"Commerce", teacher:"Mrs Funmi"},
        ]
    },
    {
        days: "Tuesday", time: [
            {subjectTime:"9:00AM" , subject:"Basic-Science", teacher:"Mrs Sunmi"},
            {subjectTime:"11:00AM" , subject:"English", teacher:"Mrs Funmi"},
            {subjectTime:"2:00PM" , subject:"Commerce", teacher:"Mr Maleek"},
        ]
    },
    {
        days: "Wednesday", time: [
            {subjectTime:"9:00AM" , subject:"Account", teacher:"Mr Sam"},
            {subjectTime:"11:00AM" , subject:"English", teacher:"Mrs Debora"},
            {subjectTime:"2:00PM" , subject:"Commerce", teacher:"Mr Temmy"},
        ]
    },
    {
        days: "Thursday", time: [
            {subjectTime:"9:00AM" , subject:"FurtherMaths", teacher:"Mr Bee"},
            {subjectTime:"11:00AM" , subject:"Article", teacher:"Mrs Dayo"},
            {subjectTime:"2:00PM" , subject:"Yoruba", teacher:"Mr Ajanoku"}
        ]
    },
    {
        days: "Friday", time: [
            {subjectTime:"9:00AM" , subject:"Sport", teacher:"Mr David"},
            {subjectTime:"11:00AM" , subject:"Computer", teacher:"Mrs Doyin"},
            {subjectTime:"2:00PM" , subject:"Weekly Accessment", teacher:"Mr Femi"}
        ]
    }
]



let selectDays = document.querySelector("#schoolDay")
let selectSubjectTime = document.querySelector("#subjectTime")
var table = document.querySelector('#table');

for(let i = 0 ; i < timeTable.length; i++){
    selectDays.innerHTML +=`<option value ="${timeTable[i].days}">${timeTable[i].days}<option>`
}