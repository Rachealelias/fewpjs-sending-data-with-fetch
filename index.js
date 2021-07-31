// Add your code here
function submitData(userName,userEmail){
   return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "applicstion/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Racheal",
            email: "racheal@gmail.com"
        })
        })
    .then(function(resp){
        return resp.json();
    })
    .then(function(object){
        console.log(object);
    })
    .catch(function(error){
        alert("oops! Please try again later");
        console.log(error.message);
    })
}
