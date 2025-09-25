const imgContainer = document.querySelector(".gallery");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");

nextBtn.addEventListener("click", () => {
    imgContainer.style.scrollBehaviour = "smooth";
    imgContainer.scrollLeft += 500;
})
backBtn.addEventListener("click", ()=>{
    imgContainer.style.scrollBehaviour = "smooth";
    imgContainer.scrollLeft -= 500;
})