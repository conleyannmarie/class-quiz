//Variables 

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var initalsEl = document.getElementById()

//putting in initals saving to local storage 
function renderLastRegistered() {
    var initials = localStorage.getItem('initials');
    var score = localStorage.getItem('score');

      // If they are null, return early from this function
        if (initials === null || score === null) {
            return;
  }

    userInitials.textContent = initials;
    userScore.textContent = score;
  }
  

// Timer code
function countdown() {
    var timeLeft = 180;

    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          displayMessage();
        }
      }, 1000);
    }
//selecting an answer pushes it to next question

// function nextQuestion() {
//     if (next === true)

// }

// keeping score if the answer is true add 10 points =+
var possibilities = "";

if (answer === true) {
  10;
}
//timer decreasing with incorrect answer if answer not coorrect decrease 10 seconds

//timer finishes and game over

//all questions answered game over

//presenting score at the the end 
var message =
  'Your score is [score]';
  function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function() {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 300);
  }
//local storage saving score and initials

//questions

var questions = [
{
    title: "What is Rose Quartz known for?" ,
    choices: ["Helps with liver", "Unconditional love and healing", "Forgiveness", "Good Energy"],
    answer: "Unconditional love and healing"
},
{
    title: "What is Jasper known for??" ,
    choices: ["Negative Energ", "A love connection", "Supreme Nurturer", "Conductivity"],
    answer: "Supreme Nurturer"
},
{
    title: "What is Obsedian known for?" ,
    choices: ["Shield against Physical and emotional negativity", "Empowerment", "Balance emotions", "Brings joy"],
    answer: "Shield against Physical and emotional negativity"
},
{
    title: "What is Led Zeppelin known for?" ,
    choices: ["being the best rock", "brings a motivational boost", "Stairway to Heaven", "Productivity"],
    answer: "Stairway to Heaven"
}, 
{
    title: "What is Citrine known for?" ,
    choices: ["Helps with heart", "keeps away demons", "Forgiveness", "release negative traits from your life"],
    answer: "release negative traits from your life"
},
{
    title: "What is Turquoise known for?" ,
    choices: ["heal the mind, body, and soul", "enhance mindful qualities", "purifying", "spiritual wisdom"],
    answer: "heal the mind, body, and soul"
}
];

