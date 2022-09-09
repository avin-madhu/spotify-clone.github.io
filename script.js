function fn()
{
    let songs=[
    {songName:"Until i found you", filePath:"1.mp3",coverPath:"cover1.png"}
    ]
    let songIndex =0;
    let audioElement = new Audio("./1.mp3");
    let masterplay = document.getElementById("masterplay");
    
    let bar=document.getElementById("bar");
    let progress=0;
    bar.addEventListener('timeupdate', ()=>{console.log('timeupdate');})


    masterplay.addEventListener('click',()=>{
        if(audioElement.paused||audioElement.currentTime<=0)
        {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        else
        {
            audioElement.pause();
            masterplay.classList.add('fa-play');
            masterplay.classList.remove('fa-pause');
        }
        
    })

    audioElement.addEventListener('timeupdate',()=>{
        progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
        bar.value=progress;
    })
   bar.addEventListener('change',()=>{

   })
}
window.onload = fn
//<i class="fa-solid fa-pause"></i>
