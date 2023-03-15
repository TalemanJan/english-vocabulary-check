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

   default:
        document.getElementById("aa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+q1[0]+"<br>"+q1[1]+"<br>"+q1[2]; //could been done with creating an li 
        break;
    } 
  }


function checkk(){
    var inp_1 = document.getElementById("inp-1").value;
    switch (inp_1) {
      case "He and I went to the store.":
        document.getElementById("aaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Is she in possession of a car?"+"]";          
        break;
      case "Him and I went to the store.":
        document.getElementById("aaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she have a car?";
        break;
      case "He went to the store with me.":
        document.getElementById("aaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she own a car?";
        break;

   default:
        document.getElementById("aaa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+q2[0]+"<br>"+q2[1]+"<br>"+q2[2]; //could been done with creating an li 
        break;
    } 



}




let next = () => {
    document.getElementById("aaa").innerHTML = "Correct it: Me and him went to the store";
    document.getElementById("ans-btn").onclick = checkk;
  }

function checkkk(){
    var inp_1 = document.getElementById("inp-1").value;
    switch (inp_1) {
      case "He and I went to the store.":
        document.getElementById("aaaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Is she in possession of a car?"+"]";          
        break;
      case "Him and I went to the store.":
        document.getElementById("aaaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she have a car?";
        break;
      case "He went to the store with me.":
        document.getElementById("aaaa").innerHTML = "Excellent work thats the correct answer"+" "+"[" +"Does she own a car?";
        break;

   default:
        document.getElementById("aaaa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+q2[0]+"<br>"+q2[1]+"<br>"+q2[2]; //could been done with creating an li 
        break;
    } 

}

  let nexttt = () => {
  var abc="hello"
    document.getElementById("aaaa").innerHTML = "Correct it: They're going to the party too.";
     document.getElementById("ans-btn").onclick=checkkk;
     document.getElementById("next-btn").onclick=next;
  }
  
  
  


  