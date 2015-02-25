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
var circumference = calculatedCircumferenceOfCircle(radius)
console.log("The circumference of the circle is  " + circumference); //The result that will print to console.
