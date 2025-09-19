const createBtn = document.getElementById("create-btn");
const NotesContainer = document.querySelector(".textarea-box");

createBtn.addEventListener("click" , ()=>{
    const textarea = document.createElement("p");
    const img = document.createElement("img");
    img.src = "images/delete.png";
    textarea.classList.add("input-box");
    textarea.setAttribute("contenteditable" , "true");
    NotesContainer.appendChild(textarea).appendChild(img);
    textarea.focus();
    updateStorage();
});

NotesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } 
});

NotesContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

function updateStorage(){
    localStorage.setItem("notes" , NotesContainer.innerHTML);
}


function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        NotesContainer.innerHTML = savedNotes;
    }
}

showNotes();