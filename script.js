function fn()
{
    let songs=[
    {songName:"Until i found you", filePath:"./1.mp3",coverPath:"cover1.png"},{songName:"Dandelions" }
    ,{songName:"Ghost Town"},{songName:"Little Things"},{songName:"SuperMarket Flowers"}
    ]
    let songIndex =0;
    let audioElement = new Audio("./1.mp3");
    let masterplay = document.getElementById("masterplay");
    let NowPlay=document.getElementById("Now-Play");
    let bar=document.getElementById("ProgressBar");
    let progress=0;
    let songInfo= document.getElementsByClassName("now-play")

    

    masterplay.addEventListener('click',()=>{
        if(audioElement.paused||audioElement.currentTime<=0)
        {
            audioElement.play();
        }
        else
        {
            audioElement.pause();
        }
        NowPlay.innerText = songs[songIndex].songName;
        
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
                       songIndex = parseInt(e.target.id);
                        console.log(`${songIndex}`);
                        e.target.classList.remove('fa-circle-play');
                        e.target.classList.add('fa-circle-pause');
                        audioElement.src=`./${songIndex+1}.mp3`;
                        audioElement.currentTime=0;
                        audioElement.play();
                        masterplay.classList.add('fa-play');
                        masterplay.classList.remove('fa-pause');
                        NowPlay.innerText = songs[songIndex].songName;
                        document.body.addEventListener('click', () => window.scrollTo({
                            top: 600,
                            behavior: 'smooth',
                          }));
                          
                 })
    })

    document.getElementById("next").addEventListener('click',()=>{
        if(songIndex>5){
              songIndex=1;
        }else{
            songIndex=songIndex+1;
        }
                        audioElement.src=`./${songIndex+1}.mp3`;
                        audioElement.currentTime=0;
                        audioElement.play();
                        masterplay.classList.add('fa-play');
                        masterplay.classList.remove('fa-pause');
                        NowPlay.innerText = songs[songIndex].songName;

    })

    document.getElementById("previous").addEventListener('click',()=>{
        if(songIndex<1){
              songIndex=5;
        }else{
            songIndex=songIndex-1;
        }
                        audioElement.src=`./${songIndex+1}.mp3`;
                        audioElement.currentTime=0;
                        audioElement.play();
                        masterplay.classList.add('fa-play');
                        masterplay.classList.remove('fa-pause');
                        NowPlay.innerText = songs[songIndex].songName;
    })

}
window.onload = fn
