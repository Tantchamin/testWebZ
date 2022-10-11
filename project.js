window.onload = pageLoad;

function pageLoad() {
	document.getElementById("FITgame").onmouseover = changeImage;
    document.getElementById("FITgame").onmouseleave = changeImageOrigin;
    document.getElementById("GDMgame").onmouseover = changeImage2;
    document.getElementById("GDMgame").onmouseleave = changeImageOrigin2;

}

function changeImage(){
    var gameImageOrigin = document.getElementById("FITgame");
    gameImageOrigin.src = "images/artifact2.png";
}

function changeImageOrigin(){
    var gameImageOrigin = document.getElementById("FITgame");
    gameImageOrigin.src = "images/artifact.png";
}

function changeImage2(){
    var gameImageOrigin = document.getElementById("GDMgame");
    gameImageOrigin.src = "images/adventure.png";
}

function changeImageOrigin2(){
    var gameImageOrigin = document.getElementById("GDMgame");
    gameImageOrigin.src = "images/adventureOG.jpg";
}