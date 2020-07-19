//1. make the divs dynamically sized with (text box) input, keep to 960px x 960px 
//2. add different colors, bonus: randomizer for each square
//3. background for whole thing (maybe find etch a sketch frame, rounded corners etc )
//


const container = document.querySelector('#container');
//box is nodelist, almost treated like an array

let num = prompt("enter grid size");
firstGrid(num);
function firstGrid(num){
    for(let x = 0;x<num ** 2;x++){
        let newDiv = document.createElement('div');
        newDiv.className = "box";
        //newDiv.textContent = x;
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${num},1fr)`;
    container.style.gridTemplateRows = `repeat(${num},1fr)`;
} 

//mouse over for drawing on grid
var box = document.getElementsByClassName("box");
for(let x = 0;x<box.length;x++){
    box[x].addEventListener('mouseover', changeColor);
}

//check radio buttons for color choice
function changeColor(){
    var color;
    var ele = document.getElementsByName("color");
    for(let i = 0;i<ele.length;i++){
        if(ele[i].checked){
            color = ele[i].value;
        }
    }
    if(color!=="black"){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
    else{
        this.style.backgroundColor = "black";
    }
}


/*
function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
*/

//reset to white, can probably be deleted with new grid generation though. 
let reset = document.getElementById("reset");
//update this to update grid size as well 
reset.addEventListener("click", updateGrid);//replace resetcolor with a new function containing reset and update

function updateGrid(){
    //num = prompt("enter new grid dimensions");
    clearGrid();
    newSizeGrid(num);
}

function clearGrid(){
    const items = document.getElementsByClassName('box');
    for(let x = items.length-1;x>=0;x--){
        items[x].parentNode.removeChild(items[x]);
    }
}

function newSizeGrid(num){
    for(let x = 0;x<num ** 2;x++){
        let newDiv = document.createElement('div');
        newDiv.className = "box";
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${num},1fr)`;
    container.style.gridTemplateRows = `repeat(${num},1fr)`;
}


//while this is fun, it doesnt work.. 
//much like the rest of my codebase.. 
/*
window.onload = function(){
    if (localStorage.getItem("runneth")=== null){
        firstGrid();
        localStorage.setItem("runneth",true);
    }
}
*/

//make some lil wheels




const topbar = document.querySelector('#topbar');
let leftwheel = document.createElement('div');
let rightwheel = document.createElement('div');
leftwheel.id = "leftwheel";
rightwheel.id = "rightwheel";
topbar.appendChild(leftwheel);
topbar.appendChild(rightwheel);
















