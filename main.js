// Selecting elements
var introPanelEl = document.querySelector(".intro-panel");
var endPanelEl = document.querySelector(".end-screen");
var gamePanelEl = document.querySelector(".game-panel");
var questionBoxEl = document.querySelector(".question-box");
var questionHeadingEl = document.querySelector(".question-box__header");
var questionTextEl = document.querySelector(".question-box__text");
var questionControlsEl = document.querySelector("#controls");
var btnListEl = document.querySelector(".question-controls__answers-list");
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
        correct: "Eight",
      },
      {
        question: "How many dog breeds are?",
        possible: [58, 120, 190, "What is a dog?"],
        correct: "fifty-height",
      },
      {
        question: "Who invented italian food?",
        possible: [
          "Japanese",
          "It is a psyop",
          "Who cares",
          "What's an italian?",
        ],
        correct: "Its a psyop",
      },
    ],
  },
  secondSet: {
    topic: "Fiction",
    questionsArray: [
      {
        question: "placeholder",
        possible: [],
        correct: "placeholder",
      },
    ],
  },
};

function renderQuestion() {
  // Fetch the question
  var questionObj = questionsDB["firstSet"].questionsArray[cursor];

  // This shows the question on the screen
  questionHeadingEl.innerHTML = questionObj.question;
  var btn = document.createElement("li");
  // This adds
  btn.classList.add("answer");

  // This remove the previous buttons before rendering the new buttons
  btnListEl.textContent = "";

  for (let i = 0; i < questionObj.possible.length; i++) {
    var item = questionObj.possible[i];
    var answerBtn = document.createElement("li");
    answerBtn.classList.add("answer");
    answerBtn.textContent = i + 1 + ". " + item;
    questionControlsEl.children[0].appendChild(answerBtn);
    answerBtn.textContent = item;
    answerBtn.addEventListener("click", function () {
      checkAnswer(this.textContent);
    });
  }
}

function checkAnswer(possible) {
  var wrong = document.querySelector(".wrong");
  var right = document.querySelector(".right");

  var correctAnswer = questionsDB["firstSet"].questionsArray[cursor].correct;
  if (possible != correctAnswer) {
    wrong.removeAttribute("hidden");
    right.hidden = true;
  } else {
    right.removeAttribute("hidden");
    wrong.hidden = true;
  }
}

// This function is deprecated I'm keeping it for future reference.
// function correct() {
//   var right = document.querySelector(".right");
//   right.removeAttribute("hidden");

//   gamePanelEl.classList.add("hidden");
//   gamePanelEl.classList.remove("hidden");
//   questionControlsEl.children[0].remove();
//   var newUl = document.createElement("ul");
//   newUl.classList.add("question-controls__answers-list");
//   questionControlsEl.append(newUl);
//   renderQuestion();
// }

function showStartScreen() {
  gamePanelEl.classList.remove("hidden");
  introPanelEl.classList.add("hidden");
}

function showEndScreen() {
  gamePanelEl.classList.add("hidden");
  endPanelEl.removeAttribute("hidden");
}

function startGame() {
  showStartScreen();

  //Run timer
  var seconds = 75;
  var timerEl = document.querySelector("#timer-display");

  var timer = setInterval(function () {
    seconds--;
    console.log(seconds);
    timerEl.textContent = seconds;
    if (seconds < 0) {
      showEndScreen();
      clearInterval(timer);
    }
  }, 1000);

  renderQuestion();
}

// This event handles the start button and renders the panel.
// I don't know where to place event handlers lmao.
startBtnEl.addEventListener("click", startGame);
gamePanelEl.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    console.log(event.target);
    cursor++;
    if (cursor < questionsDB["firstSet"].questionsArray.length) {
      renderQuestion();
    } else {
      showEndScreen();
      clearInterval(timer);
    }
  }
});
