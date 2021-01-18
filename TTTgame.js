var wins = 0;
var losses = 0;
var ties = 0;

function gameCheck() {
  for (x = 1; x < 4; x++) {
      var rowid = "";
      for (y = 1; y < 4; y++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "XXX" || rowid == "OOO"){
              return true;
          } 
  }

  for (y = 1; y < 4; y++) {
      var rowid = "";
      for (x = 1; x < 4; x++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "XXX" || rowid == "OOO"){
              return true;
          } 
  }

  rowid = "";
  for (x = 1; x < 4; x++) {
      var z = ""; z+= x; z+= 4-x;
      rowid += document.getElementById(z).innerHTML;
  }
  if (rowid == "XXX" || rowid == "OOO"){
          return true;
  } 

  rowid = "";
  for (x = 1; x < 4; x++) {
      var z = ""; z+= x; z+= x;
      rowid += document.getElementById(z).innerHTML;
  }
  if (rowid == "XXX" || rowid == "OOO"){
          return true;
  }

  return false;
}

function tie() {
  var boardid = "";
  for (x = 1; x < 4; x++) {
      for (y = 1; y < 4; y++) {
          var z = ""; z+= x; z+= y;
          boardid += document.getElementById(z).innerHTML;
      }
  }
  if (boardid.includes("_")) {false;}
  else {return true;}
}

function restart() {
  for (x = 1; x < 4; x++){
      for (y = 1; y < 4; y++) {
          var z = ""; z+= x; z+= y;
          document.getElementById(z).innerHTML = "_";
      }
  }
  document.getElementById("win").innerHTML = "";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      if (btnArray[x] !== undefined) {
          var elidd = btnArray[x].getAttribute('id');
          btnArray[x].setAttribute( "onClick", "javascript: myFunction(this.id);" );
      }
  }
  var goesFirst = Math.random();
  if (goesFirst < 0.5) {
      alert("Computer will go first!");
      computerTurn();
  }
  else {
      alert("You go first!");
  }
}

function myFunction(idd) {
  if (document.getElementById(idd).innerHTML == "_"){
      document.getElementById(idd).innerHTML = "X";
      if (gameCheck() == true) {
          wins++;
          winEnd();
      }
      else if (tie() == true) {
          ties++;
          tieEnd();
      }
      if (!gameCheck() && !tie()) {
          computerTurn(); 
      }
  }
}

function computerTurn() {
  if (computerWinH()) {
      losses++;
      loseEnd();
  }
  else if (computerWinV()) {
      losses++;
      loseEnd();
  }
  else if (computerWinD()) {
      losses++;
      loseEnd();
  }
  else if (computerDefenseH()) {
      if (tie() == true) {ties++; tieEnd();}
  }
  else if (computerDefenseV()) {
      if (tie() == true) {ties++; tieEnd();}
  }
  else if (computerDefenseD()) {
      if (tie() == true) {ties++; tieEnd();}
  }
  else {
      if (document.getElementById(22).innerHTML == "_") {
          document.getElementById(22).innerHTML = "O";
          var played = true;
      }
      if (!played && document.getElementById(13).innerHTML == "_") {
          document.getElementById(13).innerHTML = "O";
          var played = true;
      }
      if (!played && document.getElementById(31).innerHTML == "_") {
          document.getElementById(31).innerHTML = "O";
          var played = true;
      }
      if (!played && document.getElementById(33).innerHTML == "_") {
          document.getElementById(33).innerHTML = "O";
          var played = true;
      }
      if (!played && document.getElementById(11).innerHTML == "_") {
          document.getElementById(11).innerHTML = "O";
          var played = true;
      }
      if (!played) {
          outerloop:
          for (x = 1; x < 4; x++){
              for (y = 1; y < 4; y++) {
                  var z = ""; z+= x; z+= y;
                  if (document.getElementById(z).innerHTML == "_") {
                      document.getElementById(z).innerHTML = "O";
                      break outerloop;
                  }
              }
          }
      }
  }
  if (tie() == true) {
      ties++; 
      tieEnd();
  }
}

