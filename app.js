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
        case "" :
document.getElementById("aa").innerHTML="please give an answer "


break;

   default:
        document.getElementById("aa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+ "1:"+" " +q1[0]+"<br>"+"2:"+" " +q1[1]+"<br>"+"3:"+" "  +q1[2]; //could been done with creating an li 
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
        document.getElementById("aaa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+"1:" +" "+q2[0]+"<br>"+"2:"+" "+q2[1]+"<br>"+"3:"+" "+q2[2]; //could been done with creating an li 
        break;
    } 



}




let next = () => {
    document.getElementById("aaa").innerHTML = "Correct it: Me and him went to the store";
    document.getElementById("ans-btn").onclick = checkk;
    document.getElementById("next-btn").remove();
    document.getElementById("try-agn").style.visibility="visible";
    document.getElementById("try-agn").innerHTML="Try again"
    

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
        document.getElementById("aaaa").innerHTML="The answer is wrong " +" "+"here are some of the correct ways to write it :"+"<br>"+"1:"+" "+q2[0]+"<br>"+"2:"+" "+q2[1]+"<br>"+" 3: "+q2[2]; //could been done with creating an li 
        break;
    } 

}

  let nexttt = () => {

    document.getElementById("aaaa").innerHTML = "Correct it: They're going to the party too.";
     document.getElementById("ans-btn").onclick=checkkk;
     document.getElementById("next-btn").onclick=next;
     let confirmm=confirm("Are you sure you want to move to the nest question")
     if(confirmm==true){
nextt();

     }
else{
document.getElementById("aaaa").innerHTML=" ";
document.getElementById("ans-btn").onclick=check;
document.getElementById("next-btn").onclick=nexttt;


}

  }
  

  let tryagain=()=>{







  }
  
  


  