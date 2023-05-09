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
        console.log(error);
    })


let body = document.getElementById("append");



function display(data) {

    data.forEach(function (element) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td")
        let image = document.createElement("img")
        image.setAttribute("src", element.image)
        td1.append(image)

        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")

        td2.innerText = element.title;
        td3.innerText = element.location;
        td4.innerText = element.details;

       

        tr.append(td1, td2, td3,td4)
        body.append(tr);
    })


}

