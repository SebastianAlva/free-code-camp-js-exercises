const users = [
    {
        name:"Chavelo",
        image:"https://p1.hiclipart.com/preview/23/1002/391/chabelo-001-0001-png-clipart-thumbnail.jpg",
        title:"Web Developer",
        description:"lorem amdowaidmawok awiod awnoid  dokawdmkoawm odkaw",

    },
    {
        name:"Pollo",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA8wfh-suYIHOmN39rWWzM4rX-HpHJBZno7j_RDeNVQ&s",
        title:"Pollo",
        description:"lorem pollo",
    },
    {
        name:"Frozono",
        image:"https://p7.hiclipart.com/preview/439/102/535/frozone-violet-parr-dash-mr-incredible-elastigirl-the-incredibles-2-thumbnail.jpg",
        title:"tira Hielo",
        description:"lorem amdowaidmawok awiod awnoid  dokawdmkoawm odkaw",
    }
]
const image = document.querySelector(".image");
const name = document.querySelector(".name");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const forward =document.querySelector(".forward-button");
const backward = document.querySelector(".backward-button");
const surprice = document.querySelector(".random-button");
let counter = 0; 
//set the default information of the target
window.addEventListener("DOMContentLoaded", function(){
    image.src = users[counter].image;
    name.textContent  = users[counter].name;
    title.textContent = users[counter].title;
    description.textContent = users[counter].description;
})
//function forward
function forwardAction(){
    if(counter != users.length-1){
        counter++;
    }else{
        counter=0;
    }
    image.src = users[counter].image;
    name.textContent  = users[counter].name;
    title.textContent = users[counter].title;
    description.textContent = users[counter].description;
    
}    
forward.addEventListener("click", forwardAction)
//function backward
function backwardAction(){
    if(counter == 0){
        counter = users.length-1;
    }else{
        counter--;
    }
    image.src = users[counter].image;
    name.textContent  = users[counter].name;
    title.textContent = users[counter].title;
    description.textContent = users[counter].description;
}
backward.addEventListener("click", backwardAction)
//surprice me function
function surpriceAction(){
    counter =  Math.floor(Math.random()*(users.length));
    image.src = users[counter].image;
    name.textContent  = users[counter].name;
    title.textContent = users[counter].title;
    description.textContent = users[counter].description;
}
surprice.addEventListener("click", surpriceAction);