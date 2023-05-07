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



fetch("https://mock-server-new-br13.onrender.com/users")
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

        td1.innerText = element.title;
        td2.innerText = element.location;
        td3.innerText = element.details;
       

        tr.append(td1, td2, td3)
        body.append(tr);
    })


}

