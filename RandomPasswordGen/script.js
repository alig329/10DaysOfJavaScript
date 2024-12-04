const passwordBox = document.getElementById('password');

const button = document.getElementById('btn');

const copyButton = document.getElementById('copy');


const generatePassword = () =>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
    let password = "";
    const lengthOfPassword = 20;
    for (let i=0; i< lengthOfPassword; i++ ){
        password += chars.charAt(Math.floor(Math.random()*chars.length));
        console.log(password);
    }
    passwordBox.value= password;
}
button.addEventListener("click", generatePassword);
copyButton.addEventListener("click",()=>{
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy){
        alert("Please generate a password first");
        return;
    }
    navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("password copied to clipboard");
    });
})