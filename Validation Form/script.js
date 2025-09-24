// Error spans
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const textError = document.getElementById("textarea-error");
const submitError = document.getElementById("submit-error");

// Input fields
const contactName = document.getElementById("contact-name");
const contactPhone = document.getElementById("number");
const contactEmail = document.getElementById("email");
const contactText = document.getElementById("textarea");
const submitBtn = document.getElementById("submitBtn");

// Name Validation
contactName.addEventListener("keyup", function () {
    const name = contactName.value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
    } else if (name.indexOf(" ") === -1) {
        nameError.innerHTML = "Full name required";
    } else {
        nameError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    }
});

// Phone Validation
contactPhone.addEventListener("keyup", function () {
    const phone = contactPhone.value;

    if (phone.length === 0) {
        phoneError.innerHTML = "Phone number is required";
    } else if (phone.length !== 11) {
        phoneError.innerHTML = "Phone number must be 11 digits";
    } else {
        phoneError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    }
});

// Email Validation
contactEmail.addEventListener("keyup", function () {
    const email = contactEmail.value;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
    } else if(!email.match(/^[A-za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    //      if (!email.includes('@gmail.com' || '@outlook.com' || '@yahoo.com')) {
    //     emailError.innerHTML = "Only Gmail addresses allowed";
    // }    
    else {
        emailError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    }
});

// Textarea Validation
contactText.addEventListener("keyup", function () {
    const text = contactText.value;
    let required = 50;
    let left = required - text.length;

    if (left > 0){
        textError.innerHTML = left + 'more characters required';
    }else{
        textError.innerHTML = '<i class="fas fa-check-circle" style="color:green;"></i>';
    }
});