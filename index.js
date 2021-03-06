const replay = document.querySelector('.replay');
const circle = document.querySelectorAll('.circle');
const resultElement = document.querySelector('.score span')
const timerElement = document.querySelector('.timer span')
let result = 0;
let currentPosition = null;
let timer = 60;

replay.addEventListener('click', function(){
    return location.reload();
  });

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
      if(timer != 0){
        result++;
        resultElement.textContent = result;
      }
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
