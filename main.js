let form = document.querySelector("#form");
let inputValue = document.querySelector("#userInput");
let countdownText = document.querySelector("#countdown");
// let countdownText = document.querySelector("#countdown-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  let userValue = inputValue.value;
  console.log(userValue);

  let today = new Date();

  let birthdate = new Date(userValue +  "T00:00");

  let nextBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );
  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const timeRemain = nextBirthday.getTime() - today.getTime();
  //  Time
  let months = Math.floor(timeRemain / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (timeRemain % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor(
    (timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);
  // console.table([months , days,hours,minutes, seconds])

  let result = `Time remaining until your next birthday:${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;

  console.log(result);
  countdownText.innerHTML = result;
  userValue = ""
});
