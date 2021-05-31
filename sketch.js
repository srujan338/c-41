var canvas, backgroundImage;
var xVel,yVel,xSet;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var track,ground;
var form, player, game;
var car1_img,car2_img,car3_img,car4_img;
var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage('images/track.jpg');
  ground = loadImage('images/ground.png');
  car1_img = loadImage('images/car1.png');
  car2_img = loadImage('images/car2.png');
  car3_img = loadImage('images/car3.png');
  car4_img = loadImage('images/car4.png');
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  gameState=0;
  distance = 0;
  //finsihedPlayers = 0;
  xVel = 0;
  yVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(200,200,255);
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    console.log('end');
  }
}
