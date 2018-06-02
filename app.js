// 1. Make the td clickable - Completed
// 2. Insert either X or O depends on the player or the computer - Completed
// 3. Check if the player wins or loses or tie - Completed
// 4. Count the number of wins a player has - Completed
// 5. Can you change the mode of the game? (V.S. AI, V.S. Human)

const grid_1    = document.getElementById("grid-1");
const grid_2    = document.getElementById("grid-2");
const grid_3    = document.getElementById("grid-3");
const grid_4    = document.getElementById("grid-4");
const grid_5    = document.getElementById("grid-5");
const grid_6    = document.getElementById("grid-6");
const grid_7    = document.getElementById("grid-7");
const grid_8    = document.getElementById("grid-8");
const grid_9    = document.getElementById("grid-9");
const table     = document.querySelector("table");
const td        = document.querySelectorAll("td");
const c         = "click";
let count       = 1;
let winnerCount = 0;
let tieCount    = 0;
let gameEnd     = false;

// Add event listeners to all the td.
for (let i = 0; i < td.length; i++) {
  td[i].addEventListener(c, (e) => {
    // If the span's content is empty, draw either O or X.
    if (gameEnd !== true) {
      if (td[i].querySelector("span").innerHTML === "") {
        // Draw it.
        draw(i);
        // If the count is 9, stop incrementing.
        if (count !== 9) {
          count++;
        } else if(count === 9) {
          console.log(tieCount += 1);
          gameEnd = true;
        }
        // Check if it's lined up
        checkIfLineUp();
      }
    } else {
      console.log("End");
    }
  });
}

// Function to check if the grids are lined up.
function checkIfLineUp() {
  // Row 1
  if (grid_1.innerText === grid_2.innerText && grid_1.innerText === grid_3.innerText && grid_1.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  } 
  // Row 2
  else if (grid_4.innerText === grid_5.innerText && grid_4.innerText === grid_6.innerText && grid_4.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
  // Row 3
  else if (grid_7.innerText === grid_8.innerText && grid_7.innerText === grid_9.innerText && grid_7.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
  // Column 1
  else if (grid_1.innerText === grid_4.innerText && grid_1.innerText === grid_7.innerText && grid_1.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
  // Column 2
  else if (grid_2.innerText === grid_5.innerText && grid_2.innerText === grid_8.innerText && grid_2.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
  // Column 3
  else if (grid_3.innerText === grid_6.innerText && grid_3.innerText === grid_9.innerText && grid_3.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
  // Diagonal 1
  else if (grid_1.innerText === grid_5.innerText && grid_1.innerText === grid_9.innerText && grid_1.innerText !== "") {
    winnerCount++;
  }
  // Diagonal 2
  else if (grid_3.innerText === grid_5.innerText && grid_3.innerText === grid_7.innerText && grid_3.innerText !== "") {
    winnerCount++;
    gameEnd = true;
  }
}

function draw(i) {
  if (count % 2 === 0) {
    td[i].querySelector("span").innerHTML = "O";
  } else {
    td[i].querySelector("span").innerHTML = "X";
  }
}