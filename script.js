'use strict'

//Randum number----
let SecrateNumber = Math.trunc(Math.random() * 20) + 1;

let  score = 20;
let highscore = 0;

const DisplayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guiss = Number(document.querySelector('.guess').value);
    //No input---
    if (!guiss) {
        //document.querySelector('.message').textContent = "🐱‍👤No Number !!"
        DisplayMessage("🐱‍👤No Number !!")
    }

    //Corect No-----
    else if (guiss === SecrateNumber) {
        //document.querySelector('.message').textContent = 'Correct No 😍👌';
        DisplayMessage('Correct No 😍👌')
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').style.width = "30rem"
        document.querySelector('.number').textContent = SecrateNumber;
        //score++;
        document.querySelector('.score').textContent = score;
        if (highscore < score) {
            highscore =  score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
        //Corect High ------
    else if (guiss !== SecrateNumber ) {
        if (score > 1 ) {
            //document.querySelector('.message').textContent = guiss > SecrateNumber ? 'too high🙄' : 'too Loww🤐' ;
            DisplayMessage(guiss > SecrateNumber ? 'too high🙄' : 'too Loww🤐')
        score--;
            document.querySelector('.score').textContent = score;
            
        } else {
           // document.querySelector('.message').textContent = 'you lost the Game😫';
            DisplayMessage('you lost the Game😫')
            document.querySelector('.score').textContent = score;
        }
    }
       
})

document.querySelector('.again').addEventListener('click', function () {
    SecrateNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    //document.querySelector('.message').textContent = 'Start Guissing ';
    DisplayMessage('Start Guissing....')
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''
    document.querySelector('.highscore').textContent = highscore;
    //console.log(highscore)
})