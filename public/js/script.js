let mySong= document.getElementById("mySong");
let icon= document.getElementById("icon");

icon.onclick= function(){
    if(mySong.paused){
        mySong.play();
        icon.src="img/12.png";
    }else{
        mySong.pause();
        icon.src="img/22.png";
    }
}