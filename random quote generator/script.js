const api_Key = "https://api.quotable.io"

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}
getQuote(api_Key);