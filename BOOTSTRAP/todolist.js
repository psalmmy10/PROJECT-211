var arr = [];
var table = document.getElementById('table');
let editIndex ="";


var selectDropDown = document.getElementById("opt")
var getInputValue = document.getElementById("price")
var selectDropDown2 = document.getElementById("opt1")
var priceInput1 = document.getElementById("price1")
var quantity = 1;


var select =[
               {name:"Bread", price:10},
               {name:"Bread and Beans", price : 20}, 
               {name:"Rice", price:40} ,
               {name:"Yam", price: 50}, 
               {name:"Egg", price:60},
               {name:"Sugar", price:70}
            ];

for (let i = 0 ; i < select.length ; i++){
    selectDropDown.innerHTML+=`<option value="${select[i].name}">${select[i].name}</option>`
    selectDropDown2.innerHTML+=`<option value="${select[i].name}">${select[i].name}</option>`
}

//PUSH FUNCTION
function myList(){
    let status = false
    var item = document.getElementById('opt').value;
    var amount = document.getElementById('price').value;

    if(item  == "" || amount == ""){
        swal({
            title: "please select an item",
        });
    }
  
    for(let i = 0; i < arr.length ; i++){
        if(tod.item == arr[i].item){
           status = true
        }
    }
    if(status){
        swal({
            title: "Item already selected",
        });
    }
    else{
        arr.push({
            item , 
            amount:amount , 
            quantity: 1,
        })
    }

    var tod = {
        id: Math.floor(Math.random () * 1000000),
            item , 
            amount:amount , 
            quantity: 1,
    }

    
    
    // let holder =[]
    // Checking if record does not exist in storage (== null)
    // if null, we push tod object to empty array
    if (localStorage.getItem('dataItem')==null){
        holder = []
    }
    else{
        // If record exist in storage
        // get storage data, check for duplicate
        // If none found, push newly  added obj to the localStorage record
        holder = JSON.parse(localStorage.getItem('dataItem'))
        
        // Checking if duplicate status is true
        
        
          holder.push(tod)
    
        
    }
    // Setting the record to local storage
    localStorage.setItem('dataItem', JSON.stringify(holder));
     
}
fetchData()

//SUM UP FUNCTION
function fetchData(){
    amount = document.getElementById("price");
    table.innerHTML='';
    var totalPrice = Number(); 
    let dataItems = JSON.parse(localStorage.getItem("dataItem"));
    
    for(let i = 0; i < dataItems.length;i++){
        totalPrice +=  Number(dataItems[i].amount) 
        table.innerHTML+= `
        <tr>
            <td>${i+1}</td>
            <td >${dataItems[i].item}</td>
            <td id="">${"$" + dataItems[i].amount}</td>
            <td>
               <a btn ><i class="fa-solid fa-square-minus" onclick="decrement(${i})"></i></a>
               <span  id="root">${dataItems[i].quantity}</span> 
               <a btn><i class="fa-solid fa-plus" onclick="increment(${i})"></i></a>
            </td>
            <td> 
                 <i class="fa-solid fa-trash shadow" onclick="deletetodo(${i})"></i>
                 <i class="fa-solid fa-pen shadow " onclick="editTodo(${dataItems[i].id})" data-toggle="modal" data-target="#exampleModal" ></i>
            </td>
        </tr>
        ` 
    }
    document.getElementById("cal").value = totalPrice;
}

//PRICE FUNCTION
function getItemPrice(e){
  var priceOutput ="";
  var getPrice = e.target.value;
    for(let i = 0 ; i < select.length ; i++){
        if (select[i].name == getPrice){
           priceOutput = select[i].price
        }
    }
    getInputValue.value = priceOutput;
    fetchData()
    console.log(getPrice);
}



//MODAL PRICE FUNCTION
function getItemPrice1(e){
    var priceOutput1 ="";
    var getPrice1 = e.target.value;
   
    for(let i = 0 ; i < select.length ; i++){
        if (select[i].name == getPrice1){
        priceOutput1 = select[i].price
        }
    }
    priceInput1.value = priceOutput1;
    fetchData()
    console.log(getPrice1);


    var modalStore = {
        getPrice1,
        priceOutput1 
    }

    if (localStorage.getItem('dataItem')==null){
        holder =[]
    }
    else{
        holder = JSON.parse(localStorage.getItem('dataItem'))
    }
    
    holder.push(modalStore )
    localStorage.setItem('dataItem', JSON.stringify(holder));

}
  
//DELETE FUNCTION
function deletetodo(ind){
    swal({
        title: "Are you sure?",
        text: "Item will be deleted from cart!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete){
    let dataItems = JSON.parse(localStorage.getItem("dataItem")) ;
    if(dataItems){
        dataItems.splice(ind,1)
        localStorage.setItem("dataItem",JSON.stringify(dataItems));
    }
    swal("Item Deleted!", {
        icon: "success",
    });

    fetchData()  
    } 
    else {
    fetchData()
    swal("Item still in cart!");
        }
    });
}
 
// UPDATE FUNCTION
function update(){
    let dataItems = JSON.parse(localStorage.getItem("dataItem"))
    
    if(selectDropDown2.value == "" || priceInput1.value == ""){
        swal({
            title: "please select an item",
        });
    }
    else{

        for (let i = 0; i < dataItems.length; i++){
            if(dataItems[i].id == editIndex){

                dataItems[i].item = selectDropDown2.value
                dataItems[i].amount = priceInput1.value
                
            }  
        } 

        // selectDropDown2.value = ""
    } 

    // document.getElementById("list").classList.remove("display")
    // document.getElementById("update").classList.add("display")
    localStorage.setItem("dataItem",JSON.stringify(dataItems)); 
    fetchData()
    // console.log(selectDropDown2);
}


// EDIT FUNCTION // MODAL POP-UP && ITEM SELECTION
function editTodo(edit){
    var  localVar ="";
    editIndex = edit;

    let dataItems = JSON.parse(localStorage.getItem("dataItem"));

    for (let i = 0 ; i < dataItems.length ; i++){
        if(editIndex == dataItems[i].id){
            localVar = dataItems[i]
            // priceOutput = select[i].price
        }
    }
    selectDropDown2.value = localVar.item
    priceInput1.value = localVar.amount  
    fetchData()
};

// Increment && Decrement Function
function decrement(id){
    for(let i = arr.length - 1; i >= 0; i--){
        if (i == id){
            arr[i].quantity --
            quantity = arr[i].quantity
        } 
        if(arr[i].quantity < 1){
            return alert("nope")
        }
    } 
}

function increment(id){
    for(i = 0; i < arr.length; i++){
        if (i == id){
            arr[i].quantity++
            quantity = arr[i].quantity
        }
    } 
    fetchData();


    var quty = {
        id: Math.floor(Math.random() * 1000000),
        quantity 
    }

    if (localStorage.getItem('dataItem')==null){
        holder =[]
    }
    else{
        holder = JSON.parse(localStorage.getItem('dataItem'))
    }
    holder.push(quty)
    localStorage.setItem('dataItem', JSON.stringify(holder));
}

let auth = JSON.parse(localStorage.getItem("authUser"))
if(auth){
    intro.innerHTML = `Welcome` +" "+ auth.uname
}else{
    window.location.href = "MyAppLogin.html";
}