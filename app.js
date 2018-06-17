//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;
//UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
       guessInput = document.querySelector('#guess-input'),
       message = document.querySelector('.message');
//Assign uI min and max
minNum.textContent = min;
maxNum.textContent = max;
// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

    
    
    //check if won
    if(guess === winningNum){
        //GAME OVER-won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    }
    
    
    else{
    
        //WRONG NUMBER                  
        guessesLeft -= 1;
        if(guessesLeft === 0){
    //game lost
    gameOver(false,`game over,you lost.the correct number was ${winningNum}`);
        
            
        } else{
            //Game continues - answer wrong
            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //tell us its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
            
        }
    }
});
//game over
function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';
     guessInput.disabled = true;
        
        guessInput.style.borderColor = color;
    // set text color
    
   message.style.color = color;
        //set message
        setMessage(msg);
    guessBtn.value = 'play again';
    guessBtn.className += 'play-again';
    
}
//get winning number
function getRandomNum(min,max){
return Math.floor(Math.random()*(max-min+1)+min);    
}

//set message
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
    
}