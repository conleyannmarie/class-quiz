var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

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

function nextQuestion() {
    if (next === true)

}

// keeping score

//timer decreasing with incorrect answer

//timer finishes and game over

//all questions answered game over

//presenting score at the the end 

//local storage saving score and initials

  