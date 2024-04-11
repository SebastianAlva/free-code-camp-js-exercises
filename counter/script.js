//buttons
let increase = document.querySelector(".INCREASE");
let reset = document.querySelector(".RESET");
let decrease = document.querySelector(".DECREASE");
//number to change
let count = document.getElementById("count-number")
var counter = 0;
function increaseCounter(){
    counter +=1;
    console.log(counter)
    count.textContent = `${counter}`
    
}
//call the method into the button3
increase.addEventListener("click",increaseCounter)

//decrease the counter by 1
function decreaseCounter(){
    counter -=1;
    console.log(counter)
    count.textContent = `${counter}`
}
//call the method into the button1
decrease.addEventListener("click", decreaseCounter)

//reset the counter
function resetCounter(){
    counter = 0;
    console.log(counter)
    count.textContent = `${counter}`
}
//call the method into the button2
reset.addEventListener("click",resetCounter)