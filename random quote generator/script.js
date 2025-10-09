const api_Key = "https://random-quotes-freeapi.vercel.app/api/random"
const quote = document.querySelector("blockquote");
const author = document.querySelector(".author");
const newBtn = document.querySelector("#new-quote")

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    quote.innerHTML = data["quote"]
    author.innerHTML = data["author"]
}
getQuote(api_Key);

newBtn.addEventListener("click", function(){
    getQuote(api_Key);
});