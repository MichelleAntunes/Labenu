const escondeSenha = (event) => {
  event.preventDefault();
  passwordInput.setAttribute("type", "password");
};

const light = document.querySelector(".light");
light.classList.remove("light");
light.classList.add("dark");

const passwordInput = document.getElementById("password");
