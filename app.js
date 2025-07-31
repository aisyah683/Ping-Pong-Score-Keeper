const play = document.querySelector("#play");
const resetButton = document.querySelector("#reset");
const p1 = {
  score: 0,
  display: document.querySelector(".p1Display"),
  button: document.querySelector("#p1Button"),
};
const p2 = {
  score: 0,
  display: document.querySelector(".p2Display"),
  button: document.querySelector("#p2Button"),
};

function updateScores(player, opponent) {
  player.score += 1;
  if (player.score === Number(play.value)) {
    player.display.classList.add("text-success");
    opponent.display.classList.add("text-danger");
    player.button.disabled = true;
    opponent.button.disabled = true;
  }
  player.display.textContent = player.score;
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

function reset() {
  p1.score = 0;
  p2.score = 0;
  p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.display.classList.remove("text-success", "text-danger");
  p2.display.classList.remove("text-success", "text-danger");
  p1.button.disabled = false;
  p2.button.disabled = false;
}

play.addEventListener("change", reset);
resetButton.addEventListener("click", reset);
