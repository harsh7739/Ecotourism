let signinData = JSON.parse(localStorage.getItem("login"))
  if(!signinData){
    alert("you are not login now")
 window.location.href = "../index.html"
  }
  

let data = JSON.parse(localStorage.getItem("placeDetails")) 
let place_parent = document.getElementById("destination");

// console.log(data);

function show_places(data) {
      let {name,img1,img2,img3,price ,Rating,duration ,description ,info,location,map } =data
      
  
      let div = document.createElement("div")
      div.innerHTML = `
      <div class="ds_info">
        <div class="image">
          <img
            src=${img1}
            alt=""
          />
        </div>
        <div class="plinfo">
          <h4><i class="fa-solid fa-money-bill-1-wave"></i> <span> Price : Rs ${price}</span></h4>
          <h4><i class="fa-solid fa-location-dot"></i>  <span>Location : ${location} </span> </h4>
          <h4> <i class="fa-solid fa-plane-departure"></i> <span>  Duration : ${duration}</span></h4>
          <h4> <i class="fa-solid fa-star"></i> <span>Rating : ${Rating} </span>  </h4>
          <img
            src=${map}
            alt=""
          />
          <a href="payment.html" class="book_btn"><i class="fa-sharp fa-solid fa-ticket fa-beat-fade"></i> Book Trip</a>
        </div>
      </div>
      <h2 class="package">Package information</h2>
      <div class="ds_summary">
        <div class="sum_detal">
          <p>${info}</p>
        </div>
        <div class="sum_img">
          <img
            src=${img2}
            alt=""
          />
        </div>
      </div>
      <h2 class="package">Trip information</h2>
      <div class="ds_summary">
        <div class="sum_img">
            <img
              src=${img3}
              alt=""
            />
          </div>
        <div class="sum_detal">
          <p>${description}</p>
        </div>
     
      </div>`
  
      place_parent.append(div)


  
  
  
  }

show_places(data);




let navMenu = document.getElementById("navMenu");
let close_btn = document.getElementById("close_btn");

close_btn.addEventListener("click" , ()=>{
  if (navMenu.style.right == '0px') {
    navMenu.style.right = '-100%'
    navMenu.style.display = 'none'
  }
  else{
    navMenu.style.right = '0px'
    navMenu.style.display = 'flex'
  }
})
