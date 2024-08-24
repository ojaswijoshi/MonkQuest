function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie';
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'You Won Level 3 will start in 3 Seconds...';
    setInterval(() => {
      window.open("../../level_3.html");
      window.close("index.html");
    }, 3000);
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'You Loose!!! Restarting the game in 3 seconds....';
    setInterval(() => {
      window.open("../../level_2.html");
      window.close("index.html");
    }, 3000);
  }
}
