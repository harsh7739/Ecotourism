
    let mainSec = document.getElementById("mainSection")
    let addDataBtn = document.getElementById("addData")
    let patchDataBtn = document.getElementById("patchData")


    let imageInput = document.getElementById("img")
    let locationInput = document.getElementById("loca")
    let titlInput = document.getElementById("titl")
    let descInput = document.getElementById("desc")
    let idInput = document.getElementById("id")

    function fetchedData(){

    let API = "https://mock-server-2-uziz.onrender.com/users"
    let response = fetch(API)

        response.then(function(res){
       return res.json()
    })
    .then(function(data){
        console.log(data)
        display(data)
    })

    }

    fetchedData()

    function display(data){
        mainSec.innerHTML=""
        data.forEach(function(elem){

            let card = document.createElement("div")
            card.id = "card"

            let image = document.createElement("img")
            image.src = elem.image

            let title = document.createElement("h1")
            title.innerText = elem.title

            let location = document.createElement("h3")
            location.innerText = elem.location

            let details = document.createElement("p")
            details.innerText = elem.details

            let button = document.createElement("button")
            button.innerText = "Book Now"

            card.append(image, location, title, details, button)
            mainSec.append(card)
        })
    }

    addDataBtn.addEventListener("click", function(){

        let API = "https://mock-server-2-uziz.onrender.com/users"
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

    // patchDataBtn.addEventListener("click", function(){


    // })

