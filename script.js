// fetching the buttons form HTML

let changeShape = document.querySelector(".change-shape");
let changeColor = document.querySelector(".change-color");

// fetching the two dynamically changing divs
let divShape = document.querySelector(".circle"); //color change 
let innerDivShape = document.querySelector(".random-shape");//shape change

// putting the add event listener to out both the buttons

// putting the Logic of changing the div color
changeColor.addEventListener("click" , () =>{
    divShape.style.backgroundColor = randomColor();
})

function randomColor(){
    let hex = "0123456789ABCDEF";
    let color ="#";
    for(let i = 1; i <= 6 ; i++){
        color += hex[Math.floor(Math.random() * hex.length)]
    }
    return color;   
}

// putting the logic of changing the inner div shape

changeShape.addEventListener("click" , () =>{
    innerDivShape.style.borderRadius = getBorderRadius();
})

function getBorderRadius(){
    let shapes = [
        { borderRadius: '0%' },           
        { borderRadius: '50%' },          
        { borderRadius: '30% 30% 0% 0%' },            
        { borderRadius: '50% 0% 50% 0%' },
        { borderRadius: '10%' },                      
        { borderRadius: '0% 50% 50% 0%' },          
        { borderRadius: '50% 0% 50% 0%' },            
        { borderRadius: '0% 50% 0% 50%' },           
        { borderRadius: '50% 50% 0% 0%' },           
    ];
    let myShape = shapes[Math.floor(Math.random() * shapes.length)];
    return myShape.borderRadius;
}