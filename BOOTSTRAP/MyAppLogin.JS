var uname = document.getElementById('username');
var pword = document.getElementById('Password');

function check(){
    if (uname.value == "" || pword.value =="") {
         swal({
                title: "Can't take empty field",
            });
    }
    else{
        var data = {
            id: Math.floor(Math.random() * 1000000),
            uname: username.value,
            pword: Password.value
        };
        let  loginStatus = false;
        let users = JSON.parse(localStorage.getItem("users"));
    
        users.some(el =>{
           if( el.uname == data.uname &&  el.pword == data.pword){
               localStorage.setItem('authUser', JSON.stringify(el))
                loginStatus = true;
           }
        })
        if(loginStatus){
            result.innerHTML = `Logged in <i class="fa-solid fa-circle-check"></i>`
            swal("Welcome!", "Logged successfully!", "success");
            setTimeout(() => {
            window.location.assign("file:///C:/Users/DELL/Desktop/My%20Project/BOOTSTRAP/todolist.html") 
            }, 500);
        }
        else{
            swal({
                title: "Account Doesn't exit, incorrect details",
            });
            result.innerHTML = `No Username or Password Match<i class="fa-solid fa-circle-exclamation"></i>`
        }
    }
   
}

// const form = document.querySelector("#login");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });

// const form = document.querySelector("#login");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });