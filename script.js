// theme change testing github
//
const bodyTag = document.getElementsByTagName("body")[0];
const charTag = document.getElementById("select-theme-h2");
const radioTag = document.getElementsByTagName("label");
const partTag = document.getElementsByClassName("calc-part");


function changeToDefaultTheme() {
  bodyTag.style.backgroundColor = "#ffb6c1";
  charTag.style.color = "#000000";
  for(let i=0; i<radioTag.length; i++) {
    radioTag[i].style.color = "#000000"
  }
  for(let i=0; i<partTag.length; i++) {
    partTag[i].style.backgroundColor = "#00C7FF"
  }
}

function changeToLightTheme() {
  bodyTag.style.backgroundColor = "#ffffff";
  charTag.style.color = "#000000";
  for(let i=0; i<radioTag.length; i++) {
    radioTag[i].style.color = "#000000"
  }
  for(let i=0; i<partTag.length; i++) {
    partTag[i].style.backgroundColor = "#FFFFFF"
  }
}

function changeToDarkTheme() {
  
  bodyTag.style.backgroundColor = "#121212";
  charTag.style.color = "#ffffff";
  for(let i=0; i<radioTag.length; i++) {
    radioTag[i].style.color = "#000000"
  }
  for(let i=0; i<partTag.length; i++) {
    partTag[i].style.backgroundColor = "#525A5C"
  }
}

changeToDefaultTheme();
//
//theme change end


//calculator functions
//
let var1 = document.getElementById("entryText");
let var2 = document.getElementById("entryText2");
let resultVar = document.getElementById("result-box");
let dictHistory = {};


function getOpp() {
  let oppRadio = document.getElementsByName('opp');
  let operand = null;

  for (let i = 0, length = oppRadio.length; i < length; i++) {
    if (oppRadio[i].checked) {
      let operand = oppRadio[i].value;
      return operand;
    }
  }

}


function calculate(firstIn, secondIn, oppIn) {
  first = Number.parseFloat(firstIn);
  second = Number.parseFloat(secondIn);
  if(oppIn == "+") {
    return first + second;
  }
  if(oppIn == "-") {
    return first - second;
  }
  if(oppIn == "*") {
    return first * second;
  }
  if(oppIn == "/") {
    return first / second;
  }
  else{
    return null
  }
}

function updateCalc() {
  let x = var1.value;
  let y = var2.value;
  let o = getOpp();
  let result = calculate(x, y, o);
  if(isNaN(result) || x==null || y==null || x==0 && o=="/" && !isNaN(result) || isNaN(x) || isNaN(y) || Number(x)==NaN || Number(y)==NaN){
    document.getElementById("result-box").value="UND";
  }
  else{
    document.getElementById("result-box").value=result;
    if(result == NaN) {
      document.getElementById("history-box").value=null;
    }
    else {
      dictHistory[x+o+y] = result;
      dictKey = x+o+y
      dictValue = dictHistory[x+o+y];
      document.getElementById("history-box").value=dictKey+" = "+dictValue;
      disableAns(false);
    }
  }
}

function useAnswer() {
  if(resultVar.value!="UND" && resultVar.value!=null) {
    var1.value=resultVar.value;
    var2.value="";
    var2.focus();
    disableAns(true);
  }
  
}

function disableAns(booIn) {
  if(booIn == true) {
    document.getElementById("ans-button").disabled = true;
  }
  else {
    document.getElementById("ans-button").disabled = false;
  }
}

function clearDisplay() {
  var1.value = "";
  var2.value = "";
  resultVar.value = "";
  document.getElementById("history-box").value = "";
  var1.focus();
}

//button commands
//
let submitButton = document.getElementById("submit");
submitButton.onclick = function(){updateCalc()}

let ansButton = document.getElementById("ans-button");
ansButton.onclick = function(){useAnswer()}
disableAns(true);


let clrButton = document.getElementById("clear-button");
clrButton.onclick = function(){clearDisplay()}
//
//button commands end


//keybinds
//
window.addEventListener("keydown", checkEnterKeyPress, false);
function checkEnterKeyPress(key) {
  if(key.keyCode == "13") {
    updateCalc();
  }
}
//
//keybinds end

document.getElementById("default-theme-button").addEventListener("click", changeToDefaultTheme);
document.getElementById("light-theme-button").addEventListener("click", changeToLightTheme);
document.getElementById("dark-theme-button").addEventListener("click", changeToDarkTheme);


//finished and testing github




