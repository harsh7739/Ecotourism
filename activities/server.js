
let addDataBtn = document.getElementById("addData")
let patchDataBtn = document.getElementById("patchData")


    let imageInput = document.getElementById("img")
    let locationInput = document.getElementById("loca")
    let titlInput = document.getElementById("titl")
    let descInput = document.getElementById("desc")
    let idInput = document.getElementById("id")

    let updateImage = document.getElementById("updImg")
    let updateLocation = document.getElementById("updLoc")
    let updateTitle = document.getElementById("updTitle")
    let updateDesc = document.getElementById("updDesc")

    let deleteId = document.getElementById("delId")
    let deleteBtn = document.getElementById("delData")


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
            return res.json()
        })
        .then(function(data){
            console.log(data)
            fetchedData()
        })
    })


    patchDataBtn.addEventListener("click", function(){

        let API = `https://mock-server-new-br13.onrender.com/users/${idInput.value}`
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
            fetchedData()
        })


    })

    deleteBtn.addEventListener("click", function(){

        let API = `https://mock-server-new-br13.onrender.com/users/${deleteId.value}`
        let response = fetch(API, {

            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })

        response.then(function(res){
            return res.json()
        })
        .then(function(data){
            fetchedData()
        })
    })
