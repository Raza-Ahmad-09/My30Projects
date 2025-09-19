
let year = document.getElementById("years");
let month = document.getElementById("months");
let day = document.getElementById("days");



const yearInp = document.getElementById("year-input");
yearInp.addEventListener("input", calculateAge);

function calculateAge(){
    let d1 = parseInt( document.getElementById("day-input").value);
    let m1 = parseInt( document.getElementById("month-input").value);
    let y1 = parseInt(document.getElementById("year-input").value);

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonths(y1 , m1 + 1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    year.innerHTML = y3;
    month.innerHTML = m3;
    day.innerHTML = d3;
    console.log(y3,m3, d3);

}



function getDaysInMonths(year , month ){
    return new Date(year, month, 0).getDate();
}