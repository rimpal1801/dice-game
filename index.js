var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomdice="dice"+ randomnumber1 +".png";
var randomimagesource= "images/" + randomdice ;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimagesource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomimagesource2= "images/dice" + randomnumber2 +".png" ;
 document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);

if(randomnumber1 > randomnumber2){
  document.querySelector("h2").innerHTML="player1 wins🎉";
}
else if(randomnumber1 < randomnumber2){
  document.querySelector("h2").innerHTML="player2 wins🎉";
}

else {
  document.querySelector("h2").innerHTML="draw🎊";
}
