const logoutBtn = document.getElementById("logout-btn");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const userDetails = JSON.parse(localStorage.getItem("user"));

nameInput.innerText += " "+userDetails.name;
email.innerText += " "+userDetails.email;
password.innerText += " "+userDetails.password;

logoutBtn.addEventListener("click",()=>{
    document.body.remove();
    window.location.href = "index.html";
    localStorage.clear();
});