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


// 7.
// The watchList array holds objects with information on several movies.
// Use map on watchList to assign a new array of objects to the ratings variable.
// Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating.
// The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(i => {
  return {title:i["Title"],rating:i["imdbRating"] }
})

console.log(JSON.stringify(ratings));


// 8.
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map().
// You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let value of this) {
  value = callback(value)
  newArray.push(value);
}
  return newArray;
};

const new_s = s.myMap(function(i)  {
  return i *  2
});