/**
 * Geneva Manning
 * 02/09/2015
 * Assignment: Expression Worksheet
 */

//Problem Dog Years
//Conversion from Sparky human years to dog years

//First declare variables
var sparkyAge;
var dogYears;
var result;
//define the variables
sparkyAge = 3; // The age sparky is in human years
prompt("How old is Sparky in human years?"); //This is the prompt that asks users how old Sparky is in human years.
dogYears = sparkyAge * 7; // This is how the expression is calculated to answer how old Sparky is in dog years
result = ("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years."); //This is the results from calculation from human years to dog years.
alert(result); //This is the calculation of what the user sees on their screen.
console.log(result); //This is what is logged into the console