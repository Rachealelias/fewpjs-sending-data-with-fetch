// Add your code here
function submitData(userName,userEmail){
   return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
        })
    .then(function(resp){
        return resp.json();
    })
    .then(function(object){
        console.log(object);
        //console.log(object["id"]);
       //const getUser = document.getElementById(4)
        document.body.innerHTML = object["id"];
        })
    .catch(function(error){
        alert("oops! Please try again later");
        console.log(error.message);
        document.body.innerHTML = error
    })
}

const p = document.createElement('p');
document.body.appendChild(p)

