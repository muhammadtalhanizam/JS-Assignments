////// Question #1 ///////

function addNumberToValue(number) {
    return function(value) {
      return number + value;
    }
  }
   
  const addNum = addNumberToValue(5);
  console.log(addNum(10)); 
  console.log(addNum(20)); 

// =============================//


////// Question #2 ///////

const myArray = [1, 2, 3, 4, 5];
const searchValue = 8;

function searchArray(array, value) {
    
    if (array.length === 0) {
        return false;
    }


    if (array[0] === value) {
        return true;
    }
    
    
    return searchArray(array.slice(1), value);
}

console.log(searchArray(myArray, searchValue));


// =============================//

////// Question #3 ///////

function addParagraph(text) {
    const newParagraph = document.createElement('p'); 
    const content = document.createTextNode(text); 
    newParagraph.appendChild(content); 
    document.body.appendChild(newParagraph); 
  }


// =============================//


////// Question #4 ///////

function addListItem(text) {
    
    const list = document.querySelector('ul');
  
    const newItem = document.createElement('li');
     
    newItem.textContent = text;
  
    document.body.appendChild(newItem);
  }

// =============================//

////// Question #5 ///////


  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  const myDiv = document.getElementById('myDiv');
changeBackgroundColor(myDiv, 'red');


// =============================//


////// Question #6 ///////

function saveData(name, obj) {

  let stringify = JSON.stringify(obj)
      localStorage.setItem(name, stringify);
  }
  
  
  let myObj = {
    firstName:"Talha",  lastName:"Nizam", age:21, eyeColor:"brown"
  }
  let objName = prompt("Enter Object Name: ");
  saveData(objName, myObj)


// =============================//


////// Question #7 ///////



function retrieveFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return JSON.parse(item);

}

const myObject = retrieveFromLocalStorage('myKey');
console.log(myObject); 

// =============================//



////// Question #8 ///////

function saveToLocalStorage(obj) {
  // Save each property to localStorage using its name as the key
  for (const [key, value] of Object.entries(obj)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Retrieve the saved properties and construct a new object
  const newObj = {};
  for (const key of Object.keys(obj)) {
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  
  return newObj;
}

saveToLocalStorage({firstName:"Talha",  lastName:"Nizam", age:21, eyeColor:"brown"});

// =============================//


