$(document).ready(function(){
// Variables
var win = 0;
var loss = 0;
var currentScore;

var cryst1 = Math.floor(Math.random() * (11) + 1)
var cryst2 = Math.floor(Math.random() * (11) + 1)
var cryst3 = Math.floor(Math.random() * (11) + 1)
var cryst4 = Math.floor(Math.random() * (11) + 1)

// Reset Game function
function gameRestart() {
    randomNumber = Math.floor(Math.random() * (101) + 19);
    var cryst1 = Math.floor(Math.random() * (11) + 1)
    var cryst2 = Math.floor(Math.random() * (11) + 1)
    var cryst3 = Math.floor(Math.random() * (11) + 1)
    var cryst4 = Math.floor(Math.random() * (11) + 1)
    currentScore = 0;
}

gameRestart();

// Write to DOM
$('#randomNum').html(randomNumber);
$('.current').html(currentScore);


$(".crystal1").attr("value", cryst1);
$(".crystal2").attr("value", cryst2);
$(".crystal3").attr("value", cryst3);
$(".crystal4").attr("value", cryst4);

var grab = $(this).attr("value");
















});
