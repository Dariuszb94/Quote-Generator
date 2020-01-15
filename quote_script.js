$(document).ready(function () { //first load functions
  $("#text").text(getQuotes());
  $("#author").text(getAuthor());

});

$('#new-quote').on('click', newQuote); //generate quote when clicked
//Array with quote texts
var quoteArray = [ 
"“Be yourself, everyone else is already taken.”",
"“So many books, so little time.”",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
"“A room without books is like a body without a soul.”",
"“Always forgive your enemies; nothing annoys them so much.”",
"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"];

//Array with quote authors
var authorArray = [
"Oscar Wilde",
"Frank Zappa",
"Bernard M. Baruch",
"Marcus Tullius Cicero",
"Oscar Wilde",
"Ralph Waldo Emerson"];

var randomNumber = Math.floor(Math.random() * quoteArray.length); //generate random number for quotes authors and texts (both)

//function to get quotes texts on page load
function getQuotes() {
  return quoteArray[randomNumber];
};

//function to get quotes author on page load
function getAuthor() {
  return authorArray[randomNumber];
};

////function to get quotes on request
function newQuote() {
  randomNumber = Math.floor(Math.random() * quoteArray.length);
  $("#text").text(getQuotes());
  $("#author").text(getAuthor());
  return;
};

$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + getQuotes() + " " + getAuthor()); //link to twit
//# sourceURL=pen.js 