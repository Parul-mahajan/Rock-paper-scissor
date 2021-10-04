// get values
var us = 0;
var cs = 0;
const user = document.getElementById("user-score");
// console.log(user);
const comp = document.getElementById("comp-score");
// console.log(comp);
// for computer
const choice = ["rock", "paper", "scissor"];
// console.log(choice[Math.floor(Math.random() * 3)]);
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const message = document.getElementById("move");
const res = document.getElementById("result");

rock.addEventListener("click", function () {
  message.innerText = "You choose rock";
  game("rock");
});
paper.addEventListener("click", function () {
  message.innerText = "You choose paper";
  game("paper");
});
scissor.addEventListener("click", function () {
  message.innerText = "You choose scissor";
  game("scissor");
});

function game(s) {
  setTimeout(function () {
    const chosen = computersgame();
    if (chosen == "rock") {
      document.getElementById("r").classList.add("mystyle");
    } else if (chosen == "paper") {
      document.getElementById("p").classList.add("mystyle");
    } else {
      document.getElementById("s").classList.add("mystyle");
    }
    setTimeout(function () {
      console.log("out");
      document.getElementById("r").classList.remove("mystyle");
      document.getElementById("s").classList.remove("mystyle");
      document.getElementById("p").classList.remove("mystyle");
    }, 1000);
    setTimeout(function () {
      result(chosen, s);
    }, 1000);
  }, 1000);
}
function computersgame() {
  const chosen = choice[Math.floor(Math.random() * 3)];
  message.innerText = "Computer choose " + chosen;
  return chosen;
}

function result(comps, users) {
  if (users == comps) {
    res.innerText = "DRAWW 🕊️!";
  }
  if (
    (users == "paper" && comps == "rock") ||
    (users == "rock" && comps == "scissor") ||
    (users == "scissor" && comps == "paper")
  ) {
    res.innerText = "User Won 🔥!";
    us++;
    user.innerText = "" + us;
  } else if (
    (comps == "paper" && users == "rock") ||
    (comps == "rock" && users == "scissor") ||
    (comps == "scissor" && users == "paper")
  ) {
    res.innerText = "Computer Won 😜!";
    cs++;
    comp.innerText = "" + cs;
  }
  //   console.log(cs);
  //   console.log(us);
  //   console.log(comp);
  //   console.log(user);
}
