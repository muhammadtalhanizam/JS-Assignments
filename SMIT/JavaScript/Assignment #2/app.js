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

  const myElement = document.querySelector("#my-element");
  changeBackgroundColor(myElement, "blue");
  

// =============================//

////// Question #6 ///////



// =============================//