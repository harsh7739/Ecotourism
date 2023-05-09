
let signinData = JSON.parse(localStorage.getItem("login"))
  if(!signinData){
    alert("you are not login now")
 window.location.href = "../index.html"
  }
    
    
    let mainSec = document.getElementById("mainSection")

    let pageButton = document.getElementById("pageNumber")

    let filtTag = document.getElementById("filterCountry")

    let filtAct = document.getElementById("filterActivity")

    // let indBtn  = document.getElementById("indBtn")

    let globalData = []


    let page = 1

    function fetchedData(page){

    let API = `https://mock-server-new-br13.onrender.com/users?_page=${page}&_limit=8`

    let response = fetch(API)

        response.then(function(res){

            let totalCount = res.headers.get("x-total-count")

            let totalRequiredBtn = Math.ceil(totalCount/8)

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
        globalData = data
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

    // **************************** FETCH REQ ON FULL DATA *********************************

    function filterData(filtByCont = "India"){

        let API = "https://mock-server-new-br13.onrender.com/users"

        let response = fetch(API)
    
        response.then(function(res){
            return res.json()
        })
        .then(function(fullData){
            if(filtByCont.length > 0){
                DataCont = fullData.filter((elem) =>
                     elem.location == filtByCont
                )

                console.log(filtByCont)
                console.log(DataCont)
                display(DataCont)
            }

            else{
                display(fullData)
            }
            
            
        })
    }
  
    
    filtTag.addEventListener("change", function(){

        if(filtTag.value == ""){
            fetchedData()
        }

        else{

           

             filterData(filtTag.value)

        }
    })

    // filtAct.addEventListener("change", function(){

    //     if(filtAct.value == ""){
    //         fetchedData()
    //     }

    //     else{

    //         let filtByAct = globalData.filter(function(elem){

    //             if(filtAct.value == elem.title){
    //                 return true
    //             }
    //           })

    //           display(filtByAct)
    //           console.log(filtByAct)

    //     }
    // })