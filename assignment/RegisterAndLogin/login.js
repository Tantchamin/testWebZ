window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}



function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	var register_username = urlParams.get('username');
	var register_password = urlParams.get('password');
	var login_username = document.forms["myLogin"]["username"];
	var login_password = document.forms["myLogin"]["password"];
	
	if(login_username.value == register_username && login_password.value == register_password){
		alert("Welcome back");
	}
	else{
		alert("Something went wrong, Please try again");
		return false;
	}

}

			