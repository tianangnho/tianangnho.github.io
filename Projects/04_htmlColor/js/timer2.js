let items = [
  ["timer1", "Jan 01, 2028 12:00:00"],
  ["timer2", "Jan 01, 2030 12:00:00"],
  ["timer3", "Jan 01, 2026 12:00:00"]
];
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    //nitLoader();
  } else if (event.target.readyState === "complete") {
    for (const element of items) {
       if (document.getElementById(element[0]) != null && document.getElementById(element[0]) != undefined) {
      countdown(element[0], element[1]);
       }
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

    (days = Math.floor(distance / day)+ ":"),
    (hours = Math.floor(
      (distance % day) / hour
      )+ ":"),
    (minutes = Math.floor(
      (distance % hour) / minute
      )+ ":"),
    (seconds = Math.floor(
      (distance % minute) / second
      ) + ":"),
    (microSeconds = Math.floor(
      (distance % second)
      ));
    document.getElementById(timer).innerText = days + minutes + seconds + microSeconds ;
    //let timerObject = document.getElementById(timer);
   //timerObject.innerText  = timerObject.innerText + "\n" + days + minutes + seconds + microSeconds;
      //do something later when date is reached
    if (distance < 0) {
      clearInterval(x);
    }
      //seconds
  }, 0);
}
