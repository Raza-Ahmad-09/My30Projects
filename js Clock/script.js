const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

setInterval(() =>{  
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    if(hr < 10){
        hr = "0" + hr;
    }
    if(hr > 12){
        hr =  "0" + (hr - 12);
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    hours.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
    if(hr < 12 && hr > 0){
        ampm.innerText = "AM"
    }else{
        ampm.innerText = "PM"
    }
})