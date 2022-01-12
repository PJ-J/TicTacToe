const everything = document.querySelectorAll("div");
const cells = document.querySelectorAll(".row > div");
let player = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked() {
  if (player === 0) {
    event.target.textContent = "X";
    player = 1;
  } else {
    event.target.textContent = "O";
    player = 0;
  }
  checkWin();
  console.log("check");
}

function checkWin() {
  if (
    (cells[0].textContent === "X" &&
      cells[1].textContent === "X" &&
      cells[2].textContent === "X") ||
    (cells[3].textContent === "X" &&
      cells[4].textContent === "X" &&
      cells[5].textContent === "X") ||
    (cells[6].textContent === "X" &&
      cells[7].textContent === "X" &&
      cells[8].textContent === "X") ||
    (cells[0].textContent === "X" &&
      cells[3].textContent === "X" &&
      cells[6].textContent === "X") ||
    (cells[1].textContent === "X" &&
      cells[4].textContent === "X" &&
      cells[7].textContent === "X") ||
    (cells[2].textContent === "X" &&
      cells[5].textContent === "X" &&
      cells[8].textContent === "X") ||
    (cells[0].textContent === "X" &&
      cells[4].textContent === "X" &&
      cells[8].textContent === "X") ||
    (cells[2].textContent === "X" &&
      cells[4].textContent === "X" &&
      cells[6].textContent === "X")
  ) {
    document.getElementById("winner").textContent = "X wins!";
    console.log("x win");
  } else if (
    (cells[0].textContent === "O" &&
      cells[1].textContent === "O" &&
      cells[2].textContent === "O") ||
    (cells[3].textContent === "O" &&
      cells[4].textContent === "O" &&
      cells[5].textContent === "O") ||
    (cells[6].textContent === "O" &&
      cells[7].textContent === "O" &&
      cells[8].textContent === "O") ||
    (cells[0].textContent === "O" &&
      cells[3].textContent === "O" &&
      cells[6].textContent === "O") ||
    (cells[1].textContent === "O" &&
      cells[4].textContent === "O" &&
      cells[7].textContent === "O") ||
    (cells[2].textContent === "O" &&
      cells[5].textContent === "O" &&
      cells[8].textContent === "O") ||
    (cells[0].textContent === "O" &&
      cells[4].textContent === "O" &&
      cells[8].textContent === "O") ||
    (cells[2].textContent === "O" &&
      cells[4].textContent === "O" &&
      cells[6].textContent === "O")
  ) {
    document.getElementById("winner").textContent = "O wins!";
  } else if (
    cells[0].textContent !== "" &&
    cells[1].textContent !== "" &&
    cells[2].textContent !== "" &&
    cells[3].textContent !== "" &&
    cells[4].textContent !== "" &&
    cells[5].textContent !== "" &&
    cells[6].textContent !== "" &&
    cells[7].textContent !== "" &&
    cells[8].textContent !== ""
  ) {
    document.getElementById("winner").textContent = "Draw!";
  }
  if (
    document.getElementById("winner").textContent === "X wins!" ||
    document.getElementById("winner").textContent === "O wins!" ||
    document.getElementById("winner").textContent === "Draw!"
  ) {
    console.log("game over");
    for (let i = 0; i < everything.length; i++) {
      everything[i].addEventListener("click", clearBoard, true);
      console.log("clear");
    }
  }
}

function clearBoard() {
  cells[0].textContent = "";
  cells[1].textContent = "";
  cells[2].textContent = "";
  cells[3].textContent = "";
  cells[4].textContent = "";
  cells[5].textContent = "";
  cells[6].textContent = "";
  cells[7].textContent = "";
  cells[8].textContent = "";
  player = 0;
  document.getElementById("winner").textContent = "";
  console.log("cleared");
  for (let i = 0; i < everything.length; i++) {
    everything[i].removeEventListener("click", clearBoard, true);
  }
}
