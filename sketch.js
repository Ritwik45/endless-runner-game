let ground;
let player;
let gameState = 0;
let frames = 0;
let enemies, enemy;
let resetButton;

function preload() {}
function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 5;

  ground = new Sprite();
  ground.color = "rgb(47,223,47)";
  ground.height = 200;
  ground.width = 2000;
  ground.y = 650;
  ground.collider = "kinematic";

  player = new Sprite();
  player.height = 200;
  player.width = 100;
  player.x = 20;
  player.y = 350;
  player.collider = "dynamic";
  player.rotationLock = true;
  player.color = "white";

  enemies = new Group();
  enemies.width = player.width;
  enemies.height = player.height / 2;
  enemies.collider = player.collider;
  enemies.rotationLock = true;
  enemies.color = "grey";
  enemies.life = 300;
  enemies.vel.x = -9;
}
function draw() {
  clear();
  background(22);

  frames++;

  if (frames % 180 === 0) {
    enemy = new enemies.Sprite();
  }

  if (kb.presses("space")) {
    movements();
  }

  if (ground.x < 0) {
    ground.x = 0;
  }

  player.collides(ground);

  player.vel.x = 0.00001;

  camera.x = player.x;

  ground.vel.x = -6;

  if (player.x > ground.x + 50 || player.x < ground.x + 50) {
    player.x = ground.x + 50;
  }

  if (player.collides(enemies)) {
    end()
  }
}

function movements() {
  player.vel.y = -5;
}

function end() {
  player.life = 1;
  enemies.life = 0;
  ground.vel.x = 0

  resetButton = new Sprite();
  resetButton.height = 50;
  resetButton.width = 50;
  resetButton.img = "reset.png";
  resetButton.collider = 'static'
  resetButton.scale = 0.1
  resetButton.x = 60
}
