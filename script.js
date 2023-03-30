console.log("Welcome To Spotify ");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from (document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Let Me Love You" , filePath : "songs/1.mp3" , coverPath:"covers/c1.jfif"},
    {songName: "Balam Thanedar" , filePath : "songs/2.mp3" , coverPath:"covers/c2.jpg"},
    {songName: "Balam Pichkari" , filePath : "songs/3.mp3" , coverPath:"covers/c3.jfif"},
    {songName: "perfect" , filePath : "songs/4.mp3" , coverPath:"covers/c4.jpg"},
    {songName: "Waka Waka " , filePath : "songs/5.mp3" , coverPath:"covers/c5.jpg"},
    {songName: "Rang Sharbaton Ka" , filePath : "songs/6.mp3" , coverPath:"covers/c6.jfif"},
    {songName: "Titli" , filePath : "songs/7.mp3" , coverPath:"covers/c7.jfif"},
    {songName: "Udaarian" , filePath : "songs/8.mp3" , coverPath:"covers/c8.jfif"},
]

songitems.forEach((element , i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("sp")[0].src = songs[i].songName;
})


masterPlay.addEventListener('click' , ()=>{
     if(audioElement.paused || audioElement.currentTime <=0)
     {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
     }

})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = () => {
  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click' , (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



