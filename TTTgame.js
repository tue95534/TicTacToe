var wins = 0;
var losses = 0;
var ties = 0;


function win() {
    for (x = 1; x < 4; x++) {
        var rowid = "";
        for (y = 1; y < 4; y++) {
            var z = ""; z+= x; z+= y;
            rowid += document.getElementById(z).innerHTML;
        }
        if (rowid == "XXX"){
                return true;
            } 
    }

    for (y = 1; y < 4; y++) {
        var rowid = "";
        for (x = 1; x < 4; x++) {
            var z = ""; z+= x; z+= y;
            rowid += document.getElementById(z).innerHTML;
        }
        if (rowid == "XXX"){
                return true;
            } 
    }

    rowid = "";
    for (x = 1; x < 4; x++) {
        var z = ""; z+= x; z+= 4-x;
        rowid += document.getElementById(z).innerHTML;
    }
    if (rowid == "XXX"){
            return true;
    } 

    rowid = "";
    for (x = 1; x < 4; x++) {
        var z = ""; z+= x; z+= x;
        rowid += document.getElementById(z).innerHTML;
    }
    if (rowid == "XXX"){
            return true;
    }
    return false;
}

function lose() {
    for (x = 1; x < 4; x++) {
        var rowid = "";
        for (y = 1; y < 4; y++) {
            var z = ""; z+= x; z+= y;
            rowid += document.getElementById(z).innerHTML;
        }
        if (rowid == "OOO"){
                return true;
            } 
    }

    for (y = 1; y < 4; y++) {
        var rowid = "";
        for (x = 1; x < 4; x++) {
            var z = ""; z+= x; z+= y;
            rowid += document.getElementById(z).innerHTML;
        }
        if (rowid == "OOO"){
                return true;
            } 
    }

    rowid = "";
    for (x = 1; x < 4; x++) {
        var z = ""; z+= x; z+= 4-x;
        rowid += document.getElementById(z).innerHTML;
    }
    if (rowid == "OOO"){
            return true;
    } 

    rowid = "";
    for (x = 1; x < 4; x++) {
        var z = ""; z+= x; z+= x;
        rowid += document.getElementById(z).innerHTML;
    }
    if (rowid == "OOO"){
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
        document.getElementById("theAlert").innerHTML = "COMPUTER WILL GO FIRST!";
        document.getElementById("alertbox").style.display = 'block';
    
        setTimeout(function() { 
            document.getElementById("alertbox").style.display = 'none';
        }, 1000);
        computerTurn();
    }
    else {
        document.getElementById("theAlert").innerHTML = "YOU GO FIRST!";
        document.getElementById("alertbox").style.display = 'block';
    
        setTimeout(function() { 
            document.getElementById("alertbox").style.display = 'none';
        }, 1000);
    }
    }

function myFunction(idd) {
    if (document.getElementById(idd).innerHTML == "_"){
        document.getElementById(idd).innerHTML = "X";
        if (win() == true) {
            wins++;
            winEnd();
        }
        else if (tie() == true) {
            ties++;
            tieEnd();
        }
        if (!(win() || lose()) && !tie()) {
            // var classlength = document.getElementsByClassName("pp").length;
            // var boardlist = document.getElementsByClassName("pp");
            var btnArray = document.getElementsByClassName("pp");
            for (x = 0; x < btnArray.length; x++) {
                btnArray[x].setAttribute( "onClick", "javascript: end();" );
                console.log(btnArray[x].getAttribute("onclick"));
            }
            setTimeout(computerTurn, 300);
        }

    }
}

