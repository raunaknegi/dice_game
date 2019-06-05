var number1=Math.floor(Math.random() *6)+1;
var random_num1="dice"+number1+ ".png";

var dice_image1 = "images/" + random_num1;

var image_1=document.querySelector(".dice_1").setAttribute("src",dice_image1);

var number2=Math.floor(Math.random() *6)+1;
var random_num2="dice"+number2+ ".png";

var dice_image2 = "images/" + random_num2;

var image_2=document.querySelector(".dice_2").setAttribute("src",dice_image2);

if(number1>number2)
{
    document.querySelector(".header").innerHTML="Player 1 wins!";
}
else if(number1<number2)
{
    document.querySelector(".header").innerHTML="Player 2 wins!";
}
else
{
    document.querySelector(".header").innerHTML="Draw!";
}