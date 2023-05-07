let patchDataBtn = document.getElementById("patchData")


let updateImage = document.getElementById("updImg")
let updateLocation = document.getElementById("updLoc")
let updateTitle = document.getElementById("updTitle")
let updateDesc = document.getElementById("updDesc")

patchDataBtn.addEventListener("click", function(){

    let API = `https://mock-server-new-br13.onrender.com/users/${id.value}`
    let response = fetch(API, {

        method: 'PATCH',
        body: JSON.stringify({

            "image": updateImage.value,
            "location": updateLocation.value,
            "title": updateTitle.value,
            "details": updateDesc.value
        }),

        headers: {
            'Content-type': 'application/json'
        }
    })

    response.then(function(res){
        return res.json()
     
    })

    .then(function(data){
        console.log(data)
        // fetchedData()
        alert("Edit succesfully")
    })


})