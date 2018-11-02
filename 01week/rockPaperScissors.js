'use strict';

//hand1 enters move, hand2 enters move
//check to see is move is valid

//if hand1 enters rock and hand2 enters rock, return 'tie'
//if hand1 enters rock and hand2 enters paper, return 'hand2 wins'
//if hand1 enters rock and hand2 enters scissors, return 'hand1 wins'

//if hand1 enters paper and hand2 enters rock, return 'hand1 wins'
//if hand1 enters paper and hand2 enters paper, return 'tie'
//if hand1 enters paper and hand2 enters scissors, return 'hand2 wins'

//if hand1 enters scissors and hand2 enters rock, return 'hand2 wins'
//if hand1 enters scissors and hand2 enters paper, return 'hand1 wins'
//if hand1 enters scissors and hand2 enters scissors, return 'tie'

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  if(hand1 === hand2){
    return "The result is a tie!";
  }
   else if(hand1 === "rock"){
    if(hand2 === "scissors"){
      return "Hand 1 wins!";
    }
    else {
      return "Hand 2 wins!";
      }
  }
  else if(hand1==="paper"){
    if(hand2==="rock"){
      return "Hand 1 wins!";
    }
    else {
      return "Hand 2 wins!";
    }
  }
  else if (hand1 === "scissors") {
    if (hand2 === "paper") {
      return "Hand 1 wins!";
    }
    else {
      return "Hand 2 wins!";
    }
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
