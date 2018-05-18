const fs = require('fs');
const inquirer = require('inquirer');

var playerHp = Math.floor(Math.random()*(85-65))+65;
var zombieHp = Math.floor(Math.random()*(20-12))+12;
console.log("Your HP: " + playerHp + '\n' + "ZombieHp: " + zombieHp);
console.log("========================================");

function roundNumbers() {
  var damage = Math.floor(Math.random()* 5 + 1);
  var zombieNum = Math.floor(Math.random()* 5 + 1);
  startRound(damage, zombieNum);
}

function startRound(damage, zombieNum) {
  let questions = [
    {
      type: 'list',
      name: 'guess',
      message: 'Choose a number:',
      choices: ['1', '2', '3', '4', '5']
    }
  ];

  inquirer.prompt(questions).then(function(response){

    let playerGuess = response.guess;

    if(playerGuess == zombieNum) {
      zombieHp = zombieHp - damage;
      console.log("Correct! You dealt " + damage + " damage to the zombie!");
      console.log("Your HP: " + playerHp + '\n' + "ZombieHp: " + zombieHp);
      console.log("========================================" + '\n');
      roundNumbers();
    } else {
      playerHp = playerHp - damage;
      console.log("Incorrect, The zombie dealt " + damage + " damage to you!");
      console.log("Your HP: " + playerHp + '\n' + "ZombieHp: " + zombieHp);
      console.log("========================================" + '\n');
      roundNumbers();
    }

    if ((playerHp - damage) <= 0) {
      console.log("Out of Hp, Sorry you lose!");
    } else if ((zombieHp - damage) <= 0) {
      console.log("Zombie has been killed. You win!");
    }
  });
}

roundNumbers();
