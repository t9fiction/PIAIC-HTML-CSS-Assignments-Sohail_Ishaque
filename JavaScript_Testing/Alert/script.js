// var username = "Sohail";

// // username = "null";

// // alert(username);


// var var1 = 2;
// var var2 = 3;

// var result = "5" * "34";

// console.log(result);
// document.write("<h3>Hellow World</h3>");

// var species = prompt("What is your Name", "Sohail");

// console.log("name",typeof("name"))

// document.write("The Species is "+species);

var cities = ["Lhr", "Khi", "Isb", "Psh", "Qta"];

function addCity() {
    var city = prompt("Enter the City");
    cities.push(city);
}

function deleteCity() {
    // var city = prompt("Enter the City");
    cities.pop();
}

function displayCities() {
    for (var i = 0; i < cities.length; i++) {
        console.log("Cities are " + cities[i]);
    }
}

function searchCity() {
    var sCity = prompt("Enter the City to search");
    var matchFound = "no";
    for (var i = 0; i < cities.length; i++) {
        if (sCity === cities[i]) {

            matchFound = "yes";
            break;
        }
    }
    if (matchFound === "yes") {
        console.log(sCity + " City found");
    } else {
        console.log("City not found");
    }
}

// __________ 2dimensional array _____________-

var firstName = ["Ali", "Faisal", "Latif"];


var castName = ["Rayeen", "Dogar"];
var fullName = [];
function displayFull() {
    for (let i = 0; i < firstName.length; i++) {
        for (let j = 0; j < castName.length; j++) {
            fullName.push([firstName[i] + " " + castName[j]]);
            console.log("Name : " + firstName[i] + " " + castName[j]);
        }
    }
}

function displayFullName() {
    for (let x = 0; x < fullName.length; x++) {
        console.log("Full Names are : " + fullName[x]);
    }
}

// __________________ Split _______________

function splitArray() {

    var inputArray = prompt("Enter the Word to split");

    var splittedArray=inputArray.split("");
    console.log("Splitted Array : "+splittedArray);
}

// __________________ Dice _______________

function throwDice(){
    var inputDice = (Math.random() * 5) + 1;
    console.log("Dice num: "+ Math.round(inputDice));
}

// ________________ ParseInt ______________

function pInt(){
    var inputString = prompt("Enter the number to be converted");
    var cInt = parseInt(inputString);
    console.log(10+inputString);
    console.log(10+cInt);
}

// _________________ ParseFloat ___________________

function pFloat(){
    var inputString1 = prompt("Enter float number to be converted");
    var cFlt = parseFloat(inputString1);
    console.log(10+inputString1);
    console.log(10+cFlt);
    console.log(num3);
}

// _________________ Converting to Number ___________________

function numFloat(){
    var inputString2 = prompt("Enter float number to be converted");
    num3 = Number(inputString2); // ____________-using Number instead of parseFloat
    console.log(inputString2+10);
    console.log(num3+10);
}

// _________________ type of ___________________

function ctypeOf(){
    inputString3 = prompt("Enter float number to be converted");
    num4 = typeof(inputString3);
    console.log(num4);
}