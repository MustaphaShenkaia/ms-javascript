//Practice2: 
//Step1: Find an element which its id is changeContent1; 
let element1 = document.getElementById("changeContent1"); 
//assign the element you find to JS variable. 

//Ste2: Use either innerHTML or innerText to change the content of element
element1.innerHTML = "This text been assigned by JS to here."



//Practice3: set/update Attribute value: 
//step1: find an element: 
//let imgElement = document.getElementById("setAttribute");
let imgElements = document.getElementsByTagName("img"); //That will return all img element. 
//step2: add an attribute: setAttribute();
//imgElement.setAttribute('height', 400);
imgElements[0].setAttribute('height', 400); //since we multiple elements in container, 
//you canreach a specific by its index or id. imgelements["setAttribute"]; 
//Step1: find an element with its id to update the value of attribute: 
let ifarameElement = document.querySelector("#wise"); //this will find an element with wise id; 
//Step2: Change the src attribute value: 
ifarameElement.src = "https://www.bbc.com"; 
ifarameElement.height = "300"; 



//Practice4: update style of elements by their class name: 
//step1: find elements by their className: 
let updateStyle = document.getElementsByClassName("style"); //document.querySelector(".style")
//step2: Change style ==> element.style.property = new value
updateStyle[0].style.color = "red"; 
updateStyle[1].style.backgroundColor = "green"; 
updateStyle[1].style.color = "black"; 
updateStyle[2].style.color = "pink"
updateStyle[2].style.fontFamily = "Verdana";



//Practice5: Find a group of element by their class, then remove the one at index 2. 
//step1: Find elements: 
//let removing = document.getElementsByClassName("removing"); //
let removing = document.querySelectorAll(".removing"); 
//Note: querySelector(.ClassName) will return a single the first match, while querySelectorAll(.ClassName)
//will return the whole class. 
//step2: remove an element at index 2. 
removing[2].remove(); 


//Practice6: 
function minutes(){
    //step1: find element to assign  minutes : 
    let minutes = document.getElementById("minutes"); 
    const currentDate = new Date(); 
    minutes.innerHTML = 60 - currentDate.getMinutes(); 
} // assign that function to button so when ever its been clicked it will run the function 