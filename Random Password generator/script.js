const passwordBox = document.querySelector("#Password");
const generateBtn = document.querySelector("button");
const copyBtn = document.querySelector("#copy");
const eyeIcon = document.querySelector("#eyeicon");

eyeIcon.onclick = function(){
    if(passwordBox.type == "password"){
        passwordBox.type = "text";
        eyeIcon.src = "images/eye-open.png";
    }else{
        passwordBox.type = "password";
        eyeIcon.src = "images/eye-close.png";
    }
};

//required variables
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%&*()><|?~";

const allChars = upperCase +  lowerCase + number + symbol;

const length = 15;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password +=  allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

generateBtn.addEventListener("click", generatePassword);


function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied to clip board");
    passwordBox.value = "";
}

copyBtn.addEventListener("click" , copyPassword);
