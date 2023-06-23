var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

var randomImageSource2 = "images/"+ randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);
// var arr=document.firstElementChild.lastElementChild.getElementsByClassName("dice");

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// if (randomNumber1 === 1) {
//     arr[0].setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//     arr[0].setAttribute("src","images/dice2.png");
// }
// else if (randomNumber1 === 3) {
//     arr[0].setAttribute("src","images/dice3.png");
// }
// else if (randomNumber1 === 4) {
//     arr[0].setAttribute("src","images/dice4.png");
// }
// else if (randomNumber1 === 5) {
//     arr[0].setAttribute("src","images/dice5.png");
// }
// else  {
//     arr[0].setAttribute("src","images/dice6.png");
// }

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// if (randomNumber2 === 1) {
//     arr[1].setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2 === 2) {
//     arr[1].setAttribute("src","images/dice2.png");
// }
// else if (randomNumber2 === 3) {
//     arr[1].setAttribute("src","images/dice3.png");
// }
// else if (randomNumber2 === 4) {
//     arr[1].setAttribute("src","images/dice4.png");
// }
// else if (randomNumber2 === 5) {
//     arr[1].setAttribute("src","images/dice5.png");
// }
// else  {
//     arr[1].setAttribute("src","images/dice6.png");
// }


if(randomNumber1>randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Tie"; 
}



