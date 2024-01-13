const button = document.getElementById("logIn");
const access = document.getElementById("accessResult");
const allowedUsers = [
  "prova@email.com",
  "prova2@email.com",
  "esercizio@boolean.careers",
];

button.addEventListener("click", function () {
  let accessToken = false;
  const email = document.getElementById("emailAddress").value;
  console.log(email);

  for (let i = 0; i < allowedUsers.length; i++) {
    if (email == allowedUsers[i]) {
      accessToken = true;
    }
  }

  if (accessToken == true) {
    access.innerHTML = `
          <h1 class="text-success fw-bold ms-4">Accesso Consentito</h1>`;
  } else {
    access.innerHTML = `
          <h1 class="text-danger fw-bold ms-4">Accesso Negato</h1>`;
  }
});
