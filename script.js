function fn()
{
    let songs=[
    {songName:"Until i found you", filePath:"./1.mp3",coverPath:"cover1.png"}
    ]
    let songIndex =0;
    let audioElement = new Audio("./1.mp3");
    let masterplay = document.getElementById("masterplay");
    
    let bar=document.getElementById("ProgressBar");
    let progress=0;

    masterplay.addEventListener('click',()=>{
        if(audioElement.paused||audioElement.currentTime<=0)
        {
            audioElement.play();
        }
        else
        {
            audioElement.pause();
        }
        
    })

    audioElement.addEventListener('playing', ()=>{
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })

    audioElement.addEventListener('pause' , ()=>{
        masterplay.classList.add('fa-play');
        masterplay.classList.remove('fa-pause');
    })

    audioElement.addEventListener('timeupdate',()=>{
        bar.value = (audioElement.currentTime / audioElement.duration) * 1000;
    })

    bar.addEventListener('change',()=>{
        audioElement.pause();
        audioElement.currentTime = audioElement.duration * (bar.value / 1000);
        audioElement.play();
    })
}
window.onload = fn
//<i class="fa-solid fa-pause"></i>
