const userDice = document.getElementById("playerDice");
const cpuDice = document.getElementById("cpuDice");
const roll = document.getElementById("roll");
const result = document.getElementById("result");
let toggle = false;
let temp1;
let temp2;

roll.addEventListener("click", function () {
  gen1 = Math.floor(Math.random() * 6 + 1);
  console.log(gen1);
  gen2 = Math.floor(Math.random() * 6 + 1);
  console.log(gen2);
  if (toggle == false) {
    userDice.classList.replace("bi-dice-1-fill", `bi-dice-${gen1}-fill`);
    cpuDice.classList.replace("bi-dice-1", `bi-dice-${gen2}`);
    temp1 = gen1;
    temp2 = gen2;
    toggle = true;
  } else {
    userDice.classList.replace(`bi-dice-${temp1}-fill`, `bi-dice-${gen1}-fill`);
    cpuDice.classList.replace(`bi-dice-${temp2}`, `bi-dice-${gen2}`);
    temp1 = gen1;
    temp2 = gen2;
  }
  if (gen1 > gen2) {
    result.innerHTML = `<h2 class="display-3 fw-bold text-center text-success" id="result">HAI VINTO!</h2>`;
  } else if (gen1 < gen2) {
    result.innerHTML = `<h2 class="display-3 fw-bold text-center text-danger" id="result">HAI PERSO!</h2>`;
  } else {
    result.innerHTML = `<h2 class="display-3 fw-bold text-center text-warning" id="result">PAREGGIO!</h2>`;
  }
});
