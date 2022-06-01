$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

function fetchCategory(){
    let categoryData = JSON.parse(localStorage.getItem("cat"))
    if(categoryData != null){
        var i = 1;
        categoryData.forEach((element, a) =>{
           
            
         });
         document.querySelector(".count").innerHTML = categoryData.length
    }
   
}
fetchCategory()

let auth = JSON.parse(localStorage.getItem("authUser"))
if(auth){
    intro.innerHTML = `Welcome` +" "+ auth.uname
}else{
    window.location.assign("file:///C:/Users/DELL/Desktop/My%20Project/MyQuizApp/MyQuizAppDash.html")
}

