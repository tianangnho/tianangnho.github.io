
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    //nitLoader();
  } else if (event.target.readyState === "complete") {
    const items = document.getElementsByClassName('timer');
    for (const element of items) {
    //  element.setAttribute("style","width: 200px; font-size: 1.5rem;")
      countdown(element, element.innerText);
    }
  }
});

function countdown(timer, birthday) {
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

  let countDown = new Date(birthday).getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
    distance = countDown - now;

    (days = Math.floor(distance / day)+ " days : "),
    (hours = Math.floor(
      (distance % day) / hour
      )+ " hours : "),
    (minutes = Math.floor(
      (distance % hour) / minute
      )+ " minutes: "),
    (seconds = Math.floor(
      (distance % minute) / second
      ) + " seconds: "),
    (microSeconds = Math.floor(
      (distance % second)
      )+ " mSeconds");
    timer.innerText = days + hours + minutes + seconds + microSeconds ;
   //  timer.textContent = days + hours + minutes + seconds + microSeconds ;
    //let timerObject = document.getElementById(timer);
   //timerObject.innerText  = timerObject.innerText + "\n" + days + minutes + seconds + microSeconds;
      //do something later when date is reached
    if (distance < 0) {
      clearInterval(x);
    }
      //seconds
  }, 0);
}
