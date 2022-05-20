let timeTable = [
    {
        days: "Monday", time: [
            {subTime:"9:00AM" , subject:"Mathematics", teacher:"Mrs Adola"},
            {subTime:"11:00AM" , subject:"English", teacher:"Mrs Sunmi"},
            {subTime:"2:00PM" , subject:"Commerce", teacher:"Mrs Funmi"},
        ]
    },
    {
        days: "Tuesday", time: [
            {subTime:"9:00AM" , subject:"Basic-Science", teacher:"Mrs Sunmi"},
            {subTime:"11:00AM" , subject:"English", teacher:"Mrs Funmi"},
            {subTime:"2:00PM" , subject:"Commerce", teacher:"Mr Maleek"},
        ]
    },
    {
        days: "Wednesday", time: [
            {subTime:"9:00AM" , subject:"Account", teacher:"Mr Sam"},
            {subTime:"11:00AM" , subject:"English", teacher:"Mrs Debora"},
            {subTime:"2:00PM" , subject:"Commerce", teacher:"Mr Temmy"},
        ]
    },
    {
        days: "Thursday", time: [
            {subTime:"9:00AM" , subject:"FurtherMaths", teacher:"Mr Bee"},
            {subTime:"11:00AM" , subject:"Article", teacher:"Mrs Dayo"},
            {subTime:"2:00PM" , subject:"Yoruba", teacher:"Mr Ajanoku"}
        ]
    },
    {
        days: "Friday", time: [
            {subTime:"9:00AM" , subject:"Sport", teacher:"Mr David"},
            {subTime:"11:00AM" , subject:"Computer", teacher:"Mrs Doyin"},
            {subTime:"2:00PM" , subject:"Free Period for Practicals", teacher:"Mr Femi"}
        ]
    }
]



let selectDays = document.querySelector("#schoolDay")
let selectSubjectTime = document.querySelector("#subjectTime")
var table = document.querySelector('#table');

for(let i = 0 ; i < timeTable.length; i++){
    selectDays.innerHTML +=`<option value ="${timeTable[i].days}">${timeTable[i].days}<option>`
}

for(let i = 0; i < timeTable[0].time.length; i++){
    selectSubjectTime.innerHTML+=`<option value="${timeTable[0].time[i].subTime}">${timeTable[0].time[i].subTime}</option>`
}

function fetchData(){
    let classData = JSON.parse(localStorage.getItem("data"))
    table.innerHTML='';
    for(let i=0; i<classData.length; i++){
        table.innerHTML+=`
        <tr>
            <td class="text-white">${i+1}</td>
            <td class="text-white">${classData[i].days}</td>
            <td class="text-white">${classData[i].subTime}</td>
            <td class="text-white">${classData[i].subject}</td>
            <td class="text-white">${classData[i].teacher}</td>
         </tr>
        `;   
    };
}


function addPeriod(){
    let duplicateStatus = false
    if (selectDays.value == "" || selectSubjectTime .value == ""){
        return alert ("Please select a day")
    }
    else{
        let subjectData = {
            days : selectDays.value,
            subTime: selectSubjectTime.value
        }
        timeTable.forEach(list =>{
            if (list.days == subjectData.days){
                list.time.forEach(list2 =>{
                    if(list2.subTime == subjectData.subTime){
                        subjectData.subject = list2.subject,
                        subjectData.teacher = list2.teacher
                    }
                });
            }
        });


        let holder = []
        if (localStorage.getItem("data") == null) {
            holder.push(subjectData)
        }
        else{
            holder = JSON.parse(localStorage.getItem('data'))

            holder.forEach(Lists =>{
                if(subjectData.days == Lists.days && subjectData.subTime == Lists.subTime){
                    duplicateStatus=true
                }
            });
            if(duplicateStatus){
                alert('Duplicate entry detected')
            }
            else{
                holder.push(subjectData)
            }
        }
        localStorage.setItem('data', JSON.stringify(holder));
    }
    fetchData()
}