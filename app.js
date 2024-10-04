//let preference = prompt("Do you like cheese? (y/n)");

let answer = prompt("Do you like cheese? (yes/no)");

if (answer === "yes") {
  alert("That was a mature answer ;)");
} else if (answer === "no") {
  alert("That was an immature answer :(");
} else {
  alert("Please answer with either 'yes' or 'no'.");
}
