let emailID = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker(){
    icon.style.display = "inline-block";
    let email = emailID.value.trim();

    if (
        email === ""
    ){
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailID.style.border = "2px solid #d1d3d4";
    }else if(validateEmail(email)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#2ecc71';
        errorMsg.style.display = "none";
        emailID.style.border = '2px solid #2ecc71'
    }else{
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = '#ff2851';
        errorMsg.style.display = "block";
        emailID.style.border = '2px solid #ff2851'
    }
}

function validateEmail(email){ // abc@example.com
    let atIndex = email.indexOf('@');
    
    let dotIndex = email.indexOf('.');

    if (
        atIndex > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < email.length -2 
    ){
        return true;
    }else{
        return false;
    }
}