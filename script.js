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


    const makeallplay = (e)=>{
        Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
        })
    }
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
                 element.addEventListener('click',(e)=>{
                       makeallplay();
                       index = parseInt(e.target.id);
                        console.log(`${index}`);
                        e.target.classList.remove('fa-circle-play');
                        e.target.classList.add('fa-circle-pause');
                        audioElement.src=`./${index}.mp3`;
                        audioElement.currentTime=0;
                        audioElement.play();
                 })
    })
}
window.onload = fn
//<i class="fa-solid fa-pause"></i>
//<i class="fa-regular fa-circle-pause"></i>