const userDice = document.getElementById("playerDice");
const cpuDice = document.getElementById("cpuDice");

userDice.addEventListener("click", function () {
  gen1 = Math.floor(Math.random() * 6 + 1);
  console.log(gen1);
  gen2 = Math.floor(Math.random() * 6 + 1);
  console.log(gen2);

  userDice.classList.replace("bi-dice-1-fill", `bi-dice-${gen1}-fill`);
  cpuDice.classList.replace("bi-dice-1", `bi-dice-${gen2}`);

  setTimeout(() => {
    if (gen1 > gen2) {
      alert("HAI VINTO!");
    } else if (gen1 < gen2) {
      alert("HAI PERSO!");
    } else {
      alert("PAREGGIO!");
    }
    userDice.classList.replace(`bi-dice-${gen1}-fill`, "bi-dice-1-fill");
    cpuDice.classList.replace(`bi-dice-${gen2}`, "bi-dice-1");
  }, 500);
});
