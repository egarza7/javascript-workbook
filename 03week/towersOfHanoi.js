'use strict';
// Move piece from stack to stack 
// Working is legal function 
// Working check for win function 
// Working reset function 
// Legal Move function 
// Clean PR & es6 syntax
// Function plan in comments(each function has a stated purpose and method
// At least 2 tests

//choose starting stack, choose ending stack
//pop the top piece of startStack and push into endStack (trim and lower case)
//isLegal checks is value chosen is smaller than endStack value
//if YES, allow piece to be moved (movePiece)
//if NO, then return 'starting stack can't be larger than end value' or 'pick again'
//if legal, move piece and print it on board
//check for win (all numbers on stack c)
//if YES, return 'you win!'
//if NO, keep playing
// play until win


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function reset(){
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

function gameOver(){
  printStacks();
  reset();
}

function movePiece(startStack, endStack) {
  //Your code here
  //endStack.push(startStack.pop());
  const pickedNumber = startStack.pop();
  endStack.push(pickedNumber);
} 

function isLegal(startStack, endStack) {
  // Your code here
  if (startStack[startStack.length - 1] < endStack[endStack.length - 1] || endStack.length == 0) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // Your code here
  if (stacks.c.length == 4) {
    console.log("Victory!");
    gameOver();
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  const validOptions = 'abc';
  const ssVal = startStack.trim().toLowerCase();
  const esVal = endStack.trim().toLowerCase();

  if (validOptions.search(ssVal)>=0 && validOptions.search(esVal)>=0) {
    const firstPick = stacks[ssVal];
    const secondPick = stacks[esVal];
    if (isLegal(firstPick, secondPick)) {
      movePiece(firstPick, secondPick);
      checkForWin();
    } else {
      console.log('It Does NOT Work!');
    }
  }
  else  {
    console.log('Pick a, b or c')
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#towersOfHanoi()', () => {
    it('should not allow a number', () => {
      towersOfHanoi('a', '9');
      assert.deepEqual('Pick a, b or c');
    });
  });
  describe('#gameOver()', () => {
    it('should reset the board', () => {
      assert.equal(stacks = { a: [4, 3, 2, 1], b: [4, 3, 2, 1], c: [] });

    });
  });

} else {

  getPrompt();

}
