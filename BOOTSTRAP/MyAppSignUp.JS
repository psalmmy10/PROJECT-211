function signup(e){
    e.preventDefault()
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        username: username,
        email:email,
        password:password,
    }

    var JSON = JSON.stringify(user);
    localStorage.setItem(username,json)
    console.log("user added");  
}

function login(e) {
    e.preventDefault()

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result").value
}