const navbar = document.querySelector('.navbar');

navbar.querySelector('.toggle').addEventListener('click', () => {

    navbar.classList.toggle('collapsed');

});



window.addEventListener('scroll', e => {

    let windowY = window.pageYOffset;

    let navbarHeight = document.querySelector('.navbar').offsetHeight;

    if (windowY > navbarHeight) navbar.classList.add('sticky'); else
        navbar.classList.remove('sticky');

});

//appending the body//

fetch("https://blog-database-gules.vercel.app/data")
    .then((res) => {
        return res.json();
    })
    .then((actData) => {
        console.log(actData);
         display(actData)
    })
    .catch((error) => {
        console.log(error)
    })


let body = document.getElementById("append");



function display(data) {

    data.forEach(function (element) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")

        td1.innerText = element.name;
        td2.innerText = element.location;
        td3.innerText = element.price;
        td4.innerText = element.duration;
        td5.innerText = element.Rating;

        tr.append(td1, td2, td3, td4, td5)
        body.append(tr);
    })


}

