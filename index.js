window.onload = pageLoad;

function pageLoad() {
	document.getElementById("studentButton").onclick = changeImage;

}

var counter = 1;
function changeImage(){
	var studentPhoto = document.getElementById("studentImage");
	if(counter == 1){
		studentPhoto.src = "images/StudentPhoto2.jpg";
		counter = 0;
	}
	else if(counter != 1){
		studentPhoto.src = "images/StudentPhoto.jpg";
		counter = 1;
	}
}