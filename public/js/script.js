let mySong= document.getElementById("mySong");
let icon= document.getElementById("icon");

icon.onclick= function(){
    if(mySong.paused){
        mySong.play();
        icon.src="12.png";
    }else{
        mySong.pause();
        icon.src="22.png";
    }
}