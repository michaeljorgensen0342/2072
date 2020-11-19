
const SCL = 5; // pixel-scale of each tile
const height = 500;
const width = 500;
// var player1, player2;
let players = []

function setup() {
  createCanvas(width, height);

  frameRate(15);

  /* initialize players */
  // player1 = new Bike(50 / SCL, height / 2 / SCL, 1, 0, color("#0000FF"));
  players.push(new Bike(50 / SCL, height / 2 / SCL, 1, 0, color("#0000FF")))
  // player2 = new Bike((width - 50) / SCL, height / 2 / SCL, -1, 0, color("#FF0000"));
  players.push(new Bike((width - 50) / SCL, height / 2 / SCL, -1, 0, color("#FF0000")))
  console.log(players)


     players.push(new Bike(99, 0, -1, 1, color("#00FFFF ")))
     players.push(new Bike(99, 99, -1, -1, color("#00FFFF ")))
     players.push(new Bike(25, 0, -1, 1, color("#00FFFF ")))
     players.push(new Bike(50, 0, -1, 1, color("#00FFFF ")))
     players.push(new Bike(75, 0, -1, 1, color("#00FFFF ")))
     players.push(new Bike(99, 25, -1, 1, color("#00FFFF ")))
     players.push(new Bike(99, 50, -1, 1, color("#00FFFF ")))
     players.push(new Bike(99, 75, -1, 1, color("#00FFFF ")))
     players.push(new Bike(99, 75, -1, -1, color("#00FFFF ")))
     players.push(new Bike(99, 50, -1, -1, color("#00FFFF ")))
     players.push(new Bike(99, 25, -1, -1, color("#00FFFF ")))
     players.push(new Bike(75, 99, -1, -1, color("#00FFFF ")))
     players.push(new Bike(50, 99, -1, -1, color("#00FFFF ")))
     players.push(new Bike(25, 99, -1, -1, color("#00FFFF ")))
     players.push(new Bike(25, 0, 1, -1, color("#00FFFF ")))
     players.push(new Bike(50, 0, 1, -1, color("#00FFFF ")))
     players.push(new Bike(75, 0, 1, -1, color("#00FFFF ")))
     players.push(new Bike(99, 25, 1, -1, color("#00FFFF ")))
     players.push(new Bike(99, 50, 1, -1, color("#00FFFF ")))
     players.push(new Bike(99, 75, 1, -1, color("#00FFFF ")))

 
  console.log(players)

}

function draw() {
  background(51);

  handlePlayers();
}

/**
 * update, draw, and check collision with players
 */
function handlePlayers() {
for(let i = 0; i < players.length; i++){
  players[i].update();
  players[i].draw();
}
  /* update players */
  // players[0].update();
  // players[1].update();

  /* draw players */
  // players[0].draw();
  // players[1].draw();

  /* check collision */
  if ((players[0].collidesWith(players[1].trail) && players[1].collidesWith(players[0].trail)) ||
    (players[0].collidesWith(players[0].trail) && players[1].collidesWith(players[1].trail)) ||
    (players[0].collidesWithBounds() && players[1].collidesWithBounds())) {

    // both players died at the same time

    endGame("Draw!");
  } else if (players[0].collidesWith(players[1].trail) ||
    players[0].collidesWithBounds() || players[0].collidesWith(players[0].trail)) {

    // if players[] hits players[1] or the side
    // or if players[1] hits themself

    endGame("Red wins!");
  } else if (players[1].collidesWith(players[0].trail) ||
    players[1].collidesWithBounds() || players[1].collidesWith(players[1].trail)) {

    // if players[1] hits players[] or the side
    // or if players[] hits themself

    endGame("Blue wins!");
  }
}

/**
 * handles player input
 * players[] = W, A, S, & D
 * players[1] = UP, LEFT, DOWN, & RIGHT
 */
function keyPressed() {

  switch (keyCode) {

    case 37:
      players[1].setVelocity(createVector(-1, 0));
      break;

    case 38:
      players[1].setVelocity(createVector(0, -1));
      break;

    case 39:
      players[1].setVelocity(createVector(1, 0));
      break;

    case 40:
      players[1].setVelocity(createVector(0, 1));
      break;

    case 65:
      players[0].setVelocity(createVector(-1, 0));
      break;

    case 87:
      players[0].setVelocity(createVector(0, -1));
      break;

    case 68:
      players[0].setVelocity(createVector(1, 0));
      break;

    case 83:
      players[0].setVelocity(createVector(0, 1));
      break;

  }
}

/**
 * ends the game, displays the outcome
 */
function endGame(winner) {

  noStroke();
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text(winner, width / 2, height / 2);
  noLoop();
}
