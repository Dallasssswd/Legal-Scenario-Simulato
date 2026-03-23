let currentScenarioIndex = 0;
let score = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const endScreen = document.getElementById("end-screen");

const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionCounter = document.getElementById("question-counter");
const scoreDisplay = document.getElementById("score-display");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioText = document.getElementById("scenario-text");
const issueOptions = document.getElementById("issue-options");
const defenseOptions = document.getElementById("defense-options");

const correctIssue = document.getElementById("correct-issue");
const correctDefense = document.getElementById("correct-defense");
const caseOutcome = document.getElementById("case-outcome");
const caseExplanation = document.getElementById("case-explanation");

const finalScoreText = document.getElementById("final-score-text");
const finalMessage = document.getElementById("final-message");

function showScreen(screen) {
  startScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function renderOptions(container, options, name) {
  container.innerHTML = "";

  options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option-label";

    label.innerHTML = `
      <input type="radio" name="${name}" value="${option}">
      ${option}
    `;

    container.appendChild(label);
  });
}

function loadScenario() {
  const scenario = scenarios[currentScenarioIndex];

  questionCounter.textContent = `Case ${currentScenarioIndex + 1} / ${scenarios.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  scenarioTitle.textContent = scenario.title;
  scenarioText.textContent = scenario.text;

  renderOptions(issueOptions, scenario.issueOptions, "issue");
  renderOptions(defenseOptions, scenario.defenseOptions, "defense");

  showScreen(quizScreen);
}

function getSelectedValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

function handleSubmit() {
  const selectedIssue = getSelectedValue("issue");
  const selectedDefense = getSelectedValue("defense");

  if (!selectedIssue || !selectedDefense) {
    alert("Pick one answer for both questions first.");
    return;
  }

  const scenario = scenarios[currentScenarioIndex];

  if (selectedIssue === scenario.correctIssue) {
    score++;
  }

  if (selectedDefense === scenario.correctDefense) {
    score++;
  }

  correctIssue.textContent = scenario.correctIssue;
  correctDefense.textContent = scenario.correctDefense;
  caseOutcome.textContent = scenario.outcome;
  caseExplanation.textContent = scenario.explanation;

  showScreen(resultScreen);
}

function handleNext() {
  currentScenarioIndex++;

  if (currentScenarioIndex >= scenarios.length) {
    showFinalScreen();
    return;
  }

  loadScenario();
}

function showFinalScreen() {
  const maxScore = scenarios.length * 2;
  finalScoreText.textContent = `You scored ${score} out of ${maxScore}.`;

  if (score === maxScore) {
    finalMessage.textContent = "Perfect score. You spotted the issues like a pro.";
  } else if (score >= maxScore * 0.7) {
    finalMessage.textContent = "Strong work. You’ve got good legal instincts.";
  } else if (score >= maxScore * 0.4) {
    finalMessage.textContent = "Solid start. Keep sharpening your case analysis.";
  } else {
    finalMessage.textContent = "Good first run. Real legal analysis takes practice.";
  }

  showScreen(endScreen);
}

function restartGame() {
  currentScenarioIndex = 0;
  score = 0;
  loadScenario();
}

startBtn.addEventListener("click", loadScenario);
submitBtn.addEventListener("click", handleSubmit);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartGame);
