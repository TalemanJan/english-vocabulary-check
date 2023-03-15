

var q1=["Does she own a car?","Does she have a car?","Is she in possession of a car?"]
var q2=["He and I went to the store.","Him and I went to the store.","He went to the store with me."]
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

case "He and I went to the store.":
    document.getElementById("aaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"He and I went to the store.";

break;



      default:
        document.getElementById("aa").innerHTML="The answer is wrong " +" "+"here are some of the ways to write it :"+"<br>"+q1[0]+"<br>"+q1[1]+"<br>"+q1[2]; //could been done with creating an li 
        break;
    } 
  }

document.getElementById("aaa").innerHTML=" "

  let next=()=> {
// document.getElementById("aa").innerHTML=" "
document.getElementById("aaa").innerHTML="Correct it::  Me and him went to the store"


  }
  