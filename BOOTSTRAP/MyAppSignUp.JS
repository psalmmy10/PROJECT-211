function store(){
    var uname = document.getElementById("uname").value;
    var mail = document.getElementById("mail").value;
    var pword = document.getElementById("pword").value;

    let userRecords = Array();
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if (userRecords.some((v)=>{return v.mail == mail})) {
       return output.innerHTML ="Email already existed!!"
    }
    else{
        userRecords.push({
            "uname": uname,
            "mail": mail,
            "pword": pword
        })
        localStorage.setItem("users", JSON.stringify(userRecords));
    } 
}

const form = document.querySelector("#signup");
form.addEventListener("submit", e => {
      e.preventDefault()
    ;          
});
