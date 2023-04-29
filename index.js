//signup details
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const conPasswordInput = document.getElementById("con-password");
const signupBtn = document.getElementById("signup-btn");
const errorMsg = document.querySelector(".error-msg");

//create token
function generateAccessToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, byte => ('0' + byte.toString(16)).slice(-2)).join('');
}

//signup action
signupBtn.addEventListener("click",()=>{
    let name = nameInput.value;
    let email = emailInput.value;
    let pass = passwordInput.value;
    let conPass = conPasswordInput.value;
    errorMsg.style.display = "block";
    if(name && email && pass && conPass && pass===conPass){
        let userDetails = {
            name:name,
            email:email,
            password: pass,
            conPassword:conPass,
            accessToken: generateAccessToken()
        };

        localStorage.setItem("user",JSON.stringify(userDetails));
        errorMsg.innerText = "Successfully Signed Up!";
        errorMsg.style.color = "#7ECD71";

        document.body.remove();
        window.location.href = "profile.html";
    }
    else{
        errorMsg.innerText = "Error : All the fields are mandatory";
        errorMsg.style.color = "#FF4F4F";
    }
});