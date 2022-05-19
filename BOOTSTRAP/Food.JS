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

for (let i = 0; i < mealArr.length; i++){
    dayDrop.innerHTML+=`<option value="${mealArr[i].day}">${mealArr[i].day}</option>`
}
for (let i = 0; i < mealArr.length; i++){
    timeDrop.innerHTML+=`<option value="${mealArr[i].eatMoment[i].eatTime}">${mealArr[i].eatMoment[i].eatTime}</option>`
}


function addMeal(){
    var dayDrop = document.querySelector("#mealDay")
    var timeDrop = document.getElementById('price').value;

}
    
        
function fetchFood(){
    table.innerHTML='';
    for(let i = 0; i < mealArr.length;i++){
        `<tr>
            <td>${i+1}</td>
            <td >${mealArr[i].day}</td>
            <td id="">${mealArr[i].eatMoment[i].eatTime}</td>
            <td id="">${mealArr[i].eatMoment[i].foodType}</td>
         </tr>
        `      
    }
}

function getMealType(e){
    var mealOutput ="";
    var getMeal = e.target.value;
    for(let i = 0 ; i < mealArr.length ; i++){
        if (mealArr[i].eatMoment[i].eatTime == getMeal){
            mealOutput = mealArr[i].eatMoment[i].foodType
        }
    }
    timeDrop.value = mealOutput;
    fetchFood()
    console.log(getMeal);
  }