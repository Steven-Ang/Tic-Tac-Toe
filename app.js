// 1. Make the td clickable - Completed
// 2. Insert either X or O depends on the player or the computer - Completed
// 3. Check if the player wins or loses or tie - Completed
// 4. Count the number of wins a player has - Completed
// 5. Refactor the code and make a big improvement to it - Completed
// 6. Can you change the mode of the game? (V.S. AI, V.S. Human)

const firstPlayerScore      = document.querySelector(".firstPlayerScore");
const secondPlayerScore     = document.querySelector(".secondPlayerScore");
const grid_1                = document.getElementById("grid-1");
const grid_2                = document.getElementById("grid-2");
const grid_3                = document.getElementById("grid-3");
const grid_4                = document.getElementById("grid-4");
const grid_5                = document.getElementById("grid-5");
const grid_6                = document.getElementById("grid-6");
const grid_7                = document.getElementById("grid-7");
const grid_8                = document.getElementById("grid-8");
const grid_9                = document.getElementById("grid-9");
const table                 = document.querySelector("table");
const td                    = document.querySelectorAll("td");
const span                  = document.querySelectorAll("td span");
const tieScore              = document.querySelector(".tieScore");
let firstPlayerWinnerCount  = 0;
let secondPlayerWinnerCount = 0;
let count                   = 1;
let tieCount                = 0;
let gameEnd                 = false;

// Set the score.
firstPlayerScore.innerHTML = firstPlayerWinnerCount;
secondPlayerScore.innerHTML = secondPlayerWinnerCount;
tieScore.innerHTML = tieCount;

// Run the game.
init();

function init() {
  // Add event listeners to all the td.
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("click", (e) => {
      // If the game hasn't started, start it. Else, don't run the code.
      if (gameEnd === false) {
        // If the span's content is empty, draw either O or X.
        if (td[i].querySelector("span").innerHTML === "") {
          // Draw it.
          draw(i);
          // If the count is 9, stop incrementing.
          if (count !== 9) {
            count++;
          } else if (count === 9 && checkIfLineUp() === false) {
            tieCount++;
            tieScore.innerText = tieCount;
            gameEnd = true;
          }
          // Check if it's lined up.
          checkIfLineUp();
        }
      } else {
        clearBoard();
        gameEnd = false;
        count = 1;
      }
    });
  }
}

// Function to check if the grids are lined up.
function checkIfLineUp() {
  // Row 1
  if (checkWinner(grid_1, grid_2, grid_3)) {
    incrementWinnerCount(grid_1, grid_2, grid_3);
  } 
  // Row 2
  else if (checkWinner(grid_4, grid_5, grid_6)) {
    incrementWinnerCount(grid_4, grid_5, grid_6);
  }
  // Row 3
  else if (checkWinner(grid_7, grid_8, grid_9)) {
    incrementWinnerCount(grid_7, grid_8, grid_9);
  }
  // Column 1
  else if (checkWinner(grid_1, grid_4, grid_7)) {
    incrementWinnerCount(grid_1, grid_4, grid_7);
  }
  // Column 2
  else if (checkWinner(grid_2, grid_5, grid_8)) {
    incrementWinnerCount(grid_2, grid_5, grid_8);
  }
  // Column 3
  else if (checkWinner(grid_3, grid_6, grid_9)) {
    incrementWinnerCount(grid_3, grid_6, grid_9);
  }
  // Diagonal 1
  else if (checkWinner(grid_1, grid_5, grid_9)) {
    incrementWinnerCount(grid_1, grid_5, grid_9);
  }
  // Diagonal 2
  else if (checkWinner(grid_3, grid_5, grid_7)) {
    incrementWinnerCount(grid_3, grid_5, grid_7);
  }
  // If none of them are true, return false.
  else {
    return false;
  }
}

function checkWinner(grid_1, grid_2, grid_3) {
  // Check whether the three grids are line up and the content of the grids are not empty.
  return grid_1.innerText === grid_2.innerText && grid_1.innerText === grid_3.innerText && grid_1.innerText !== "";
}

function incrementWinnerCount(grid_1, grid_2, grid_3) {
  // If the player is X, increment their counter. Else, increment the another player's counter if they've won.
  if (grid_1.innerText === "X" && grid_2.innerText === "X" && grid_3.innerText === "X") {
    firstPlayerWinnerCount++;
    firstPlayerScore.innerText = firstPlayerWinnerCount;
    gameEnd = true;
  } else {
    secondPlayerWinnerCount++;
    secondPlayerScore.innerText = secondPlayerWinnerCount;
    gameEnd = true;
  }
}

function clearBoard() {
  for (let i = 0; i < span.length; i++) {
    span[i].innerText = "";
  }
}

function draw(i) {
  // If the count is even, set it to "O", else set it to "X"
  if (count % 2 === 0) {
    td[i].querySelector("span").innerHTML = "O";
  } else {
    td[i].querySelector("span").innerHTML = "X";
  }
}