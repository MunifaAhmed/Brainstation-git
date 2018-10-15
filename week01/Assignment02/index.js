const readlineSync = require('readline-sync');

var userName = ''
var max;
var randomNumber;


function welcome(){
    userName = readlineSync.question('May I have your name? ');
    console.log('welcome to the game, we can start ' + userName + '!');
}
function generateRandomNumber(){
    randomNumber=  Math.floor(Math.random()*max + 1);
    console.log(randomNumber);
}
function getGuessFromUser(){
   while( randomNumber !== guess){
    var guess = Number(readlineSync.question('Can you guess a number between 1 - ' + max + ' '))
    if (randomNumber > guess){
        console.log('it is too low :(, guess again');
        console.log(randomNumber)
    }else if (randomNumber < guess){
        console.log('it is too high :(, guess again');
    }else if( randomNumber === guess){
    console.log('You have WON, Hurray')
    return
    }else if(guess === 0){
       console.log('Gameover')
       break
    }
   }
}
function getMaxFromUser(){
    max = Number(readlineSync.question('Please enter a number ' ));
    console.log('Great! lets start the game');
    }

function startGame(){
    welcome()
    getMaxFromUser()
    generateRandomNumber()
    getGuessFromUser()
}

startGame()