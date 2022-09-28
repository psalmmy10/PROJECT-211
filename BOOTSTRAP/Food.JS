var  mealArr = [
    {
        day: "Sunday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Bread"},
            {eatTime:"Launch", foodType:"Rice"},
            {eatTime:"Dinner", foodType:"Yam"}
        ] 
    },
    {
        day: "Monday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Beans with bread"},
            {eatTime:"Launch", foodType:"Bread with Egg"},
            {eatTime:"Dinner", foodType:"Bread"}
        ] 
    },
    {
        day: "Tuesday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Semo with Eforiro"},
            {eatTime:"Launch", foodType:"Sandwich"},
            {eatTime:"Dinner", foodType:"Fried Rice with Chicken"}
        ] 
    },
    {
        day: "Wednesday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Coffee"},
            {eatTime:"Launch", foodType:"Beans"},
            {eatTime:"Dinner", foodType:"Potato with Egg"}
        ] 
    },
    {
        day: "Thursday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Bread"},
            {eatTime:"Launch", foodType:"Bread"},
            {eatTime:"Dinner", foodType:"Bread"}
        ] 
    },
    {
        day: "Friday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Bread"},
            {eatTime:"Launch", foodType:"Bread"},
            {eatTime:"Dinner", foodType:"Bread"}
        ] 
    },
    {
        day: "Saturday", eatMoment:[
            {eatTime:"Breakfast", foodType:"Bread"},
            {eatTime:"Launch", foodType:"Bread"},
            {eatTime:"Dinner", foodType:"Bread"}
        ] 
    }
]


var dayDrop = document.querySelector("#mealDay")
var timeDrop = document.querySelector("#mealTime")
var table = document.getElementById('table');

for (let i = 0; i < mealArr.length; i++){
    dayDrop.innerHTML+=
    `<option value="${mealArr[i].day}">
       ${mealArr[i].day}
    </option>`
}
for (let i = 0; i < mealArr[0].eatMoment.length; i++){
    timeDrop.innerHTML+=`<option value="${mealArr[0].eatMoment[i].eatTime}">${mealArr[0].eatMoment[i].eatTime}</option>`
}


function fetchFood(){
    let data = JSON.parse(localStorage.getItem('foodData'))
    table.innerHTML='';
    for(let i=0; i<data.length; i++){
        table.innerHTML+=`
        <tr>
            <td class="text-white">${i+1}</td>
            <td class="text-white">${data[i].day}</td>
            <td class="text-white">${data[i].eatTime}</td>
            <td class="text-white">${data[i].foodType}</td>
         </tr>
        `;   
    };
}



function addMeal(){
    let duplicateStatus = false
    if(dayDrop.value == "" || timeDrop.value == ""){
        return alert("please select an item")
    }
   
    else{
        let storage = {
            id: Math.floor(Math.random() * 1000000),
            day: dayDrop.value,
            eatTime: timeDrop.value,
        };
        mealArr.forEach(list => {
            if (list.day == storage.day) {
                list.eatMoment.forEach(list2 => {
                    if (list2.eatTime == storage.eatTime) {
                        storage.foodType = list2.foodType
                    }
                });
            }    
        });

        let holder = []
        if (localStorage.getItem("foodData")==null) {
            holder.push(storage)
        }
        else{
            holder = JSON.parse(localStorage.getItem('foodData'))

            holder.forEach(Lists =>{
                if(storage.day == Lists.day && storage.eatTime == Lists.eatTime){
                    duplicateStatus=true
                }
            })
            if(duplicateStatus){
                alert('Duplicate entry detected')
            }
            else{
                holder.push(storage)
            }
        }
        localStorage.setItem('foodData', JSON.stringify(holder));
    }
    fetchFood() 
}
  
        