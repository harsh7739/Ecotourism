let indata = JSON.parse(localStorage.getItem("account-data"))
      
let form1 = document.querySelector("form")
let email=document.getElementById("email")
let pass = document.getElementById("password")
let head = document.getElementById("heading")
let emEl = document.getElementById("emEl")
let passEl = document.getElementById("passEl")

form1.addEventListener("submit",signFun)

function signFun(){
  event.preventDefault()
  passEl.innerText=""
  head.innerText="Please Enter Your Details"
  emEl.innerText=""
 indata.filter((el)=>{
  if(email.value===el.email && pass.value===el.pass){
    head.innerText = "Sign in Successful"
    localStorage.setItem("login",true)
    window.location.href = "./index.html"
  }
  else if(email.value!==el.email && pass.value!==el.pass){
    head.innerText = "Wrong email and password"
  }
  else if(email.value!==el.email){
      emEl.innerText = "Please Enter correct email"
  }
  else if(pass.value!==el.pass){
    passEl.innerText = "Please Enter correct password"
  }
  
 })

 
}