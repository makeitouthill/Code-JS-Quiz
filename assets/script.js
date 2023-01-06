var quiz = document.querySelector(".quiz");
var startBtn = document.createElement("button");
var timer = setInterval(updateTimer, 1000);
var updateTimer = setInterval(timer, 150000)
startBtn.type = "button";
startBtn.textContent = "Start Quiz";
startBtn.classList.add("startBtn");

quiz.appendChild(startBtn);
console.log(quiz);

startBtn.addEventListener("click", function() {
    console.log("Start button clicked");
    function updateTimer() { timerDisplay.innerHTML = timerValue;}
});

startBtn.addEventListener("click", function(){quiz.innerHTML = `
<h1>Question</h1>
<form>
  <input type="radio" name="answer" value="A">Answer A<br>
  <input type="radio" name="answer" value="B">Answer B<br>
  <input type="radio" name="answer" value="C">Answer C<br>
  <input type="radio" name="answer" value="D">Answer D<br>
  <button type="submit">Submit</button>
</form>
`;})
