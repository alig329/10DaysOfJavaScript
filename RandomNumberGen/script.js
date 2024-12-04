const genBtn = document.getElementById('generate-btn');

genArea = document.getElementById('random-number');

genBtn.addEventListener("click",()=>{
    const randomNumber = Math.floor(Math.random()*1000);
    genArea.textContent = randomNumber;
});

