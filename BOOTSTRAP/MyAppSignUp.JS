function store(){


    var uname = document.getElementById("uname").value;
    var mail = document.getElementById("mail").value;
    var pword = document.getElementById("pword").value;

    let userRecords = Array();
    userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   

    if ((uname == "" || mail == "") || (pword == "")){
        swal("Fields can't be empty")
    }
    else{
        if (userRecords.some((v)=>{return v.mail == mail})){
            return output.innerHTML ="Email already existed!!"
        }
        else{ 
            userRecords.push({
                "id": Math.floor(Math.random() * 1000000),
                "uname": uname,
                "mail": mail,
                "pword": pword
            })


            var regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = regex.test(mail);
            var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
            var pw = passw.test(pword)

            if(!pw){
                swal({
                    title: "contain at least 6 to 20 characters (num,uppercase,lowercase letter)",
                });
            }
            else if(!email){
                swal({
                    title: "email isn't valid",
                });
            }
            else{
                localStorage.setItem("users", JSON.stringify(userRecords));
                swal("Welcome!", "Account created successfully!", "success");
                setTimeout(() => {
                   window.location.assign("file:///C:/Users/DELL/Desktop/My%20Project/BOOTSTRAP/MyAppLogin.html") 
                }, 4000);
            }
        } 
    } 
}



// const form = document.querySelector("#signup");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });
