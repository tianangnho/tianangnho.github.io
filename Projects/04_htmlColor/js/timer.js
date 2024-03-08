
var timerName = "timer1";
var birthdayA = "Jan 01, 2026 12:00:00";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "interactive") {
    //nitLoader();
  } else if (event.target.readyState === "complete") {
    addElement();
    countdown();
  }
});
function addElement() { 

// create a new div element
  const dayDiv = document.createElement("div");
  dayDiv.setAttribute("id","days");
  dayDiv.setAttribute("style","display:inline-block");

  const hoursDiv = document.createElement("div");
  hoursDiv.setAttribute("id","hours");
  hoursDiv.setAttribute("style","display:inline-block");

  const minutesDiv = document.createElement("div");
  minutesDiv.setAttribute("id","minutes");
  minutesDiv.setAttribute("style","display:inline-block");

  const secondsDiv = document.createElement("div");
  secondsDiv.setAttribute("id","seconds");
  secondsDiv.setAttribute("style","display:inline-block");

  const microSecondsDiv = document.createElement("div");
  microSecondsDiv.setAttribute("id","microSeconds");
  microSecondsDiv.setAttribute("style","display:inline-block");


  // add the newly created element and its content into the DOM
 const currentDiv = document.getElementById("timer1");
 currentDiv.insertBefore(dayDiv, currentDiv.nextSibling);
currentDiv.insertBefore(hoursDiv,dayDiv.nextSibling);
currentDiv.insertBefore(minutesDiv ,hoursDiv.nextSibling);
currentDiv.insertBefore( secondsDiv, minutesDiv.nextSibling);
currentDiv.insertBefore(microSecondsDiv, secondsDiv.nextSibling);


 
  //document.body.insertBefore(dayDiv, currentDiv);
  //document.body.insertBefore(hoursDiv,dayDiv);
  //document.body.insertBefore(minutesDiv ,hoursDiv);
  //document.body.insertBefore( secondsDiv, minutesDiv);
  //document.body.insertBefore(microSecondsDiv, secondsDiv);

  //Insert after

  //document.body.insertBefore(dayDiv, currentDiv.nextSibling);
  //document.body.insertBefore(hoursDiv,dayDiv.nextSibling);
  //document.body.insertBefore(minutesDiv ,hoursDiv.nextSibling);
  //document.body.insertBefore( secondsDiv, minutesDiv.nextSibling);
  //document.body.insertBefore(microSecondsDiv, secondsDiv.nextSibling);

// Select correct timer1
////  let container = document.querySelector('table tr td > div#timer1');
////  container.insertBefore(dayDiv, currentDiv.nextSibling);
////  container.insertBefore(hoursDiv,dayDiv.nextSibling);
//// container.insertBefore(minutesDiv ,hoursDiv.nextSibling);
////  container.insertBefore( secondsDiv, minutesDiv.nextSibling);
////  container.insertBefore(microSecondsDiv, secondsDiv.nextSibling);

  //container.createElement(dayDiv);
  //container.createElement(hoursDiv);
  //container.createElement(minutesDiv);
  //container.createElement(secondsDiv);
  //container.createElement(microSecondsDiv);

 }


function countdown() {
      const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      let birthday = birthdayA,
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
        distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(distance / day)+ ":"),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
          )+ ":"),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
          )+ ":"),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
          ) + ":"),
        (document.getElementById("microSeconds").innerText = Math.floor(
          (distance % second)
          ));

      //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
      //seconds
      }, 0);
    }
