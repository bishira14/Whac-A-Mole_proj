const circle = document.querySelectorAll('.circle');
const resultElement = document.querySelector('.score span')
const timerElement = document.querySelector('.timer span')
let result = 0;
let currentPosition = null;
let timer = 5;
function move(){
  circle.forEach(element => {
  element.classList.remove('mole');
 });

 let random = Math.floor(Math.random()*9);
 let position = circle[random];
 position.classList.add('mole');
 currentPosition = position;
}

let makeMove = setInterval(move, 500);

circle.forEach(element => {
   element.addEventListener('click', equals);
   function equals(){
    if(element.id === currentPosition.id){
     result++;
     resultElement.textContent = result;
    }
    if(timer == 0){
      circle.forEach(element => {
        element.removeEventListener('click', equals);
      });
    }
   }
})

let counter = setInterval(countdown, 1000);

function countdown(){
timer--;
timerElement.textContent = timer;
if(timer == 0){
 clearInterval(makeMove);
 clearInterval(counter);
}
}
