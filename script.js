'use strict'
//Select Element 
const check = document.querySelector('.check');
const again = document.querySelector('.again');
//Show Message--
const GameNotStart = 'Start Guissing....'
const NotANum = "This IS Not Valid No 👺👺";
const CorrectNo = "You r a lucky person Now U  Win The Game  Nyc Guiss😙"
const HighNum = "Your Guiss is thoo High Ply Try Lower Number 🙄"
const LowNum = "Your Guiss is thoo Low Plz try with Higher Number 🤨"
const LostGame = "You Lost The Game 😌"
//Randum number----
let SecrateNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecrateNumber)

let  score = 20;
let highscore = 0;

//display Message
const DisplayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const CheckGuissNumber = function (guiss) {
    //Not a no
    if (guiss === 'NaN') {
        DisplayMessage(NotANum)
    }
    //correct
    else if (guiss === SecrateNumber) {
        DisplayMessage(CorrectNo);
            //score
            document.querySelector('main').style.backgroundColor = "green"
            document.querySelector('.left').style.visibility = "hidden";
            document.querySelector('.number').style.width = "30rem"
            document.querySelector('.number').textContent = SecrateNumber;
            //score++;
            document.querySelector('.score').textContent = score;
            if (highscore < score) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
    }
    else if (guiss !== SecrateNumber) {

        if (score >= 1 && guiss >= 1) {
            DisplayMessage(guiss > SecrateNumber ? HighNum : LowNum)
            score--;
            document.querySelector('.score').textContent = score;    
        }
         if(score == 0){
            DisplayMessage(LostGame)
             document.querySelector('.score').textContent = score;
             document.querySelector('.left').style.visibility = "hidden";
             document.querySelector('main').style.backgroundColor = "red"
        }
        if (!guiss) {
            DisplayMessage(NotANum)
        }
        }
    
}  
const WhattoDo = function () {
    const GuissNumber = document.querySelector('.guess').value;
    const GuissNumver = Number(GuissNumber)
    CheckGuissNumber(GuissNumver)

}
//Rset The Game 
const ResetGame = function(){
        SecrateNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
    DisplayMessage(GameNotStart)
    document.querySelector('.left').style.visibility = "visible";
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('main').style.backgroundColor = "black"
        document.querySelector('.number').style.width = "15rem"
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ''
        document.querySelector('.highscore').textContent = highscore;
    }

    



check.addEventListener('click', WhattoDo)
again.addEventListener('click', ResetGame)