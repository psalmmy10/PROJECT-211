var arr = [];
var table = document.getElementById('table');
let editIndex ="";
var selectDropDown = document.getElementById("opt")
var select = [{name:"Bread", price:10},{name:"Bread and Beans", price : 20}, {name:"Rice", price:40} ,{name:"Yam", price: 50}, {name:"Egg", price:60}];


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
  getInputValue.value = ' $' + priceOutput.toFixed(2) + ".";
  
  fetchData()
  console.log();
}




function myList(){
    var todo = document.getElementById('todo');
    var tod = {
        item: todo
    }
    if(todo == ""){
        alert('Add an Item')
    }
    else{
        arr.push(tod);
        fetchData()
        
        getInputValue = document.getElementById("list").table = getInputValue.value ;
        getInputValue = document.getElementById("update").table = getInputValue.value ;
    }
    
}

function fetchData(){
    table.innerHTML= '';
    for(let i=0; i<arr.length; i++){
        table.innerHTML+= `
        <tr>
            <td>${i+1}</td>
            <td>${arr[i].item}</td>
            <td></td>
            <td> 
                 <i class="fa-solid fa-trash" onclick="deletetodo(${i})"></i>
                 <i class="fa-solid fa-pen" onclick="editTodo(${i})" ></i>
            </td>
        </tr>
        `   
    }
}

function deletetodo(ind){
    arr.splice(ind,1)
    fetchData()
}

// update

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

// edit
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
    input.getItemPrice(e) = valued.item;
};
fetchData()