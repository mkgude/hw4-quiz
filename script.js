// 1. On homepage, select start to begin
var startButton = document.getElementById("startButton");
var startPage = document.getElementById("startpage");
var timeEl = document.getElementById("timer");
var questionPageEl = document.getElementById("quizpage-container");
var submitScorePageEl = document.getElementById("resultPage");
var submitScoreEl = document.getElementById("results");
var displayScoreEl = document.getElementById("endGameButtons");
var questionEl = document.getElementById("questions");
var answerButtonEl = document.getElementById("optionButton");
var time = document.getElementById("time");
var submitButton = document.getElementById("submitscore");
var replayButton = document.getElementById("replay");
var clearButton = document.getElementById("clear");
var initialsInput = document.getElementById("name");
var scoreInitials = document.getElementById("name-place");
var finalScoreEl = document.getElementById("player-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");

// a. Start timer at 75 seconds
var countDown = 5;
var score = 0;
var currentQuestionIndex = 0;
var correct;
var finalQuestionIndex = myQuestions;
var timerInterval;

// starting data
var myQuestions = [
  {
    question: "question1",
    optionA: "asdf",
    optionB: "asdf",
    optionC: "asdf",
    correctAnswer: "",
  },
  {
    question: "question1",
    optionA: "",
    optionB: "",
    optionC: "",
    correctAnswer: "",
  },
  {
    question: "question1",
    optionA: "",
    optionB: "",
    optionC: "",
    correctAnswer: "",
  },
  {
    question: "question1",
    optionA: "",
    optionB: "",
    optionC: "",
    correctAnswer: "",
  },
  {
    question: "question1",
    optionA: "",
    optionB: "",
    optionC: "",
    correctAnswer: "",
  },
];

// helper functions

// Display quiz questions

function displayQuestion() {
  startPage.classList.add("hide");
  questionPageEl.classList.remove("hide");
  if (currentQuestionIndex === finalQuestionIndex) {
    return scoreSubmit();
  }
  // Display question first and then start to try 'for loop' and look into generator function (js)
  // nextQuestion()
  var currentQuestion = myQuestions[currentQuestionIndex];

  questionEl.textContent = currentQuestion.question;
  buttonA.textContent = currentQuestion.optionA;
  buttonB.textContent = currentQuestion.optionB;
  buttonC.textContent = currentQuestion.optionC;
}

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startPage.classList.add("hide");

  questionCarousel = 5;
  questionPageEl.classList.remove("hide");
  displayQuestion();

  // TIMER Section
  //   =======================if incorrect, subtract 5 seconds and display next question
  var timerInterval = setInterval(function () {
    countDown--;
    time.textContent = countDown;
    if (countDown <= 0) {
      clearInterval(timerInterval);
      countDown = 5;
      scoreSubmit();
    }
  }, 1000);
}

// Display page to have user input initials

function scoreSubmit() {
  console.log("time ended");
  clearInterval(timerInterval);
  submitScorePageEl.classList.remove("hide");
  questionPageEl.classList.add("hide");
  initialsInput.value = "";
  //   Show player score out of 5
  submitScoreEl.textContent =
    "You got " + score + " out of " + myQuestions.length + " correct.";
}

// Button - Submit results
// Evaluate answers and display results
submitButton.addEventListener("click", function highscore() {
  if (initialsInput.value === "") {
    alert("Must add initials, try again");
    return false;
    // Show player initials
  } else {
    var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
    var currentUser = initialsInput.value.trim();
    console.log(currentUser);
    var currentScore = {
      name: currentUser,
      score: score,
    };
    submitScorePageEl.classList.add("hide");
    displayScoreEl.classList.remove("hide");
    savedScores.push(currentScore);
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
    generateScores();
  }
});

// Store question answers and compare results
function generateScores() {
  scoreInitials.textContent = "";
  finalScoreEl.textContent = "";
  var highscores = JSON.parse(localstorage.getItem("savedScores")) || [];
  for (i = 0; i, highscores.length; i++) {
    var nameSpan = document.createElement("li");
    var scoreSpan = document.createElement("li");
    nameSpan.textContent = highscores[i].name;
    scoreSpan.textContent = highscores[i].score;
    scoreInitials.appendChild(nameSpan);
    finalScoreEl.appendChild(scoreSpan.value);
  }
}

// evaluate scores

// function calculateScores (){

// }

// add buttons to play again or remove score

replayButton.addEventListener("click", returnHomePage);
function returnHomePage() {
  console.log("return to home page");
  startPage.classList.remove("hide");
  displayScoreEl.classList.add("hide");
}
