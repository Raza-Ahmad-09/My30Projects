const themeBtn = document.getElementById("theme-btn");
const container = document.querySelector(".container");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeBtn.src = "portfolio_site_img/sun.png"
    }else{
        themeBtn.src = "portfolio_site_img/moon.png"
    }
})