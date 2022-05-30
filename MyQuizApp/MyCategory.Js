$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
}); 


var input0 = document.querySelector("#inputGroupSelect0")
var input1 = document.querySelector("#inputGroupSelect01")
var input2 = document.querySelector("#inputGroupSelect02")
var tbody = document.querySelector("#tbody")

// MODAL VALUE
var input00 = document.querySelector("#inputGroupSelect00")
var input11 = document.querySelector("#inputGroupSelect11")
var input22 = document.querySelector("#inputGroupSelect22")
// MODAL VALUE

 
function fetchCategory(){
    let categoryData = JSON.parse(localStorage.getItem("cat"))
    if(categoryData != null){
        tbody.innerHTML='';
        var i = 1;
        categoryData.forEach((element, a) =>{
            tbody.innerHTML+=`
            <tr>
                <td class="table-primary text-dark">${i++}</td>
                <td class="table-secondary text-dark">${element.category}</td>
                <td class="table-success text-dark">${element.enabledStatus}</td>
                <td class="table-warning text-dark">${element.status}</td>
                <td class="table-secondary text-success"> 
                    <i class="fa-solid fa-trash shadow ml-2" onclick="deletetodo(${a})"></i>
                    <i class="fa-solid fa-pen shadow " onclick="editTodo(${element.id})" data-toggle="modal" data-target="#myModal2" ></i>
                </td>
            </tr>
            `;   
         });
    }
}
fetchCategory()


// PUSH FUNCTION
function pushCategory(){
    duplicateStatus = false
    if (input0.value== "" || input1.value== "" || input2.value==""){
        return alert ("Please select a day")
    }
    else{
        let categoryTable = {
            id: Math.floor(Math.random () * 1000000),
            category: input0.value,
            enabledStatus: input1.value,
            status: input2.value
        }
    
        let holder = []
        if (localStorage.getItem("cat") == null) {
            holder.push(categoryTable)
        }
        else{
            holder = JSON.parse(localStorage.getItem('cat'))

            holder.forEach(Lists =>{
                if(categoryTable.category== Lists.category && categoryTable.enabledStatus == Lists.enabledStatus){
                    duplicateStatus=true
                }
            });
            if(duplicateStatus){
                alert('Duplicate entry detected')
            }
            else{
                holder.push(categoryTable)
            }
        }
        localStorage.setItem('cat', JSON.stringify(holder));
    }
    fetchCategory()
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
    let categoryData = JSON.parse(localStorage.getItem("cat")) ;
    if(categoryData){
        categoryData.splice(ind,1)
        localStorage.setItem("cat",JSON.stringify(categoryData));
    }
    swal("Item Deleted!", {
        icon: "success",
    });

    fetchCategory()  
    } 
    else {
    fetchCategory()
    swal("Item still in cart!");
        }
    });
}
 
// EDIT FUNCTION // MODAL POP-UP && ITEM SELECTION
function editTodo(edit){
    var  localVar ="";
    editIndex = edit;

    let categoryData = JSON.parse(localStorage.getItem("cat"));

    for (let i = 0 ; i < categoryData.length ; i++){
        if(editIndex == categoryData[i].id){
            localVar = categoryData[i]
        }
    }
    input00.value = localVar.category
    input11.value = localVar.enabledStatus
    input22.value = localVar.status
    // fetchCategory()
};

// UPDATE FUNCTION
function update(){

    let categoryData = JSON.parse(localStorage.getItem("cat"))
    if(input00.value == "" || input11.value == "" || input22.value ==""){
        swal({
            title: "please select an item",
        });
    }
    else{
        for (let i = 0; i < categoryData.length; i++){
            if(categoryData[i].id == editIndex){

                categoryData[i].category = input00.value
                categoryData[i].enabledStatus = input11.value
                categoryData[i].status = input22.value
                
            }  
        } 

        input00.value = ""
        input11.value = ""
        input22.value = ""
    } 
    localStorage.setItem("cat",JSON.stringify(categoryData)); 
    fetchCategory()
}

