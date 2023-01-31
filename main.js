const inputButton = document.getElementById("buttons__input");
const outputButton = document.getElementById("buttons__output");
const inputArea = document.getElementById("input__text");
const outputArea = document.getElementById("output__text");

const input = inputArea.value;

var saveText;

inputButton.addEventListener("click", function codificar() {
  const input = inputArea.value;
  const arr = input.split("");
  saveText = arr.map((item) => {
    if (item === "a") {
      return (item = "enter");
    }
    if (item === "e") {
      return (item = "imes");
    }
    if (item === "i") {
      return (item = "ai");
    }
    if (item === "o") {
      return (item = "ober");
    }
    if (item === "u") {
      return (item = "ufat");
    }
    return item;
  });
  outputArea.value = saveText.join("");
  inputArea.value = "";
  console.log(saveText);
});

outputButton.addEventListener("click", function recodificar() {
  const arr = saveText.map((item) => {
    if (item === "enter") {
      return (item = "a");
    }
    if (item === "imes") {
      return (item = "e");
    }
    if (item === "ai") {
      return (item = "i");
    }
    if (item === "ober") {
      return (item = "o");
    }
    if (item === "ufat") {
      return (item = "u");
    }
    return item;
  });
  inputArea.value = arr.join("");
  outputArea.value = "";
});
