const pass = document.getElementById("password");
const msg = document.getElementById("msg");
const strength = document.getElementById("strength");


pass.addEventListener("input", ()=>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none"
    }
    if(pass.value.length < 6){
        strength.innerHTML = "Weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }else if(pass.value.length >= 8){
        strength.innerHTML = "Medium";
        pass.style.borderColor = "gold";
        msg.style.color = "gold";
    }
    else if(pass.value.length >= 10){
        strength.innerHTML = "Strong"
        pass.style.borderColor = "seagreen";
        msg.style.color = "seagreen";
    } else if(pass.value.length >= 13){
        strength.innerHTML = "Stronger"
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }
    if(pass.value == ""){
        pass.style.borderColor = "black"
    }
});

