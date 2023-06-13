/* 
What is JSON:
    ==> JSON stands for JavaScript Objects Notation
    ==> JSON is lightweight data interchange format
    ==> JSON language is independent
    ==> JSON is self-describing and easy to understand. 
JSON is a format for storing and transporting data. 
JSON is often used when data is sent from server to a web page. 
JSON syntax Rules: 
    ==> Data is name/value pairs
    ==> Data is seperated by commas,
    ==> Curly braces hold objects {}
    ==> square brackets hold arrays[]
*/

//1) JSON Data: Json data is written as name/value pairs, just like JS objects properties. 
//A name/value pairs consist of name (in double quotes), fllowed by a colon, followed by value

// "First Name": "John", "Last Name": "Wick";  

//2) JSON Objects: Objecst are written in {}, just like JS JSON can contain multiple name/value pairs
/*
{
    "FName":"John", 
    "lName":"Wick"
}
*/

//3) JSON Arrays: [], Just like JS arrays contains objects
/*
"Person" : [
    '{"FName":"John", "lName":"Wick"}', 
    '{"FName":"Yener", "lName":"Celikbag"}',
    '{"FName":"Leila", "lName":"NLN"}'​
]
*/

//Converting JSON text to JS objects: 
//Step1: create JS string that contain JSON syntax: 
let JsonText = '{"Employee": ['+
'{"FName":"John", "lName":"Wick"},'+
'{"FName":"Yener", "lName":"Celikbag"},'+
'{"FName":"Leila", "lName":"NLN"}]}'; 

//Step2:  Use the JS built-in  function JSON.parse() to convert the JSON text into JS object.
const objFromJSON = JSON.parse(JsonText);   //we JSON.parse() when we received data, 
console.log(objFromJSON); 

//Step3: USe new JS Object in your JS page to handle data: 
let empl1 = objFromJSON.Employee[1].FName + " " + objFromJSON.Employee[1].lName; 
console.log(empl1); //Yener Celikbag

//----------------------------------------------------------

//Example: JSON object: (when post data)
//Employee JS objects
const Employee = [ 
    {
        fName: "John",
        lName: "Doe",
        age: 30,
        position: "Developer"
    },
    {
        fName: "Anna",
        lName: "Smith",
        age: 18,
        position: "Manager"
    },
    {
        fName: "Peter",
        lName: "Jones",
        age: 25,
        position: "Designer"
    }
]
console.log(Employee[1]); 
// { fName: 'Anna', lName: 'Smith', age: 18, position: 'Manager' }

const company = {
    name: "UTA University",
    location: "Arlington", 
    employees: Employee
}
console.log(company); 
//When ever you send/post thid data ==> Convert that to JSON ==> JSON.stringify()
let JsonTextt = JSON.stringify(company); 
//Convert JS container TO JSON format then send data outside as JSON text.  
console.log(JsonTextt); 