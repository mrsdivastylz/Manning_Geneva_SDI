/**
 * Geneva Manning
 * 02/13/2015
 * Assignment: Expression Assignment
 */

//This program will keep track of the hours you work each day, when you enter the hours you work daily. You will be able to keep
//track of the total hours worked, regular and overtime.You will also know your pay for regular and overtime.

//Declare and define variables

var hoursPerDay = [Sun, Mon, Tues, Wed, Thur, Fri, Sat];// This is an example of an array holding information.
hoursPerDay[0] = prompt("How many hours did you work on Sunday?");//This prompts the user to enter how many hours they worked on Sunday.
hoursPerDay[1] = prompt("How many hours did you work on Monday?"); //This prompts the user to enter how many hours they worked on Monday.
hoursPerDay[2] = prompt("How many hours did you work on Tuesday?");//This prompts the user to enter how many hours they worked on Tuesday.
hoursPerDay[3] = prompt("How many hours did you work on Wednesday?");//This prompts the user to enter how many hours they worked on Wednesday.
hoursPerDay[4] = prompt("How many hours did you work on Thursday?");//This prompts the user to enter how many hours they worked on Thursday.
hoursPerDay[5] = prompt("How many hours did you work on Friday?");//This prompts the user to enter how many hours they worked on Friday.
hoursPerDay[6] = prompt("How many hours did you work on Saturday?");//This prompts the user to enter how many hours they worked on Saturday.

var payRate;
var totalHoursWorked;
var regularHoursWorked;
var overtimeHoursWorked;
var totalPay;
var regularPay;
var overtimePay;
var result;


