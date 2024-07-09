function cryptText() {
  removeImg();
  removeTitle();
  let fieldValue = document.getElementById("inputText").value;
  document.getElementById("criptContent").innerHTML =
    replaceStringToCryptKey(fieldValue);
    document.getElementById("inputText").value = "";
}

function decryptText() {
  let fieldValue = document.getElementById("inputText").value;
  document.getElementById("criptContent").innerHTML =
    replaceCryptKeyToString(fieldValue);
    document.getElementById("inputText").value = "";
}

function replaceStringToCryptKey(fieldValue) {
  let newString = fieldValue
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  return newString;
}

function replaceCryptKeyToString(fieldValue) {
  let newString = fieldValue
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return newString;
}

function removeImg() {
  document.getElementById("imgBoy").style.visibility = "hidden";
}

function removeTitle() {
  document.getElementById("criptContentMessageTitle").innerHTML = "";
}

function copyToKeyboard(){
    let copyText = document.getElementById("criptContent");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(copyText.value);
    document.getElementById("inputText").value = "";
}