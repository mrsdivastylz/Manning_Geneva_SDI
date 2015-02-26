alert("JavaScript Works");
/**
 * Geneva Manning
 * 02/25/2015
 * Assignment: Functions Worksheet
 */

//Circumference
//Calculate the circumference of a circle.

//Variables
var radius = 5;                             //This is the radius of a circle
var pi = 3.14;                              // This is the pi of the circle

//Parameters for function
function calculatedCircumferenceOfCircle(radius) //defining the function name and setting the parameter
{
    var circumference;                       //declaring my variable for the function.
    circumference = 3.14 * (radius * 2); // This is the code that the function will run.

    return circumference;               // This is how I return the circumference back to the function.
}
var circumference = calculatedCircumferenceOfCircle(radius)//This is where I invoke my function.
console.log("The circumference of the circle is  " + circumference); //The result that will print to console.

//Stung
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.

//variables

var victimWeight = prompt("Please enter a number to that will represent how many lbs the animal is.");//prompt for user to put in a weight for animals.
var beeStings = 8.666666667;            //number of bee stings it take per pound to kill a animal.

//Parameters for function

function beeStingsNeeded(victimWeight)
{
 var totalStings = 8.666666667 * victimWeight; 
}
