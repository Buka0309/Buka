var isGameOver;
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();
function initGame() {
  isGameOver = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  window.document.getElementById("score-0").textContent = 0;
  window.document.getElementById("score-1").textContent = 0;
  window.document.getElementById("current-0").textContent = 0;
  window.document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // Шооны зургийг веб дээр гаргах
    diceDom.style.display = "block";
    // Шооны зураг буусан тоотой адил буух
    diceDom.src = "dice-" + diceNumber + ".png";
    // Тоглогчийн ээлжийн оноог өөрчилнө.
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isGameOver = false;
      document.getElementById("name-" + activePlayer).textContent =
        "Yeah, WINNER";
      document
        .querySelector(".player-" + activePlayer + "- panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "- panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. New game товчийг дарна уу.");
  }
});
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", initGame);
