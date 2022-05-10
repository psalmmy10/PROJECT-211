// function check(){
//     var storedName = localStorage.getItem('uname');
//     var storedName = localStorage.getItem('mail');
//     var storedPw = localStorage.getItem('pword');

//     // entered data from the login-form
//     var username = document.getElementById('username');
//     var password = document.getElementById('password');

//     // check if stored data from register-form is equal to data from login form
//     if(username.value !== storedName || password.value !== storedPw) {
//         alert('wrong details');
//         console.log("wrong");
//     }else {
//         alert('You are logged in.');
//         console.log("logged in");
//     }
// }

const form = document.querySelector("#login");
form.addEventListener("submit", e => {
      e.preventDefault()
    ;          
});

