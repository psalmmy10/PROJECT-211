

var uname = document.getElementById('');
var pword = document.getElementById('Password');

function check(){
    var data = {
        uname: username.value,
        pword: Password.value
    };
    console.log(data);

    let users = JSON.parse(localStorage.getItem("users"));

    if(users.some(el => el.uname == data.uname)){
        console.log("yes")
        result.innerHTML = `Logged in <i class="fa-solid fa-circle-check"></i>`

    }
    else{
        console.log("No");
        result.innerHTML = `No Username Match <i class="fa-solid fa-circle-exclamation"></i>`
    }
}

// const form = document.querySelector("#login");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });