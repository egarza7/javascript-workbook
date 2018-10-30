'use strict';

//isValidMove()=> t/f
//player x makes move
//check to see if move is available 
//switch player
//player o makes move
//check to see if move is available
//keep this going
// check for win starting on 5th turn
// if board is full its a tie 
// return which player wins 
// when player is switching make sure there is no move or win / enter their move

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function switchTurn(){
  if(playerTurn === 'X'){
    playerTurn = 'O'
  }else{
    playerTurn = 'X'
  }
}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  let foundWin = false
  board.forEach(row =>{
    if(foundWin){
      //if something is true, stop next loop
      return
    }
    let counter = 0
    row.forEach(space =>{
      if(space === playerTurn){
        counter = counter + 1
      }
    })
    if(counter === 3){
      //console.log('counter is 3')
      foundWin = true
    }
  })
  return foundWin
}

function verticalWin() {
  // Your code here
  const vertLineWins = [
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]]
  ]
  let foundWin = false
  vertLineWins.forEach(possibleWin => {
    if (foundWin) {
      //if something is true, stop next loop
      return
    }
    let counter = 0
    possibleWin.forEach(space => {
      if (space === playerTurn) {
        counter = counter + 1
      }
    })
    if (counter === 3) {
      //console.log('counter is 3')
      foundWin = true
    }
  })
  return foundWin
}

function diagonalWin() {
  // Your code here
  const slashWins = [
    [board[0][0],board[1][1],board[2][2]],
    [board[0][2],board[1][1],board[2][0]]
  ]
  let foundWin = false
  slashWins.forEach(possibleWin => {
    if (foundWin) {
      return
    }
    let counter = 0
    possibleWin.forEach(space => {
      if (space === playerTurn) {
        counter = counter + 1
      }
    })
    if (counter === 3) {
      foundWin = true
    }
  })
  return foundWin
}

function checkForWin() {
  // Your code here
  if(horizontalWin() || diagonalWin() || verticalWin()){
    console.log('Congrats player ' + playerTurn + ' you won!')
    return true
  }

}

function displayMove(row, column){
  board[row][column] = playerTurn;
}

function isValidMove(row, column) {
  if (board[row][column] === ' '){
    return true;
  }else {
    return false;
  }
}

function ticTacToe(row, column) {
  // Your code here
  if(isValidMove(row, column)){
    displayMove(row, column)
    if (checkForWin()){
      return 'Congrats player ' + playerTurn + ' you won!'
    }else{
      switchTurn()
      getPrompt();
    }
  }else{
    console.log('Move taken, pick again')
    getPrompt();
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}

