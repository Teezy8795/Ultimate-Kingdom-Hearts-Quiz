
const questions = [
  {
    question: "What is the name of Sora’s home world?",
    answers: ["Twilight Town", "Radiant Garden", "Destiny Islands", "Traverse Town"],
    correct: 2
  },
  {
    question: "Who are the original members of the Destiny Islands trio?",
    answers: ["Sora, Riku, Kairi", "Roxas, Axel, Xion", "Terra, Aqua, Ventus", "Donald, Goofy, Sora"],
    correct: 0
  },
  {
    question: "What is the name of the powerful weapon central to the series?",
    answers: ["Heartblade", "X-blade", "Soul Blade", "Keyblade"],
    correct: 3
  },
  {
    question: "Who was the original Master of the Keyblade Masters?",
    answers: ["Master Eraqus", "Master Xehanort", "Ansem the Wise", "Master of Masters"],
    correct: 3
  },
  {
    question: "What organization seeks to create Kingdom Hearts using Nobodies?",
    answers: ["Radiant Order", "Organization XIII", "Keyblade Council", "Heartless Syndicate"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById('question-text').textContent = question.question;
  const buttons = document.getElementById('answer-buttons');
  buttons.innerHTML = '';
  question.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(index);
    buttons.appendChild(btn);
  });
  document.getElementById('next-btn').classList.add('hidden');
}

function selectAnswer(index) {
  const question = questions[currentQuestionIndex];
  if (index === question.correct) {
    score++;
  }
  Array.from(document.getElementById('answer-buttons').children).forEach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = i === question.correct ? '#228822' : '#aa2222';
  });
  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('score-text').textContent = `You scored ${score} out of ${questions.length}!`;
}
