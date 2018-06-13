$(document).ready(function(){
// Variables
var win = 0;
var loss = 0;
var currentScore;

var crystal1 = Math.floor(Math.random() * (11) + 1)
var crystal2 = Math.floor(Math.random() * (11) + 1)
var crystal3 = Math.floor(Math.random() * (11) + 1)
var crystal4 = Math.floor(Math.random() * (11) + 1)

// Reset Game function
function gameRestart() {
    randomNumber = Math.floor(Math.random() * (101) + 19);
    var crystal1 = Math.floor(Math.random() * (11) + 1)
    var crystal2 = Math.floor(Math.random() * (11) + 1)
    var crystal3 = Math.floor(Math.random() * (11) + 1)
    var crystal4 = Math.floor(Math.random() * (11) + 1)
    currentScore = 0;
}

// Write to DOM
$('#randomNum').html(randomNumber);
$('#score').html(currentScore);

















});
