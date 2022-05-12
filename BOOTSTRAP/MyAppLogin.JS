var uname = document.getElementById('username');
var pword = document.getElementById('Password');

function check(){
    if (uname.value == "" || pword.value =="") {
        alert("can't take empty")
    }
    else{
        var data = {
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
            }, 4000);
        }
        else{
            alert("no account")
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