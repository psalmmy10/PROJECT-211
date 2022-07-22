const phoneImages = ["../Image/phone 4.jpg","../Image/phone 2.jpg", "../Image/phone 3.jpg", "../Image/phone default.jpg"]
let phoneCont = document.getElementById("phoneShow") 
let black     = document.getElementById("black")
let blue      = document.getElementById("blue")
let pink      = document.getElementById("pink")
let starlight = document.getElementById("starlight")
let defaultImgItems =`<img src= "${phoneImages.at(0)}">`
let blueImgItems    =`<img src= "${phoneImages.at(1)}">`
let pinkImgItems    =`<img src= "${phoneImages.at(2)}">`
let starImgItems    =`<img src= "${phoneImages.at(3)}">`




phoneCont.innerHTMLgit = defaultImgItems
black.addEventListener("click", function(){
    phoneCont.innerHTML=defaultImgItems
})

blue.addEventListener("click", function(){
    phoneCont.innerHTML = blueImgItems
})
    
pink.addEventListener("click", function(){
    phoneCont.innerHTML = pinkImgItems
})
    
starlight.addEventListener("click", function(){
    phoneCont.innerHTML = starImgItems
})