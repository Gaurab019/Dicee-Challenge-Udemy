function get_image(value) {
  console.log(value);
  switch (value) {
    case 1:
      return "/images/dice1.png";
    case 2:
      return "/images/dice2.png";
    case 3:
      return "/images/dice3.png";
    case 4:
      return "/images/dice4.png";
    case 5:
      return "/images/dice5.png";
    case 6:
      return "/images/dice6.png";
  }
}

function runGame() {
  let player1value = Math.floor(Math.random() * 6 + 1);
  let player2value = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".img1").setAttribute("src", get_image(player1value));
  document.querySelector(".img2").setAttribute("src", get_image(player2value));

  document.querySelector("h1").classList.add("smallerendGameText");

  if (player1value > player2value) {
    document.querySelector("h1").textContent = "🚩 Player 1 wins";
    document.querySelector("h1").classList.add("smallerendGameText");
  } else if (player1value === player2value) {
    document.querySelector("h1").textContent = "🚩 Everyone wins 🚩";
  } else {
    document.querySelector("h1").textContent = "🚩 Player 2 wins";
  }
}

document.querySelector(".newbutton").addEventListener("click", runGame);