function computerTurn() {
    var slider = document.getElementById("slider");
    console.log(slider.value);
    var played = false;

    if (slider.value == 3) {
        if (computerWinH()) {
            losses++;
            loseEnd();
            played = true;
        }
        else if (computerWinV()) {
            losses++;
            loseEnd();
            played = true;
        }
        else if (computerWinD()) {
            losses++;
            loseEnd();
            played = true;
        }
    }

    if (slider.value > 1 && !played) {
        if (computerDefenseH()) {
            computerEnd();
            played = true;
        }
        else if (computerDefenseV()) {
            computerEnd();
            played = true;
        }
        else if (computerDefenseD()) {
            computerEnd();
            played = true;
        }
        else if (specialMoves()) {
            computerEnd();
            played = true;
        }
    }

    if (!played) {
        if (document.getElementById(22).innerHTML == "_") {
            document.getElementById(22).innerHTML = "O";
            var played = true;
            computerEnd();
        }
        else if (document.getElementById(13).innerHTML == "_") {
            document.getElementById(13).innerHTML = "O";
            played = true;
            computerEnd();
        }
        else if (document.getElementById(31).innerHTML == "_") {
            document.getElementById(31).innerHTML = "O";
            played = true;
            computerEnd();
        }
        else if (document.getElementById(33).innerHTML == "_") {
            document.getElementById(33).innerHTML = "O";
            played = true;
            computerEnd();
        }
        else if (document.getElementById(11).innerHTML == "_") {
            document.getElementById(11).innerHTML = "O";
            played = true;
            computerEnd();
        }
    }

    if (!played) {
        outerloop:
        for (x = 1; x < 4; x++){
            for (y = 1; y < 4; y++) {
                var z = ""; z+= x; z+= y;
                if (document.getElementById(z).innerHTML == "_") {
                    document.getElementById(z).innerHTML = "O";
                    computerEnd();
                    break outerloop;
                }
            }
        }
    }
    var btnArray = document.getElementsByClassName("pp");
    for (x = 0; x < btnArray.length; x++) {
        btnArray[x].setAttribute( "onClick", "javascript: myFunction(this.id);" );
    }
}

function computerEnd() {
    if (lose() == true) {
        losses++;
        loseEnd();
    }
    else if (win() == true) {
        wins++;
        winEnd();
    }
    else if (tie() == true) {
        ties++; 
        tieEnd();
    }
}

function winEnd() {
  document.getElementById("win").innerHTML = "YOU WON!";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      btnArray[x].setAttribute( "onClick", "javascript: end();" );
  }
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}

function loseEnd() {
  document.getElementById("win").innerHTML = "YOU LOST!";
  var btnArray = document.getElementsByClassName("pp");
  for (x = 0; x < btnArray.length; x++) {
      btnArray[x].setAttribute( "onClick", "javascript: end();" );
  }
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}

function tieEnd() {
  document.getElementById("win").innerHTML = "YOU TIED!";
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

function specialMoves() {
    var letter11 = document.getElementById("11").innerHTML;
    var letter12 = document.getElementById("12").innerHTML;
    var letter13 = document.getElementById("13").innerHTML;
    var letter21 = document.getElementById("21").innerHTML;
    var letter31 = document.getElementById("31").innerHTML;
    var letter32 = document.getElementById("32").innerHTML;
    var letter33 = document.getElementById("33").innerHTML;

    if (letter13 == "X" && letter31 == "X") {
        if (letter11 == "_" && letter12 == "_" && letter21 == "_") {
            document.getElementById("12").innerHTML = "O";
            return true;
        }
    }

    if (letter11 == "X" && letter33 == "X") {
        if (letter21 == "_" && letter31 == "_" && letter32 == "_") {
            document.getElementById("32").innerHTML = "O";
            return true;
        }
    }

    if (letter21 == "X" && letter33 == "X") {
        if (letter21 == "_" && letter31 == "_" && letter32 == "_") {
            document.getElementById("32").innerHTML = "O";
            return true;
        }
    }
}

function clearf() {
  wins = 0;
  losses = 0;
  ties = 0;
  theScore = wins + "-" + losses + "-" + ties;
  document.getElementById("score").innerHTML = theScore;
}
