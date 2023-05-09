let form = document.querySelector("form")
  let signupdiv = document.getElementById("signup")
  let username = document.getElementById("name")
 
  let email = document.getElementById("email")
  let pass = document.getElementById("password")

  let data = JSON.parse(localStorage.getItem("account-data")) || []
  form.addEventListener("submit",myFun)

  function myFun(event){
    event.preventDefault()
    
    // console.log("harsh")
    let obj = {
      name:username.value,
      email:email.value,
      pass:pass.value
    }
    
    data.push(obj)
    // signupdiv.append(data)
    localStorage.setItem("account-data",JSON.stringify(data))
    window.location.href = "./signin.html"
  }