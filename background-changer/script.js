/*Random Color for RGB*/
let randomNumber1 = Math.floor(Math.random()* 255);
let randomNumber2 = Math.floor(Math.random()* 255);
let randomNumber3 = Math.floor(Math.random()* 255);

/*Selectors */
//buttons
let submitColor = document.querySelector(".submitColor");
let submitRandomColor = document.querySelector(".submitRandomColor")
//textbox
let userResponse= document.querySelector(".userResponse");
//body selector
let body = document.querySelector("body");


//functions
function ChangeBackgroundColor(){
    body.style.backgroundColor = userResponse.value;
}
submitColor.addEventListener("click",ChangeBackgroundColor);

function ChangeRandomBackgroundColor(){
    
    body.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
    randomNumber1 = Math.floor(Math.random()* 255);
    randomNumber2 = Math.floor(Math.random()* 255);
    randomNumber3 = Math.floor(Math.random()* 255);
}

submitRandomColor.addEventListener("click",ChangeRandomBackgroundColor);