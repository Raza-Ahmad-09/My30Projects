const song = document.getElementById("song");
const progress =  document.getElementById("progess");
const ctrlIcon = document.getElementById("ctrlIcon");
const play = document.getElementById("play").addEventListener("click", playPause);

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }


    
}

// if(song.play()){
//     setInterval(() => {
//         progress.value  = song.currentTime;
//     }, 700);
// } 

song.addEventListener("play" , () => {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 50)
})

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}