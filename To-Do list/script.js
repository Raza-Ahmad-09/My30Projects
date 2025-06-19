const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector("button");

function taskAdd(){
    if (inputBox.value === ""){
        alert("Plese enter something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

addBtn.addEventListener('click', function() {
    taskAdd();
});
addBtn.addEventListener('keydown', function(){
    taskAdd();
});

//Click funtion
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showlist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();