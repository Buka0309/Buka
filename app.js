// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчдын оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй,1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

//Тоглоом эхлэхэд бэлдье
window.document.getElementById("score-0").textContent = 0;
window.document.getElementById("score-1").textContent = 0;
window.document.getElementById("current-0").textContent = 0;
window.document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг веб дээр гаргах
  diceDom.style.display = "block";
  // Шооны зураг буусан тоотой адил буух
  diceDom.src = "dice-" + diceNumber + ".png";
  // Тоглогчийн ээлжийн оноог өөрчилнө.
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    // activePlayer = 1;
    // } else {
    // activePlayer = 0;
  }
});
