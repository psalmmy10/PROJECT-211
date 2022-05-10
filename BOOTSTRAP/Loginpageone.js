let loginDetails = [
    {email:"Samueladesanya10@gmail.com" , password:"password_123."},
    {email:"adesanyajeffery170@gmail.com" , password:"adesanya123."},
    {email:"Adesanyasamuel01@gmail.com", password:"Adesanya123678"}
]

function getinfo(details) {
    var emails = document.getElementById('email1').value;
    var passwords = document.getElementById('password1').value;
    for (let i = 0; i < loginDetails.length ; i++){
       if(emails == "" || passwords == ""){
            swal("Sorry!" , "Can't have empty fields" , "error")
       }
       else{
            if(emails == loginDetails[i].email && passwords == loginDetails[i].password){
                console.log("success")
                swal("Welcome!", " Successful Login!", "success");
                setTimeout(() => {
                  window.location.assign("file:///C:/Users/DELL/Desktop/My%20Project/BOOTSTRAP/Loginpagetwo.html")    
                }, 2000);
                break;
            }
            else if (emails != loginDetails[i].email || passwords != loginDetails[i].password) {
                swal("Incorrect Input!", "Email or Password does not correspond", "error");
                console.log("Invalid Input!", "Email does not corresponds!", "error")  
            }
        } 
    }     
}  

const form = document.querySelector("#signup");
form.addEventListener("submit", e => {
        e.preventDefault()
    ;          
});

const button= document.getElementById('button');
button.addEventListener('click', () =>{
    getinfo()   
});
