/**
 * Geneva Manning
 * 02/09/2015
 * Assignment: Expression Worksheet
 */

//Problem Dog Years
//Conversion from Sparky human years to dog years
/*
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
*/
// Problem Slice of Pie Pt 1
//Calculating total slices of pie between people at a party

//Declaring the variables
var slicesPerPizza;
var peopleAtParty;
var pizzasOrdered;
var pizzaPerPerson;
var result;

//Defining the variables
slicesPerPizza = 10; //This is how many slices of pizza in a box.
prompt("How many slices per pizza?"); //This is the prompt that the users see to answer the question.
peopleAtParty = 12; // This is the number of people at the party.
prompt("How many people at party?"); //This is the prompt that users see to answer the question.
pizzasOrdered = 3; //This is how many pizzas was ordered.
prompt("How many pizzas was ordered?"); //This is the prompt that asks users how many pizzas was ordered.
pizzaPerPerson = slicesPerPizza * pizzasOrdered / peopleAtParty; //This is how the expression is calculated.
result = ("Each person ate " + pizzaPerPerson + " slices of pizza at the party"); //This is the result from the variables.
alert(result);//This is the result to the solution and this is what the user sees.
console.log(result);//This is what is logged into the console.