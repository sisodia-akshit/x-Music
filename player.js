const allSongs=document.querySelector("#allSongs")
const PLAY = document.getElementById("PLAY")
const play =document.getElementById("play")
const pause =document.getElementById("pause")

let audio = new Audio()
let progress = document.getElementById("progress")

let selectedSong=0 ;




const songs =[ 
                {name:"Judas", src:"https://www.dropbox.com/scl/fi/umojmefr24n709fqujsh4/judas-lady-gaga-full-version_edit-audio-MP3_320K.mp3?rlkey=nablkga7uubwefezja5mey55i&st=kssclflh&raw=1"},
                {name:"Inferno", src:"https://www.dropbox.com/scl/fi/gcxt1ayqbyy8yplulk5wf/Sub-Urban-_-Bella-Poarch-INFERNO-Lyrics-MP3_160K.mp3?rlkey=fweozzqu4erfymsv3wm8rr1lr&st=yahvt2h3&raw=1"},
                {name:"Bunny Girl Senpai", src:"https://www.dropbox.com/scl/fi/26a2pw2h8bi48g2rjkz3a/Seishun-Buta-Yarou-wa-Bunny-Girl-Senpai-no-Yume-wo-Minai-ED-Part-Section-Fukashigi-no-Carte-MP3_160K.mp3?rlkey=l0fzztuyi3o907yoq4xg88hlr&st=78yrrlqs&raw=1"},
            ]

            // https://drive.google.com/file/d/15bjqf_RLDsDuGd5_D2rRmbIiVElXeAJ3/view?usp=sharing

const startMusic=()=>{
    allSongs.innerHTML='';
    songs.forEach((curElem,index)=>{

        const song =document.createElement("div");
        song.classList.add("song")
        song.innerHTML=`
        <button id="${index}">${curElem.name}
        <audio id="control-${index}">
                    
        </audio>
        </button> 
         
        `;
        allSongs.appendChild(song)
       
    })
    let control = document.getElementById(`control-${selectedSong}`)
    control.innerHTML=`
    <source src="${songs[selectedSong].src}" type="audio/mp3">
    `
    audio = control;
    
      
}

allSongs.addEventListener("click",function(e){
        selectedSong =e.target.id
        startMusic(selectedSong)
        progresser()
        playSong(audio);
        controls();
        document.getElementById("pause").style.display="block";
        document.getElementById("play").style.display="none";
        
 })

startMusic();

//main music page
function playSong(audio){
    document.getElementById("M-play").style.display="block";
    document.getElementById("allSongs").style.display="none";
    document.getElementById("player").style.display="block"; 
    audio.play()
}

function backToMenu(){
        document.getElementById("M-play").style.display="none";
        document.getElementById("allSongs").style.display="block"
        
        
}

function progresser(){
if(audio.play()){
            setInterval(()=>{
                progress.value = audio.currentTime;
            },300 )
        }
        audio.onloadedmetadata = function(){
            progress.max=audio.duration;
            progress.value=audio.currentTime;
        }
        progress.onchange=function(){
            audio.play()
            audio.currentTime=progress.value;
        }
}
       
function controls(){
        play.addEventListener("click",function(event){
            audio.play();
            document.getElementById("pause").style.display="block";
            document.getElementById("play").style.display="none";
        })

        pause.addEventListener("click",function(event){
            audio.pause();
            document.getElementById("pause").style.display="none";
            document.getElementById("play").style.display="block";
        })

        //forward
        
            document.getElementById("forward").addEventListener(
                "click",
                function(e){
                    if(selectedSong<=1){
                    audio.pause();
                    selectedSong++;
                    // console.log(selectedSong);
                    startMusic(selectedSong);
                    progresser();
                    playSong(audio);
                    document.getElementById("pause").style.display="block";
                    document.getElementById("play").style.display="none";
                    }else{
                        alert("This is the last song of playlist")
                    }
                }
            )
            
            document.getElementById("backward").addEventListener(
                "click",
                function(e){
                    if(selectedSong>=1){
                    audio.pause();
                    --selectedSong;
                    // console.log(selectedSong);
                    startMusic(selectedSong)
                    progresser();
                    playSong(audio);
                    document.getElementById("pause").style.display="block";
                    document.getElementById("play").style.display="none";
                    }else{
                        alert("This is the first song of playlist")
                    }
                }
            )


        
        
        
}




