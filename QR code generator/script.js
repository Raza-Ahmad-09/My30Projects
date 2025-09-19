const generateBtn = document.getElementById("generate");
const inputField = document.getElementById("text");
const QRImage = document.querySelector("#QR-img");

generateBtn.addEventListener("click", ()=>{
    if(inputField.value === ""){
        alert("Enter some value in input field");
        QRImage.style.display = "none";
    }
    QRImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputField.value;
    QRImage.classList.add("code-div")
});
