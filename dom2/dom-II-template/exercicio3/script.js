const paragrafo = document.getElementById("mensagem");
const checaCaps = (event) => {
  if (event.shiftKey) {
    paragrafo.innerHTML = `Atenção: Segurando Schift`;
  } else {
    paragrafo.innerHTML = ``;
  }
};
