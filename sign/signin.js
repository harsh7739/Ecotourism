let form = document.querySelector("form")
let Submit = document.getElementById("submit")
let email=document.getElementById("email")
let pass = document.getElementById("password")
let head = document.getElementById("heading")
let emEl = document.getElementById("emEl")
let passEl = document.getElementById("passEl")
let indata = JSON.parse(localStorage.getItem("account-data"))

console.log(email.value)

form.addEventListener("submit",(event)=>{
  event.preventDefault()
  if(email.value==="admin@gmail.com" && pass.value==="admin"){
    window.location.href = "../admin/add.html"
  }else{
    signFun()
  }
})

function signFun(){
  passEl.innerText=""
  head.innerText="Please Enter Your Details"
  emEl.innerText=""
 indata.filter((el)=>{
  console.log(el)
  if(email.value===el.email && pass.value===el.pass){
    head.innerText = "Sign in Successful"
    console.log("Inside filter")
    localStorage.setItem("login",true)

    window.location.href = "../index.html"
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



































// Submit.addEventListener("submit",(event)=>{
//   event.preventDefault()
// console.log("simple")


//   if(email.value=="admin@gmail.com"  && pass.value=="admin"){

//     console.log("hiii")
//     // window.location.href = "add.html"
//     // return
//     }else{
//       signFun()
//     }
// })
// console.log(indata)


  
// function signFun(){
  

//  passEl.innerText=""
//   head.innerText="Please Enter Your Details"
//   emEl.innerText=""
//  indata.filter((el)=>{
//   console.log(el)
//   if(email.value===el.email && pass.value===el.pass){
//     head.innerText = "Sign in Successful"
//     console.log("Inside filter")
//     localStorage.setItem("login",true)

//     window.location.href = "../index.html"
//   }
//   else if(email.value!==el.email && pass.value!==el.pass){
//     head.innerText = "Wrong email and password"
//   }
//   else if(email.value!==el.email){
//       emEl.innerText = "Please Enter correct email"
//   }
//   else if(pass.value!==el.pass){
//     passEl.innerText = "Please Enter correct password"
//   }
//   })

// }





