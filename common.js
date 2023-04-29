//nav bar
const signup = document.querySelector(".signup");
const profile = document.querySelector(".profile");

const userData = JSON.parse(localStorage.getItem("user"));

//tabs implementation 
signup.addEventListener("click",()=>{
    if(userData!==null && "accessToken" in userData && userDetails!==null){
        document.body.remove();
        window.location.href = "profile.html";
    }
    else{
        window.location.href = "index.html";
    }
})

profile.addEventListener("click",()=>{
    if(userData!==null && "accessToken" in userData){
        window.location.href = "profile.html";
    }
    else{
        document.body.remove();
        window.location.href = "index.html";
    }
})