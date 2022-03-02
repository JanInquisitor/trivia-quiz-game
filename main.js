// Selecting elements
var introPanelEl = document.querySelector(".intro-panel");
var gamePanelEl = document.querySelector(".game-panel");
var questionBoxEl = document.querySelector(".question-box");
var questionHeadingEl = document.querySelector(".question-box__header");
var questionTextEl = document.querySelector(".question-box__text");
var questionControlsEl = document.querySelector("#controls");
var startBtnEl = document.querySelector(".start-btn");

var cursor = 0;
var score = 100;

// Questions and Data
var questionsDB = {
  firstSet: {
    topic: "General trivia",
    questionsArray: [
      {
        question: "How many planets are there in our solar system?",
        possible: ["Eight", "Nine", "Six", "Ten"],
        answerBtnPosition: 1,
        info: "Lorem Ipsum",
      },
      {
        question: "How many dog breeds are?",
        possible: ["Many", "A few", "None", "What is a dog?"],
        answerBtnPosition: 2,
      },
      {
        question: "Who invented italian food?",
        possible: [
          "Japanese",
          "It is a psyop",
          "Who cares",
          "What's an italian?",
        ],
        answerBtnPosition: 3,
      },
    ],
  },
  secondSet: {
    topic: "Fiction",
    questionsArray: [
      {
        question: "placeholder",
        possible: [],
        answerBtnPosition: Math.floor(Math.random() * 4),
      },
    ],
  },
};

function renderQuestion() {
  //Use the lodash library
  // var btns = questionControlsEl.children[0].children;

  var dice = Math.floor(Math.random() * 3);
  var questionObj = questionsDB["firstSet"].questionsArray[dice];
  var correctAnswer;
  var btn = document.createElement("li");

  questionHeadingEl.innerHTML = questionObj.question;

  btn.classList.add("answer");
  btn.textContent = " Answer"; // Randomize the questions possible answer into btn elements

  console.log(questionObj);

  for (let i = 0; i < questionObj.possible.length; i++) {
    var item = questionObj.possible[i];
    var answerBtn = document.createElement("li");
    answerBtn.classList.add("answer");

    answerBtn.textContent = i + 1 + ". " + item;

    questionControlsEl.children[0].appendChild(answerBtn);
  }
  questionControlsEl.children[0].children[0].addEventListener("click", correct);
}

function correct() {
  var right = document.querySelector(".right");
  right.removeAttribute("hidden");
  console.log("Correct!!!");

  gamePanelEl.classList.add("hidden");
  gamePanelEl.classList.remove("hidden");

  questionControlsEl.children[0].remove();
  var newUl = document.createElement("ul");
  newUl.classList.add("question-controls__answers-list");
  questionControlsEl.append(newUl);
  renderQuestion();
}

function showEndScreen() {
  gamePanelEl.classList.add("hidden");
  introPanelEl.classList.remove("hidden");
}

function startGame() {
  // This hide the intro screen and renders the game screen
  gamePanelEl.classList.remove("hidden");
  introPanelEl.classList.add("hidden");

  //Run timer
  var seconds = 75;
  // document.getElementById("timerDisplay").innerHTML = seconds;

  var timer = setInterval(function () {
    seconds--;
    if (seconds < 0) {
      clearInterval(timer);
    }
  }, 1000);

  renderQuestion();
}

// This event handles the start button and renders the panel.
// I don't know where to place event handlers lmao.
startBtnEl.addEventListener("click", startGame);
