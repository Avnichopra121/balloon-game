var ground, ground1;
var bow, bow1;
var gbaloons, baloon1;
var pbaloons, baloon2;
var bbaloons, baloon3;
var rbaloons, baloon4;
var arow, arrow1;

var score=0;

function preload()
{
bow1 = loadImage("bow0.png");
 
ground1 = loadImage("background0.png");
  
baloon1 = loadImage("green_balloon0.png");
  
baloon2 = loadImage("pink_balloon0.png");
  
baloon3 = loadImage("blue_balloon0.png");
  
baloon4 = loadImage("red_balloon0.png");
  
arrow1 = loadImage("arrow0.png");
}

function setup() {
  
  createCanvas(400, 400);
  
//creating background
  ground = createSprite(0,0,600,600);
  ground.addImage(ground1);
  ground.scale = 2
  
  // creating bow to shoot arrow
 //creating bow sprite
bow = createSprite(350,200,20,20);
bow.addImage(bow1);
}

function draw() {
//for clearing the screen
background(220);
  
 ground.velocityX=-4;
//to lookslike that the baloons are moving
  
  if(ground.x < 0)
  {
    ground.x=ground.width /2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow =  spawnArrow();
    temp_arrow.addImage(arrow1);
     temp_arrow.y = bow.y;
  }
  
//for displaying the sprites
drawSprites();

  var select_baloon = Math.round(random(1,4));
  console.log(select_baloon);
  
  if(World.frameCount % 80 == 0)
    {
      if(select_baloon == 1)
        {
          redBalloon();
        }else if (select_baloon == 2) {
          greenBalloon();
        }else if (select_baloon == 3) {
          blueBalloon();
        }else {
          pinkBalloon();
        }
    }
    
  //displaying score
  text("Score: " + score, 270, 30);
}

// Creating  arrows for bow
function spawnArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}

function redBalloon() 
{
  rbaloons = createSprite(0,Math.round(random(20 , 370)),10,10);
  rbaloons.addImage(baloon4);
  rbaloons.velocityX = 3;
  rbaloons.lifetime = 150;
  rbaloons.scale = 0.1;
}

function greenBalloon() 
{
  gbaloons = createSprite(0,Math.round(random(20 , 370)),10,10);
  gbaloons.addImage(baloon1);
  gbaloons.velocityX = 3;
  gbaloons.lifetime = 150;
  gbaloons.scale = 0.1;
}


function pinkBalloon() 
{
  pbaloons = createSprite(0,Math.round(random(20 , 370)),10,10);
  pbaloons.addImage(baloon2);
  pbaloons.velocityX = 3;
  pbaloons.lifetime = 150;
  pbaloons.scale = 0.8;
}

function blueBalloon() 
{
  bbaloons = createSprite(0,Math.round(random(20 , 370)),10,10);
  bbaloons.addImage(baloon3);
  bbaloons.velocityX = 3;
  bbaloons.lifetime = 150;
  bbaloons.scale = 0.1;
}