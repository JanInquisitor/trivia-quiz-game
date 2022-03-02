// Selecting elements
var gamePanel = document.getElementById("game-panel");
var questionBox = document.getElementById("question-box");
var controls = document.getElementById("controls");
var introPanel = document.getElementsByClassName("intro-panel");
var introControlBox = document.getElementById("intro-control");

// Elements specifics
var questionHeading = questionBox.children[0];
var startBtn = introControlBox.children[0];

// Questions and Data
var questionsDB = {
  firstSet: {
    topic: "General trivia",
    questionsArray: [
      {
        question: "How many planets are there in our solar system?",
        answers: [],
        answerBtnPosition: 1,
        info: "Lorem Ipsum",
      },
      {
        question: "How many dog breeds are?",
        answer: "who knows",
        answerBtnPosition: 2,
      },
      {
        question: "Who invented italian food?",
        answer: "Italians",
        answerBtnPosition: 3,
      },
    ],
  },
  secondSet: {
    topic: "Fiction",
    questionsArray: [
      {
        question: "placeholder",
        answer: "placeholder",
        answerBtnPosition: Math.floor(Math.random() * 4),
      },
    ],
  },
};

var cursor = 0;
var score = 100;

function rollQuestion() {
  var dice = Math.floor(Math.random() * 3);

  return questionsDB["firstSet"].questionsArray[dice].question;
}

// Im thinking about making the 'createQuestion' function and 'renderQuestion' function the same.
function renderQuestion() {}

function startGame() {
  // This hide the intro screen and renders the game screen
  gamePanel.classList.remove("hidden");
  introPanel[0].classList.add("hidden");
}

function init() {
  // Rolls the question
  var question = rollQuestion();

  //Shows question
  questionHeading.textContent = question; // <----- Here

  // Show answer options

  var questions = questionsDB.firstSet.questionsArray;
}

// This event handles the start button and renders the panel.
// I don't know where to place event handlers lmao.
startBtn.addEventListener("click", startGame);

// TODO: Use querySelector instead
init();

// I must select the elements and fill them with the info that willd be coming from my small Database
