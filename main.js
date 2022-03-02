// Selecting elements
var gamePanel = document.getElementById("game-panel");
var questionBox = document.getElementById("question-box");
var controls = document.getElementById("controls");

// Elements specifics
var questionHeading = questionBox.children[0];

// Questions and Data
var questionsDB = {
  firstSet: {
    topic: "General trivia",
    questionsArray: [
      {
        question: "How many planets are there in our solar system?",
        answer: "8",
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

function rollQuestion() {
  var dice = Math.floor(Math.random() * 3);
  return questionsDB["firstSet"].questionsArray[dice].question;
}

// Im thinking about making the 'createQuestion' function and 'renderQuestion' function the same.
function createQuestion() {
  // Rolls the question
  var question = rollQuestion();

  //Select element
  return (questionHeading.textContent = question);
}

function renderQuestion() {}

function controlsHandler() {}

function startGame() {}

// startGame();

rollQuestion();

// var questionsArray = [
//   {
//     question: "How many planets are there in our solar system?",
//     answer: "8",
//     answerBtnPosition: 1,
//     info: "Lorem Ipsum",
//   },
//   {
//     question: "How many dog breeds are?",
//     answer: "who knows",
//     answerBtnPosition: 2,
//   },
//   {
//     question: "Who invented italian food?",
//     answer: "Italians",
//     answerBtnPosition: 3,
//   },
// ];
