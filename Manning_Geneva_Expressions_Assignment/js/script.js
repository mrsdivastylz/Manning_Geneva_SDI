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
payRate = prompt("What is your pay rate by the hour");
var totalHoursWorked;
totalHoursWorked = hoursPerDay[0] + hoursPerDay[1] + hoursPerDay[2] + hoursPerDay[3] + hoursPerDay[4] + hoursPerDay[5] + hoursPerDay[6];
var regularHoursWorked;
regularHoursWorked = prompt("How many regular hours did you work?");
var overtimeHoursWorked;
overtimeHoursWorked = totalHoursWorked - 40;
var totalPay;
totalPay = regularPay + overtimePay;
var regularPay;
regularPay = payRate * regularHoursWorked;
var overtimePay;
overtimePay = regularPay + (regularPay / 2);

result =("You have worked a total of " + totalHoursWorked + " hours, " + regularHoursWorked + " regular hours and " +
overtimeHoursWorked + " overtime hours.  " + " Your regular pay is " + regularPay + " and your overtime pay is " + overtimePay +
", which gives you a total pay of " + totalPay + ".");

alert(result);
console.log(result);






