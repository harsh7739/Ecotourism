let data = JSON.parse(localStorage.getItem("placeDetails")) 

console.log(data);




let calender = document.getElementById('calender')

const date = new Date();

let day = String(date.getDate());
let month = String(date.getMonth() + 1);
let year = String(date.getFullYear());

if (day < 10) {
    day = '0' + day
}
if (month < 10) {
    month = '0' + month
}


// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;
calender.value = currentDate
calender.min = currentDate
console.log(currentDate); 
 


let submitbuton = document.querySelector("form")
submitbuton.addEventListener("submit", function(e){
    e.preventDefault()
    let obj = {
         cardname  : document.getElementById("cardname").value,
        cardnumb   : document.getElementById("cardnumb").value,
         email : document.getElementById("email").value,
         mobile  : document.getElementById("mobile").value,
    }
   
   
    
    console.log(obj);
})

let paymentParent = document.getElementById('payment_info')

paymentParent.innerHTML = `
<img src=${data.img1} alt="">
<div>
   <h4><i class="fa-solid fa-money-bill-1-wave"></i> <span> Price : Rs ${data.price}</span></h4>
   <h4><i class="fa-solid fa-location-dot"></i>  <span>Location : ${data.location} </span> </h4>
   <h4> <i class="fa-solid fa-plane-departure"></i> <span>  Duration : ${data.duration}</span></h4>
</div>`