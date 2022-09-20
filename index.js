// 1.
// In the code editor, the prepareTea and getTea functions are already defined for you.
// Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = (getTea(40));

console.log(tea4TeamFCC)


// 2.
// Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC
// and tea4BlackTeamFCC variables, respectively.
// Note that the getTea function has been modified so it now takes a function as the first argument.

const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// 3.
// Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.
// The final list of open tabs, stored in finalTabs.tabs, should be
// ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']
// but the list produced by the code is slightly different.

// Change Window.prototype.tabClose so that it removes the correct tab.

const Window = function(tabs) {
    this.tabs = tabs; 
  };
  
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); 
    return this;
  };
  
  Window.prototype.tabClose = function(index) {
  
    const tabsBeforeIndex = this.tabs.splice(0, index); 
    const tabsAfterIndex = this.tabs.splice(1); 
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  
    return this;
   };
  
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
  
  const finalTabs = socialWindow
    .tabOpen()
    
    .join(videoWindow.tabClose(2))  
   
    .join(workWindow.tabClose(1).tabOpen()) 

  console.log(finalTabs.tabs);


// 4.
// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

let fixedValue = 4;

function incrementer() {
  
return fixedValue + 1

}

// 5.
// Let's update the incrementer function to clearly declare its dependencies.
// Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

let fixedValue = 4;

function incrementer(num) {
    let resalt = num + 1
    return resalt
}

// 6.
// Rewrite the code so the global array bookList is not changed inside either function.
// The add function should add the given bookName to the end of the array passed to it and return a new array (list).
// The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let bookListClone = [... arr]
  bookListClone.push(bookName);
  return bookListClone;
}

function remove(arr, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    let bookListClone = [... arr]
    bookListClone.splice(book_index, 1);
    return bookListClone;
    }
}