
let songs=[
    {songName:"Until i found you", filePath:"1.mp3",coverPath:"cover1.png"}
]
let songIndex =0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById("masterplay");
let bar=document.getElementById("bar");

bar.addEventListener('timeupdate', ()=>{console.log('timeupdate');})
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})