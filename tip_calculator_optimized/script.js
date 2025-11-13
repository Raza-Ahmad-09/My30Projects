// elements access 
const initialBill = document.getElementById("bill");
const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twenty-five");
const fiftyPercent = document.getElementById("fifty");
const customPercent = document.getElementById("custom");
const numberOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("paisa");
const totalAmount = document.getElementById("t-paisa");
const resetBtn = document.getElementById("reset");

// function fivePercentCal() {
//     let peopleValue = parseInt(numberOfPeople.value);
//     let billValue = parseFloat(initialBill.value);
//     let tipValue = billValue * 0.05;
//     let personTip = tipValue / peopleValue;
//     tipAmount.textContent = personTip.toFixed(2);
//     totalAmount.textContent = tipValue.toFixed(2);
// }
// fivePercent.addEventListener("click", fivePercentCal);

function calculatePercent(percent){
    let peopleValue = parseInt(numberOfPeople.value);
    let billValue = parseFloat(initialBill.value);
    let tipValue = billValue *  percent / peopleValue;
    let personTip = (billValue + tipValue) / peopleValue;
    tipAmount.textContent = tipValue.toFixed(2);
    totalAmount.textContent = personTip.toFixed(2);
}

fivePercent.addEventListener("click", function(){
    calculatePercent(0.05);
});

tenPercent.addEventListener("click", function(){
    calculatePercent(0.10);
});

fifteenPercent.addEventListener("click" , function(){
    calculatePercent(0.15);
});

twentyFivePercent.addEventListener("click", function(){
    calculatePercent(0.25);
});

fiftyPercent.addEventListener("click" , function(){
    calculatePercent(0.50);
});
//coustom input 

function customCalc(){
    let percentCoustom = parseFloat(customPercent.value);
    calculatePercent(percentCoustom / 100);
    let tipValue = calculatePercent * billValue / peopleValue;
    let personTip = (tipValue + billValue) / peopleValue;
    tipAmount.textContent = tipValue.toFixed(2);
    totalAmount.textContent = personTip.toFixed(2);
}
customPercent.addEventListener("input" , customCalc);

//reset button

function resetFunc(){
    initialBill.value = "";
    customPercent.value = "";
    numberOfPeople.value = "";
    tipAmount.textContent = "00.00";
    totalAmount.textContent = "00.00";
}
resetBtn.addEventListener("click" , resetFunc);