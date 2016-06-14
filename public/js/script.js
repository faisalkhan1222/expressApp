
function GenerateRandom(){
var updateResult = document.getElementById("results");

var number =  Math.floor((Math.random() * 200) + 1);

if(number < 100){

updateResult.innerHTML=("<h1>Your Number is: "+ number +" </h1> <h3> You win :)  </h3>");
console.log("You win :) ");1
}
else{

  updateResult.innerHTML=("<h1> Your Number is: "+ number +" </h1> <h3> You lost :(  </h3>");

  console.log("You lost :( ");

}

}
