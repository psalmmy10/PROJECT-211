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
        if(userRecords.some((v)=>{return v.uname == uname})){
            return outputMessage.innerHTML ="Username already existed!!"
        }
        else if (userRecords.some((v)=>{return v.mail == mail})){
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
            var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,15}$/;
            var pw = passw.test(pword)


            // if(!pw){ 
            //      output1.innerHTML = "Too Weak"
            // }
            // else{
                if(!pw){ 
                    output1.innerHTML = "Too Weak"
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
                    }, 1000);
                }
                //  document.querySelector("output1").classList.remove("display")
                //  document.querySelector("output2").classList.add("display")  
            // }
        } 
    }     
}

function eyeShow(p = 'password'){
    var icon =document.querySelector('.icon')
    var icon1 =document.querySelector('.icon1')
    var value = document.querySelector('#pword')

    if(p == 'text'){
        value.setAttribute('type','text')
        icon.classList.add('d-none')
        icon1.classList.remove('d-none')
    }
    else{
       value.setAttribute('type','password')
       icon.classList.remove('d-none')
       icon1.classList.add('d-none')
    }
}



// const form = document.querySelector("#signup");
// form.addEventListener("submit", e => {
//       e.preventDefault()
//     ;          
// });