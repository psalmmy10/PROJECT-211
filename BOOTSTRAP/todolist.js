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
    var status = false
    var item = document.getElementById('opt').value;
    var amount = document.getElementById('price').value;
  
    
    var tod = {
        item , 
        amount:amount , 
        quantity: 1
    }

    for(let i = 0; i<arr.length ; i++){
        if(item == arr[i].item){
           status = true
        }
    }
    if(item  == "" || amount == ""){
        alert('Add an Item')
    }
    else if(status){
        alert ("Item already selected")
    }
    else {
        arr.push(tod);
    }
    fetchData()

    if (localStorage.getItem('dataItem')==null){
        holder =[]
    }
    else{
        holder = JSON.parse(localStorage.getItem('dataItem'))
    }
    
    holder.push(tod)
    localStorage.setItem('dataItem', JSON.stringify(holder));

}

//SUM UP FUNCTION
function fetchData(){
    amount = document.getElementById("price")
    table.innerHTML='';
    var totalPrice = Number(); 
    for(let i=0; i<arr.length; i++){
        totalPrice +=  Number(arr[i].amount) 
        table.innerHTML+= `
        <tr>
            <td>${i+1}</td>
            <td >${arr[i].item}</td>
            <td id="">${"$" + arr[i].amount}</td>
            <td>
               <a btn ><i class="fa-solid fa-square-minus" onclick="decrement(${i})"></i></a>
               <span  id="root">${arr[i].quantity}</span> 
               <a btn><i class="fa-solid fa-plus" onclick="increment(${i})"></i></a>
            </td>
            <td> 
                 <i class="fa-solid fa-trash shadow" onclick="deletetodo(${i})"></i>
                 <i class="fa-solid fa-pen shadow " onclick="editTodo(${i})" data-toggle="modal" data-target="#exampleModal" ></i>
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
        if (willDelete) {
          swal("Item Deleted!", {
            icon: "success",
        });
        arr.splice(ind,1)
        console.log("text");
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
    for (let i =0; i<arr.length; i++){
        if(selectDropDown2.value == "" || priceInput1.value == ""){
            alert("please select an item")
            document.getElementById("price1").innerHTML = "please select an item"
        }
        else{
            if(i == editIndex){
                arr[i].item = selectDropDown2.value
                arr[i].amount = priceInput1.value
            }  
        } 

    }

    selectDropDown2.value = ""
    // document.getElementById("list").classList.remove("display")
    // document.getElementById("update").classList.add("display")
    fetchData()
    console.log(selectDropDown2);
}


// EDIT FUNCTION // MODAL POP-UP && ITEM SELECTION
function editTodo(edit){
    var  localVar ="";
    editIndex = edit
    for (let i = 0 ; i < arr.length ; i++){
        if(editIndex == i){
            localVar = arr[i]
            priceOutput = select[i].price
        }
    }
    selectDropDown2.value = localVar.item
    priceInput1.value = localVar.amount  
    console.log(localVar);
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



// data(){
//     return{
//       total: 0,
  
//       cartData: [{
//         price: 5,
//         qty: 5},
//         {price: 5,
//         qty: 5
//         }],
//     }
//   },
  
//   computed: {
//    calcSum(){
//     let total = 0;
//     this.cartData.forEach((item, i) => {
//          total += item.price * item.qty;
//     });
//     return total;
//    }
  
//   }




//   var cart_Data =[{"p_id":"44","cart_id":"10","cart_price":"100","product_title":"Slim striped pocket shirt","product_image":"product-4.jpg","product_color":"Blue","product_size":"L","qty":"3"},{"p_id":"45","cart_id":"11","cart_price":"42","product_title":"Contrasting Shrit","product_image":"product-7.jpg","product_color":"White","product_size":"M","qty":"1"}]
// function total(cart_Data){
//   let sum=0
//   cart_Data.map(x=>{
//    sum = sum + (x.cart_price * x.qty)
//  })
//   return sum
// }

// console.log(total(cart_Data))


// var data = {
//     uname: username.value,
// };


// var data = {
//     uname: username.value,
//     pword: Password.value
// }; 



// var names = document.getElementById('intro');

// let users = JSON.parse(localStorage.getItem("users"));

// if(localStorage.getItem('users', )) {
//     const users = localStorage.getItem('users');
//     intro.innerHTML = `Welcome, ${users, names}`;
// } 

let auth = JSON.parse(localStorage.getItem("authUser"))
if(auth){
    intro.innerHTML = `Welcome` +" "+ auth.uname
}else{
    window.location.href = "MyAppLogin.html";
}