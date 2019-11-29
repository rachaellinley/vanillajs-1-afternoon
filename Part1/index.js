// Set up an array to store X and O plays
const board = [];

// Play runs when each square is clicked
function play(clickedId) {

  // Grab the span that tells us whose turn it is
  const playerSpan = document.getElementById('player');

  // `clickedElement` is the square that was clicked
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === 'X') {

    // display the next player's turn
    playerSpan.innerText = 'O';

    // mark the square
    clickedElement.innerText = 'X';

    // store the mark
    board[clickedId] = 'X';
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O';
  }
  // console.log(board);


  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
  }
  
  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    console.log("i is ", i, " and (board[i] ", board[i])
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
    console.log("boardFull ", boardFull)
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}