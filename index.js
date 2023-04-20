const llaves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

document.getElementById("result").style.display = "none";

const textoInput = document.querySelector("#txtarea-input");
const textoOutput = document.querySelector("#txtarea-output");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");

function encriptar(texto) {
  let nuevoTexto = "";

  for (let i = 0; i < texto.length; i++) {
    "aeiou".includes(texto[i])
      ? (nuevoTexto += llaves[texto[i]])
      : (nuevoTexto += texto[i]);
  }
  return nuevoTexto;
}

function desencriptar(texto) {
  nuevoTexto = texto;
  nuevoTexto = nuevoTexto.replace(/ai/g, "a");
  nuevoTexto = nuevoTexto.replace(/enter/g, "e");
  nuevoTexto = nuevoTexto.replace(/imes/g, "i");
  nuevoTexto = nuevoTexto.replace(/ober/g, "o");
  nuevoTexto = nuevoTexto.replace(/ufat/g, "u");
  return nuevoTexto;
}

function copiar() {
  let textoCopiado = textoOutput;
  textoCopiado.select();
  document.execCommand("copy");
}

btnEncriptar.addEventListener("click", function () {
  if (textoInput.value !== "") {
    document.getElementById("output").style.display = "none";
    document.getElementById("result").style.display = "flex";
    textoOutput.textContent = encriptar(textoInput.value);
  } else {
    document.getElementById("output").style.display = "flex";
    document.getElementById("result").style.display = "none";
  }
});

btnDesencriptar.addEventListener("click", function () {
  if (textoInput.value !== "") {
    document.getElementById("output").style.display = "none";
    document.getElementById("result").style.display = "flex";
    textoOutput.textContent = desencriptar(textoInput.value);
  } else {
    document.getElementById("output").style.display = "flex";
    document.getElementById("result").style.display = "none";
  }
});

btnCopiar.addEventListener("click", copiar);
