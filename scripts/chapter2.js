/*
    Student Name: Blake Prescott
    File Name: chapter2.js
    Date: April 15, 2025
*/

var greeting = "Hi ";
var name = "(insert user name here)";
var message = " if you wish to submit a lineup, please submit the form below";

var welcome = greeting + name + message;

/*Assigns text content of greeting div to welcome variable*/
var el = document.getElementById('greeting');
el.textContent = welcome;