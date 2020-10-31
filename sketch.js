
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground;
var survivalTime, score;


function preload()
{  
  monkey_running =  loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png"); 
  
  survivalTime = 0;
  score = 0;
}



function setup() 
{
  createCanvas(600, 400);

  ground = createSprite(300, 350, 1200, 10);
  ground.x = ground.width / 2;
  
  monkey = createSprite(50, 300, 20, 50);
  monkey.addAnimation("monkeylabel", monkey_running);
  monkey.scale = 0.1;
  
  // Create Groups
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() 
{
  background(96);
  
  //Move the ground
  ground.velocityX = -4;
  if (ground.x < 0)
  {
      ground.x = ground.width/2;
  }
                           
  // If space key, monkey should jump with gravity
  if (keyDown("space") && monkey.y > 200)
    {
      monkey.velocityY = - 12;
    }  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
   if (World.frameCount % 80 == 0) 
     {
       createBananas();
     }
  
  if (World.frameCount % 300 == 0) 
    {
      createObstacles();
    }
  
  
  drawSprites();
  
  // Scoring 
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
    //Display Score
    stroke("white");
    textSize(20);
    fill("white");
    text("Score : "+ score, 500,50);
  
   //Display survivalTime 
  stroke("black");
  textSize(20);
  fill("black");
  text("Svrvival Time : "+ survivalTime, 100,50);  
  
}

function createBananas()
{
    banana = createSprite(600, Math.round(random(120 , 200)), 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale = 0.08;
    bananaGroup.add(banana);
}

function createObstacles()
{
    obstacle = createSprite(600, 330, 10, 10);
    obstacle.addImage(obstaceImage); 
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.08;
    obstacleGroup.add(obstacle);
  
}