function winEnd() {
  document.getElementById("win").innerHTML = "You won!";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      btnArray[x].setAttribute( "onClick", "javascript: end();" );
  }
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}

function loseEnd() {
  document.getElementById("win").innerHTML = "You lost!";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      btnArray[x].setAttribute( "onClick", "javascript: end();" );
  }
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}

function tieEnd() {
  document.getElementById("win").innerHTML = "You tied!";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      btnArray[x].setAttribute( "onClick", "javascript: end();" );
  }
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}


function end() {
  var h = true;
}

function computerWinH() {
  for (x = 1; x < 4; x++) {
      var rowid = "";
      for (y = 1; y < 4; y++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "OO_"){
          var z = ""; z+= x; z+= 3;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
      else if (rowid == "O_O"){
          var z = ""; z+= x; z+= 2;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
      else if (rowid == "_OO"){
          var z = ""; z+= x; z+= 1;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
  }
  return false;
}
function computerWinV() {
  for (y = 1; y < 4; y++) {
      var rowid = "";
      for (x = 1; x < 4; x++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "OO_"){
          var z = ""; z+= 3; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
      else if (rowid == "O_O"){
          var z = ""; z+= 2; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
      else if (rowid == "_OO"){
          var z = ""; z+= 1; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
  }
  return false;
}
function computerWinD() {
  var rowid = "";
  for (x=1; x<4; x++) {
      var z = ""; z+=x; z+=x;
      rowid += document.getElementById(z).innerHTML;  
  }
  if (rowid == "OO_"){
      var z = "33";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 
  else if (rowid == "O_O"){
      var z = "22"; 
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else if (rowid == "_OO"){
      var z = "11";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 

  rowid = "";
  for (x=1; x<4; x++) { 
      var z = ""; z+= x; z+=(4-x);
      rowid += document.getElementById(z).innerHTML; 
  }

  if (rowid == "OO_"){
      var z = "31";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 
  else if (rowid == "O_O"){
      var z = "22";
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else if (rowid == "_OO"){
      var z = "13";
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else {
      return false;
  }
}

function computerDefenseH() {
  for (x = 1; x < 4; x++) {
      var rowid = "";
      for (y = 1; y < 4; y++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "XX_"){
          var z = ""; z+= x; z+= 3;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
      else if (rowid == "X_X"){
          var z = ""; z+= x; z+= 2;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
      else if (rowid == "_XX"){
          var z = ""; z+= x; z+= 1;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
  }
  return false;
}
function computerDefenseV() {
  for (y = 1; y < 4; y++) {
      var rowid = "";
      for (x = 1; x < 4; x++) {
          var z = ""; z+= x; z+= y;
          rowid += document.getElementById(z).innerHTML;
      }
      if (rowid == "XX_"){
          var z = ""; z+= 3; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
      else if (rowid == "X_X"){
          var z = ""; z+= 2; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          }
      else if (rowid == "_XX"){
          var z = ""; z+= 1; z+= y;
          document.getElementById(z).innerHTML = "O";   
          return true;
          } 
  }
  return false;
}
function computerDefenseD() {
  var rowid = "";
  for (x=1; x<4; x++) {
      var z = ""; z+=x; z+=x;
      rowid += document.getElementById(z).innerHTML;  
  }
  if (rowid == "XX_"){
      var z = "33";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 
  else if (rowid == "X_X"){
      var z = "22"; 
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else if (rowid == "_XX"){
      var z = "11";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 

  rowid = "";
  for (x=1; x<4; x++) { 
      var z = ""; z+= x; z+=(4-x);
      rowid += document.getElementById(z).innerHTML; 
  }

  if (rowid == "XX_"){
      var z = "31";
      document.getElementById(z).innerHTML = "O";   
      return true;
      } 
  else if (rowid == "X_X"){
      var z = "22";
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else if (rowid == "_XX"){
      var z = "13";
      document.getElementById(z).innerHTML = "O";   
      return true;
      }
  else {
      return false;
  }
}

function clearf() {
  console.log("ran");
  wins = 0;
  console.log("ran");
  losses = 0;
  ties = 0;
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
  console.log("ran");
}
