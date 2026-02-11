// 1.
var today = new Date();

var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is: " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour-12 : hour;

console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 

// 2.
function print_current_page() {
    window.print();
} 

// 3.
var today = new Date();

var dd = today.getDate();

var mm = today.getMonth() +1;

var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
} 


today = yyyy + '-' + mm + '-' + dd;
console.log(today);

// 4.
let side1 = 5;
let side2 = 6;
let side3 = 7;

let s = (side1 + side2 + side3) / 2;

let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(Math.round(area * 100) / 100);

// 5.
var text = "w3resource";
var count = 0;
var maxRotations = text.length +1;

var rotation = setInterval(function () {
    console.log(text);
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    count++;
    
    if (count >= maxRotations) {
        clearInterval(rotation);

    }

}, 100);

// 6.
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
