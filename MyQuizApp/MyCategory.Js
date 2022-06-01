// $(document).ready(function () {
//     $("#sidebar").mCustomScrollbar({
//          theme: "minimal"
//     });
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });
// });

// $(document).ready(function () {

//     $("#sidebar").mCustomScrollbar({
//          theme: "minimal"
//     });

//     $('#sidebarCollapse').on('click', function () {
//         // open or close navbar
//         $('#sidebar').toggleClass('active');
//         // close dropdowns
//         $('.collapse.in').toggleClass('in');
//         // and also adjust aria-expanded attributes we use for the open/closed arrows
//         // in our CSS
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });

// });

// $(document).ready(function () {
//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//     });

//     $('#dismiss, .overlay').on('click', function () {
//         // hide sidebar
//         $('#sidebar').removeClass('active');
//         // hide overlay
//         $('.overlay').removeClass('active');
//     });

//     $('#sidebarCollapse').on('click', function () {
//         // open sidebar
//         $('#sidebar').addClass('active');
//         // fade in the overlay
//         $('.overlay').addClass('active');
//         $('.collapse.in').toggleClass('in');
//         $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     });
// });



$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
}); 


var input0 = document.querySelector("#inputGroupSelect0")
// var input1 = document.querySelector("#inputGroupSelect01")
var statusReport = document.querySelector("#inputGroupSelect02")
var tbody = document.querySelector("#tbody")


// MODAL VALUE
var input00 = document.querySelector("#inputGroupSelect00")
// var input11 = document.querySelector("#inputGroupSelect11")
var status22 = document.querySelector("#inputGroupSelect22")
// MODAL VALUE



 
function fetchCategory(){
    let activeCount = 0;
    let inActiveCount = 0;

    let categoryData = JSON.parse(localStorage.getItem("cat"))
    if(categoryData != null){
        tbody.innerHTML='';
        var i = 1;
        categoryData.forEach((element, a) =>{
            if (element.status == "live") activeCount++ 
            if (element.status == "notLive") inActiveCount++ 
            // count = Number(a+1)
            tbody.innerHTML+=`
            <tr>
                <td class="table-primary text-dark">${i++}</td>
                <td class="table-secondary text-dark">${element.category}</td>
                <td class="table-warning text-dark">${element.status}</td>
                <td class="dropdown">
                    <i class="fas fa-th ml-3 mb-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false""></i>
                    <span class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#myModal2" onclick="editTodo(${element.id})">edit <i class="fa-solid fa-pen shadow"></i></a>
                        <a class="dropdown-item" href="#" onclick="deletetodo(${a})">delete <i class="fa-solid fa-trash shadow ml-2"></i></a>
                    </span>
                </td>
            </tr>
            `;   
         });
    }
    document.querySelector(".count").innerHTML = categoryData.length
    document.querySelector("#yes").innerHTML = activeCount
    document.querySelector("#no").innerHTML = inActiveCount
}
fetchCategory()


// PUSH FUNCTION
function pushCategory(){
    duplicateStatus = false
    if (input0.value== "" || statusReport.value==""){
        return alert ("Please select an item")
    }
    else{
        let categoryTable = {
            id: Math.floor(Math.random () * 1000000),
            category: input0.value,
            // enabledStatus: input1.value,
            status: statusReport.value,
            user: "Admin"
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
    // input11.value = localVar.enabledStatus
    status22.value = localVar.status
    // fetchCategory()
};

// UPDATE FUNCTION
function update(){
    let categoryData = JSON.parse(localStorage.getItem("cat"))
    if(input00.value == "" || status22.value ==""){
        swal({
            title: "please select an item",
        });
    }
    else{
        for (let i = 0; i < categoryData.length; i++){
            if(categoryData[i].id == editIndex){

                categoryData[i].category  = input00.value 
                // categoryData[i].enabledStatus = input11.value
                categoryData[i].status = status22.value  
                
            }  
        } 
        input00.value = ""
        // input11.value = ""
        status22.value = ""
    } 
    localStorage.setItem("cat",JSON.stringify(categoryData)); 
    fetchCategory()
}



