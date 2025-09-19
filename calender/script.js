
const day = document.getElementById("day");
const month = document.getElementById("month");
const date = document.getElementById("date");
const year = document.getElementById("year");
const hadithText = document.getElementById("hadith");

let time = new Date();
let dayName = time.toLocaleDateString("PAK", {weekday: "long"});
day.innerHTML = dayName;
let monthName = time.toLocaleDateString("PAK", {month:"long"});
month.innerHTML = monthName;
let dayDate = time.getDate();
date.innerHTML = dayDate;
let yr = time.getFullYear();
year.innerHTML = yr;




async function getHadith() {
    const api_url =  "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-abudawud/sections/7.json";
    const response = await fetch(api_url);
    const data = await response.json();
    
    const hadiths = data.hadiths;
  const random = hadiths[Math.floor(Math.random() * hadiths.length)];
  hadithText.innerHTML = random.text;
}
getHadith();