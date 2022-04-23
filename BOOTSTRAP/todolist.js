var arr = [];
var table = document.getElementById('table');
let editIndex ="";
var selectDropDown = document.getElementById("opt")
var select =[
               {name:"Bread", price:10},
               {name:"Bread and Beans", price : 20}, 
               {name:"Rice", price:40} ,
               {name:"Yam", price: 50}, 
               {name:"Egg", price:60}
            ];


for (let i = 0 ; i < select.length ; i++){
    selectDropDown.innerHTML+=`<option value="${select[i].name}">${select[i].name}</option>`
}





 
function getItemPrice(e){
  var priceOutput = "";
  var getPrice = e.target.value;
  var getInputValue =document.getElementById("price")
  for(let i = 0 ; i < select.length ; i++){
      if (select[i].name == getPrice){
        priceOutput = select[i].price
      }
  }
  getInputValue.value = priceOutput;
  fetchData()
}




function myList(){
    var item = document.getElementById('opt').value;
    var amount = document.getElementById('price').value;
    var tod = {
        item , amount:amount
    }
    if(item  ==  "" || amount == " "){
        alert('Add an Item')
    }
    else{
        arr.push(tod);
        fetchData()
    }
    // console.log(amount);
}

//Add Function
function fetchData(){
    table.innerHTML= '';
    var totalPrice =  Number(); 
    for(let i=0; i<arr.length; i++){
        totalPrice += Number(arr[i].amount) 
        table.innerHTML+= `
        <tr>
            <td>${i+1}</td>
            <td >${arr[i].item}</td>
            <td id="sumUp">${"$" + arr[i].amount}</td>
            <td> 
                 <i class="fa-solid fa-trash" onclick="deletetodo(${i})"></i>
                 <i class="fa-solid fa-pen" onclick="editTodo(${i})" ></i>
            </td>
        </tr>
        ` 

    }
    document.getElementById("cal").value = totalPrice;
}


function deletetodo(ind){
    arr.splice(ind,1)
    fetchData()
}

// Edit update

function update(){
    let inputValue = document.getElementById("todo");
    for (let i =0; i<arr.length; i++){
        if(i == editIndex){
            arr[i].item = inputValue
        }
    }
    document.getElementById("list").classList.remove("display")
    document.getElementById("update").classList.add("display")
    fetchData()
}

// Edit Function

function editTodo(edit){
    editIndex = edit
    let valued ="";
    let input = document.getElementById("todo");
    document.getElementById("list").classList.add("display")
    document.getElementById("update").classList.remove("display")

    arr.forEach ((item, i) =>{
        if (i == edit){
            valued = item
        }
    })
    fetchData()
};


