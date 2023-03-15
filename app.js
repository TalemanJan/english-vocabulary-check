
var q1=["Does she own a car?","Does she have a car?","Is she in possession of a car?"]

function check(){
    var inp_1 = document.getElementById("inp-1").value;
    switch (inp_1) {
      case "Is she in possession of a car?":
        document.getElementById("aa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Is she in possession of a car?"+"]";          
        break;
      case "Does she have a car?":
        document.getElementById("aa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she have a car?";
        break;
      case "Does she own a car?":
        document.getElementById("aa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she own a car?";
        break;
      default:
        document.getElementById("aa").innerHTML="That's wrong" +" "+"here are the correct answers:"+"<br>"+q1[0]+"<br>"+q1[1]; //could been done with creating an li 
        break;
    } 
  }






  