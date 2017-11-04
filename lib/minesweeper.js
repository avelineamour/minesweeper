'use strict';

//Dynamically Generate a Board of Any Size
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

//console.log(generatePlayerBoard(4, 6));

//Dynamically Generate Bomb Board with Randomly Placed Bombs
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  //Establish Empty Board
  var board = [];
  //For Loop Iterates Through Rows
  for (var i = 0; i < numberOfRows; i++) {
    //Establish Empty Row Whose Length Will Be Defined By Number of Columns
    var row = [];
    //For Loop Iterates Through Columns
    for (var j = 0; j < numberOfColumns; j++) {
      //Push Empty Squares Into Row
      row.push(null);
    }
    //Push Row Into Board (Containing Empty Squares and Defined by Number of Columns)
    board.push(row);
  }
  //Bomb Counter
  var numberOfBombsPlaced = 0;
  /*Setting Number of Bombs Sets Off While Loop Creating Random Integer Which Acts as Coordinate to Place Bomb*/
  while (numberOfBombsPlaced < numberOfBombs) {
    //Random Row Coordinate (Think Which Row, Not Which Place in Row-- So Which Line It's On)
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    //Random Column Coordinate (Think Which Place in Row)
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    //Placing Bomb At Coordinate
    board[randomRowIndex][randomColumnIndex] = 'B';
    //Increment the Bomb Counter (Or It Would Stay at 0 and Loop Runs Forever)
    numberOfBombsPlaced++;
    /*An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.*/
  }

  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);