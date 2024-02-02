const path = document.querySelector('.CircularProgressbar-path');
  const text = document.querySelector('.CircularProgressbar-text');

  const totalTime = 50; 
  let timeLeft = totalTime; 

const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

  function updateProgress() {
    if (timeLeft <= 0) {
        timeLeft = totalTime;
      };
      
    const progress = (timeLeft / totalTime) * 100;
    const offset = pathLength - (progress / 100) * pathLength;
    path.style.strokeDashoffset = offset;
    text.textContent = Math.ceil(timeLeft); 
  }

  const timer = setInterval(() => {
    timeLeft--;
    updateProgress();

    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);