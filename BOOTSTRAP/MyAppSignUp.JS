function store(){
    var uname = document.getElementById("uname").value;
    var mail = document.getElementById("mail").value;
    var pword = document.getElementById("pword").value;

    let userRecords = Array();
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   

    if ((uname.value == "" || mail.value == "") || (pword.value == "")){
        alert("can't")
    }
    else{
        if (userRecords.some((v)=>{return v.mail == mail})){
            return output.innerHTML ="Email already existed!!"
        }
        else{
            userRecords.push({
                "uname": uname,
                "mail": mail,
                "pword": pword
            })
            localStorage.setItem("users", JSON.stringify(userRecords));
            console.log("yes");
        } 
    } 
    
    
}

// const form = document.querySelector("#signup");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });