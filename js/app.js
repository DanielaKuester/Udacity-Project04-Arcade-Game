// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
		this.x = x;
		this.y = y;
		this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
		enemyOne.x += 0.4;
		enemyTwo.x += 0.2;
		enemyThree.x += 0.3;
		enemyFour.x += 0.2;
		enemyFive.x += 0.3;
		enemySix.x += 0.1;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemyOne = new Enemy(100, 60, 15);
var enemyTwo = new Enemy(300, 60, 15);
var enemyThree = new Enemy(0, 145, 15);
var enemyFour = new Enemy(200, 145, 15);
var enemyFive = new Enemy(100, 228, 15);
var enemySix = new Enemy(400, 228, 15);

// Push enemies into array allEnemies to make them appear on screen
allEnemies.push(enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix);

// Place the player object in a variable called player
var Player = function(x, y, speed) {
		this.sprite = 'images/char-boy.png';
		this.x = x;
		this.y = y;
		this.speed = speed;
};

var player = new Player(200, 400, 10);

player.update = function() {

};

player.render = function() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Insert switch to determine what happens when a key is pressed; switch credits:
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/switch
player.handleInput = function (pressKey) {
		switch (pressKey) {
				// Press the left key to move the player one step left on the x-axis
				case "left":
						// They player can only move left when (s)he is not in the ultimate
						// left column
						if (this.x >= 100) {
								this.x -= 100;
						}
						else {
								return;
						}
						break;
				// Press the right key to move the player one step right on the x-axis
				case "right":
						// They player can only move right when (s)he is not in the ultimate
						// right column
						if (this.x <= 300) {
								this.x += 100;
						}
						else {
								return;
						}
						break;
				// Press the up key to move the player one step up on the y-axis
				case "up":
						// They player can only move up when (s)he is not in the top row
						if (this.y >= 68) {
								this.y -= 82;
						}
						else {
								return;
						}
						break;
				// Press the down key to move the player one step down on the y-axis
				case "down":
						// They player can only move down when (s)he is not in the bottom row
						if (this.y < 400) {
								this.y += 82;
						}
						else {
								return;
						}
						break;
				default:
						return;
		}
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
