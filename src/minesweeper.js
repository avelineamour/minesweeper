//Dynamically Generate a Board of Any Size
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

//console.log(generatePlayerBoard(4, 6));

//Dynamically Generate Bomb Board with Randomly Placed Bombs
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//Establish Empty Board
  let board = [];
//For Loop Iterates Through Rows
  for (let i = 0; i < numberOfRows; i++) {
//Establish Empty Row Whose Length Will Be Defined By Number of Columns
    let row = [];
//For Loop Iterates Through Columns
    for (let j = 0; j < numberOfColumns; j++){
//Push Empty Squares Into Row
      row.push(null);
    }
//Push Row Into Board (Containing Empty Squares and Defined by Number of Columns)
    board.push(row);
  }
//Bomb Counter
  let numberOfBombsPlaced = 0;
/*Setting Number of Bombs Sets Off While Loop Creating Random Integer Which Acts as Coordinate to Place Bomb*/
  while (numberOfBombsPlaced < numberOfBombs) {
//Random Row Coordinate (Think Which Row, Not Which Place in Row-- So Which Line It's On)
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//Random Column Coordinate (Think Which Place in Row)
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    //Placing Bomb At Coordinate
     board[randomRowIndex][randomColumnIndex] = 'B';
//Increment the Bomb Counter (Or It Would Stay at 0 and Loop Runs Forever)
    numberOfBombsPlaced++;
/*An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.*/

  }

    return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
