let deleteId = document.getElementById("delId")
let deleteBtn = document.getElementById("delData")

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
        // fetchedData()
        alert("Delete successfull")
    })
})