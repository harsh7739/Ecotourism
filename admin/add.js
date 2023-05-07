let addDataBtn = document.getElementById("addData")

let idInput = document.getElementById("id")
let imageInput = document.getElementById("img")
let locationInput = document.getElementById("loca")
let titlInput = document.getElementById("titl")
let descInput = document.getElementById("desc")

addDataBtn.addEventListener("click", function(){

    let API = "https://mock-server-new-br13.onrender.com/users"
    let response = fetch(API, {

        method: 'POST',
        body: JSON.stringify({
            
            "image": imageInput.value,
            "location": locationInput.value,
            "title": titlInput.value,
            "details": descInput.value
        }),

        headers: {
            'Content-type': 'application/json'
        }
    })

    response.then(function(res){
        return res.json();
    
    })
    .then(function(data){
        console.log(data)
        alert("Data added succesfully")
    })
})
