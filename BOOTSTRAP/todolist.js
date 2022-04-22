var arr = [];
var table = document.getElementById('table');
let editIndex ="";



function myList(){
var todo = document.getElementById('todo').value;
    var tod = {
        item: todo
    }
    if(todo == ""){
        alert('Add an Item')
    }
    else{
        arr.push(tod);
        fetchData()
    }
}

function fetchData(params){
    table.innerHTML= '';
    for(let i=0; i<arr.length; i++){
        table.innerHTML+= `
        <tr>
            <td>${i+1}</td>
            <td>${arr[i].item}</td>
            <td> 
                 <i class="fa-solid fa-trash" onclick="deletetodo(${i})"></i>
                 <i class="fa-solid fa-pen" onclick="editTodo(${i})" ></i>
            </td>
        </tr>
        `
        
    }
}

fetchData()
function deletetodo(ind){
    arr.splice(ind,1)
    fetchData()
}

// update

function update(){
    let inputValue = document.getElementById("todo").value;
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
    input.value = valued.item;
};