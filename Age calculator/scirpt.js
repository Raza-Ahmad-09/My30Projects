let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];

let calculateBtn = document.getElementById("btn").addEventListener("click" , calculateAge);
let result = document.getElementById("result");

function calculateAge(){
    let birthdate =  new Date(userinput.value);
    let d1 = birthdate.getDay();
    let m1 =  birthdate.getMonth();
    let y1 = birthdate.getFullYear();

    let currentDate = new Date();
    let d2 = currentDate.getDay();
    let m2 = currentDate.getMonth();
    let y2 = currentDate.getFullYear();

    let d3,m3,y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    } else{
        m3--;
        d3 = getDaysInMonths(y1 , m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    console.log(y3,m3,d3);

    result.textContent = `Your age is ${y3} years, ${m3} months and ${d3} days`;
}

function getDaysInMonths(year, month){
    return new Date(year , month , 0).getDate();
}

