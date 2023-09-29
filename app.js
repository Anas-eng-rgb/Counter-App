/*
const counter = document.querySelector('h1');
const increaseBtn = document.querySelector('.btn__increase');
const decreaseBtn = document.querySelector('.btn__decrease');
const parentElement = document.querySelector('.full-content');
//const colors = ['red' , 'green' , 'blue' , 'black' , 'yellow' , 'orange'];

increaseBtn.addEventListener('click' , () => {
    counter.textContent = +counter.textContent + 1;
    parentElement.style.backgroundColor = getRandColor();
})

decreaseBtn.addEventListener('click' , () => {
    if(Number(counter.textContent) > 0) {
        counter.textContent = counter.textContent - 1;
        parentElement.style.backgroundColor = getRandColor();
    }
});


function getRandColor() {
    let randNumber = parseInt(Math.random() * 6);
    return colors[randNumber];
}
*/

const counter = document.querySelector('h1');
const increaseBtn = document.querySelector('.btn__increase');
const decreaseBtn = document.querySelector('.btn__decrease');
const parentElement = document.querySelector('.full-content');


increaseBtn.addEventListener('click' , () => {
    counter.textContent = +counter.textContent + 1;
    let r = Number((Math.random() * 255));
    let g = Number((Math.random() * 255));
    let b = Number((Math.random() * 255));
    parentElement.style.backgroundColor =  `rgb(${r} , ${g} , ${b})`;
});


decreaseBtn.addEventListener('click' , () => {
    if(Number(counter.textContent) > 0){
    counter.textContent = counter.textContent - 1; 
    let r = Number((Math.random() * 255));
    let g = Number((Math.random() * 255));
    let b = Number((Math.random() * 255));
    parentElement.style.backgroundColor =  `rgb(${r} , ${g} , ${b})`;
   }
});