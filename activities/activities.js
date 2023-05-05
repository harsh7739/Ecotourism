
    let mainSec = document.getElementById("mainSection")

    let pageButton = document.getElementById("pageNumber")

    let page = 1

    function fetchedData(page){

    let API = `https://mock-server-new-br13.onrender.com/users?_page=${page}&_limit=10`

    let response = fetch(API)

        response.then(function(res){

            let totalCount = res.headers.get("x-total-count")

            let totalRequiredBtn = Math.ceil(totalCount/10)

            pageButton.innerHTML = ""

            for(let i=1; i<=totalRequiredBtn; i++){

                let buttonPage = document.createElement("button")
                buttonPage.setAttribute("data-page-number", i)

                buttonPage.innerText = i

                pageButton.append(buttonPage)
            }

       return res.json()
    })
    .then(function(data){
        console.log(data)
        display(data)
    })

    }

    fetchedData(page)

    pageButton.addEventListener("click", function(e){

        let pageNumber = e.target.getAttribute("data-page-number")

        // console.log(pageNumber)

        fetchedData(pageNumber)
    })

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