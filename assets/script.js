

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

var timer;
var time = 75;
var questionindex = 0;
var score = 0;

var showQuestion = function() {
    var currentQuestion = questions[questionindex];

    var template = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${currentQuestion.title}</h5>
            <p class="card-text choice">${currentQuestion.choices[0]}</p>
            <p class="card-text choice">${currentQuestion.choices[1]}</p>
            <p class="card-text choice">${currentQuestion.choices[2]}</p>
            <p class="card-text choice">${currentQuestion.choices[3]}</p>
            </div>
        </div>
    `;

    document.querySelector(".question-container").innerHTML = template;
}

var endGame = function() {
    //hide questions
    document.querySelector(".question-container").classList.add("hide");
    //show the end container
    document.querySelector(".end-container").classList.remove("hide");
    //show results = score
    document.querySelector(".score").textContent = score;
    //stop time
    clearInterval(timer);
}



document.querySelector(".question-container").addEventListener("click", function(event) {
    if (event.target.classList.contains("choice")) {
        var currentQuestion = questions[questionindex];
        //check score
        if (currentQuestion.answer === event.target.textContent) {
            score++;
        } else {
            time -= 5;
        }

        //increase the q index
        questionindex++;
        //show next questions
        if (questionindex == questions.length) {
            endGame();
        } else {
            showQuestion();
        }
    }
})

document.querySelector("#start").addEventListener('click', function(event) {
    //hide start elements
    document.querySelector(".start-container").classList.add("hide");
    //show questions elements
    document.querySelector(".question-container").classList.remove("hide");
    //start timer
    timer = setInterval(function() {
        time--
        document.querySelector("#countdown").textContent = time;
        if (time <= 0) {
            endGame();
        }
    }, 1000);
    //show question
    showQuestion();
});


document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    //get the user input
    var initials = document.querySelector("#initials").value;

    //create newdata entry
    var entry = {
        init: initials,
        score: score
    }

    //get old data
    var data = JSON.parse(localStorage.getItem("data")) || [];

    //new data in tot he old data
    data.push(entry);

    //set the data
    localStorage.setItem("data",JSON.stringify(data));
});var timer;
var time = 75;
var questionindex = 0;
var score = 0;

var showQuestion = function() {
    var currentQuestion = questions[questionindex];

    var template = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${currentQuestion.title}</h5>
            <p class="card-text choice">${currentQuestion.choices[0]}</p>
            <p class="card-text choice">${currentQuestion.choices[1]}</p>
            <p class="card-text choice">${currentQuestion.choices[2]}</p>
            <p class="card-text choice">${currentQuestion.choices[3]}</p>
            </div>
        </div>
    `;

    document.querySelector(".question-container").innerHTML = template;
}

var endGame = function() {
    //hide questions
    document.querySelector(".question-container").classList.add("hide");
    //show the end container
    document.querySelector(".end-container").classList.remove("hide");
    //show results = score
    document.querySelector(".score").textContent = score;
    //stop time
    clearInterval(timer);
}



document.querySelector(".question-container").addEventListener("click", function(event) {
    if (event.target.classList.contains("choice")) {
        var currentQuestion = questions[questionindex];
        //check score
        if (currentQuestion.answer === event.target.textContent) {
            score++;
        } else {
            time -= 5;
        }

        //increase the q index
        questionindex++;
        //show next questions
        if (questionindex == questions.length) {
            endGame();
        } else {
            showQuestion();
        }
    }
})

document.querySelector("#start").addEventListener('click', function(event) {
    //hide start elements
    document.querySelector(".start-container").classList.add("hide");
    //show questions elements
    document.querySelector(".question-container").classList.remove("hide");
    //start timer
    timer = setInterval(function() {
        time--
        document.querySelector("#countdown").textContent = time;
        if (time <= 0) {
            endGame();
        }
    }, 1000);
    //show question
    showQuestion();
});


document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    //get the user input
    var initials = document.querySelector("#initials").value;

    //create newdata entry
    var entry = {
        init: initials,
        score: score
    }

    //get old data
    var data = JSON.parse(localStorage.getItem("data")) || [];

    //new data in tot he old data
    data.push(entry);

    //set the data
    localStorage.setItem("data",JSON.stringify(data));
});
