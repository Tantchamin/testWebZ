window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    // var register_username = document.forms["myForm"]["username"];
    var errorMessage = document.getElementById("errormsg");
    var register_password = [] = document.forms["myForm"]["password"];
    
    if(register_password[0].value != register_password[1].value){
        errorMessage.innerHTML = "error";
        return false;
    }
}