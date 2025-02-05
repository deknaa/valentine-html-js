let btnYes = document.getElementById('btnYes');
let btnNo = document.getElementById('btnNo');
let gifOne = document.getElementById('gifOne');
let gifTwo = document.getElementById('gifTwo');
let displayText = document.getElementById('displayText');

function accepted(){
    if(btnYes.click){
        gifOne.style.display = "none";
        gifTwo.style.display = "block";
        btnYes.style.display = "none";
        btnNo.style.display = "none";
        displayText.innerText = "Yeiyyyy, thankyouu 🥰😘💓";
    }else{
        console.log("gagal")
    }
}

function denied(){
    if(btnNo.click){
        console.log("clicked");
        btnYes.style.scale += 2;
    }
}