let play_pause=document.getElementById("play_pause");
let play_music=false;
let audio_player= document.getElementById("audioPlayer");


function playMusic(){

    if(!play_music){
        play_music=true;
        play_pause.src="pause-circle-regular.svg";
        audio_player.play();
    }else{
        play_music=false;
        play_pause.src="play-circle-regular.svg";
        audio_player.pause();
    }

}

function audioPlayer(){
    
    let music_len=audio_player.duration;
    console.log(music_len);

    let min=0;
    let sec=Math.round(music_len);
    console.log(sec);

    while(sec>=60)
    {
        sec-=60;
        min+=1;

    }
    console.log(min+":"+sec);

}

audioPlayer();

function actualTime()
{
    let sec=Math.round(audio_player.currentTime);
    timeLine(sec);
    let min=0;
    while(sec>=60)
    {
        sec-=60;
        min+=1;

    }
    console.log(min+":"+sec);

}

function timeLine(actual_sec)
{
let music_len=Math.round(audio_player.duration);
let percent= actual_sec/(music_len/100);
console.log(Math.round(percent)+"%");
document.getElementById("inner_line").style.width= percent + "%";
}

setInterval(actualTime,1000);

function changeMusic(){
    audio_player.src="mystic prophecy-ravenlord.mp3";
}
changeMusic();
