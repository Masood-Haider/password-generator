
var char =
  "1234567890asdfghjklqwertyuiopzxcvbnmqwertyuiopQWERTYUIOPASDFGHJKLZXCVBNM";

function random() {
    var password = "";
  let num1 = document.getElementById("number").value;

  for (let i = 0; i < num1; i++) {
    let next = char.charAt(Math.floor(Math.random() * char.length));
    password = password + next;
  }

  document.getElementById("generated").value = password;
}

