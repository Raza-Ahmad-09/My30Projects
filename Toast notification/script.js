let toastBox = document.getElementById("toast-box");

//Msgs
let successMsg = "Successfully Submitted";
let errorMsg = "Please fix the error here";
let invalidMsg = "Your information is invalid";

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error')
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid')
    }
    
    setTimeout(() =>{
        toast.remove();
    }, 7000);
}
