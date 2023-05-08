
// let url = "https://63f4a4662213ed989c473978.mockapi.io/Ecotourism"
// let url = "https://63f4a4662213ed989c473978.mockapi.io/Ecotourism"
// let url = https://6398f4a7fe03352a94e2b91e.mockapi.io/hotels
let url = "https://6398f4a7fe03352a94e2b91e.mockapi.io/hotels"
// let url = "https://6398f4a7fe03352a94e2b91e.mockapi.io/hotels"
// let url = "https://6398f4a7fe03352a94e2b91e.mockapi.io/hotels"

// ********************Fetch data ************************
let globalvar = null
let pagination_wrapper = document.getElementById("pagination_wrapper")
let formDiv = document.getElementById("formDiv")
function hideform(){
    formDiv.style.display = "none"
}
hideform()
function showform(elem){
    formDiv.style.display = "block"
    document.getElementById("name").value = elem.hotelName
    document.getElementById("location").value = elem.location
    document.getElementById("price").value = elem.price
    let day = document.getElementById("numberOfDays").value
    let gstprice = Math.floor(((elem.price*day)*18)/100)
    document.getElementById("gstPrice").value = gstprice
}
fetchFun()
async function fetchFun(){
  try {
    let res = await fetch(`${url}?_limit=10&page=1`)
    res = await res.json()
    console.log(res)
    display(res)
  } catch (error) {
    console.log(error)
  }
}


// ************ Form *******************
let fetchedData = []
let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    console.log("hooooo")
e.preventDefault()
postFun()
})



async function postFun(){
let name = document.getElementById("name").value
let place = document.getElementById("location").value
let description = document.getElementById("description").value
let price = document.getElementById("price").value
let image = document.getElementById("image").value
    try {
        let obj = {
            name:name.value,
            location:place,
            description:description,
            price:price,
            image:image
        }
        let res = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        res = await res.json()
        console.log(res)
        fetchedData = res
        
        fetchFun()
        form.reset()
    } catch (error) {
        console.log(error)
    }
}
let maincont = document.getElementById("maincont")
let card_list = document.createElement("div")
maincont.append(card_list)


function display(data){
    card_list.innerHTML = ""
    data.map((elem)=>{
        let card = document.createElement("div")
        let card_img = document.createElement("div")
        let img = document.createElement("img")
        img.src = elem.image
        card_img.append(img)

        let card_body = document.createElement("div")

        let name = document.createElement("h2")
        name.textContent = elem.hotelName

        
        let des = document.createElement("p")
        des.textContent = elem.description

        let price = document.createElement("h3")
        price.textContent = ` RS. ${elem.price} / Night`

        let location = document.createElement("h3")
        location.textContent = elem.location

        let delBtn = document.createElement("button")
        delBtn.textContent = "DELETE"
        delBtn.setAttribute("id","del")

        let bookBtn = document.createElement("button")
        bookBtn.textContent = "Book Now"
        bookBtn.setAttribute("id","book")
        bookBtn.addEventListener("click",()=>{
            // showBookingForm(elem)
            globalvar = elem
            showform(elem)
        })

        delBtn.addEventListener("click",()=>{
            delFun(elem.id)
        })

        card_body.append(name,location,des,price,bookBtn)
        card.append(card_img,card_body)
        card_list.append(card)

    })
}

async function delFun(id){
try {
    let res = await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    res = await res.json()
    fetchFun()
} catch (error) {
    console.log(error)
}
}

function showBookingForm(elem){
    let bookingFormDiv = document.getElementById("bookingFomDiv")
    let Name = document.createElement("h4")
    Name.textContent = `Name:  ${elem.hotelName}`
    let location = document.createElement("h3")
    location = `Location : ${elem.location}`
    let price = document.createElement("h3")
    price = `Price : ${elem.price}`
    bookingFormDiv.append(Name,location,price)
}