var trex, trexRunning, trexCollided, ground, groundImage, invisbleGround, cloudGroup, obstaclesGroup, cloudImg, obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img;

function preload(){
  
  trexRunning = loadAnimation("trex1.png","trex3.png", "trex4.png");
  
  trexCollided = loadImage ("trex_collided.png");

  groundImage = loadImage ("ground2.png");
  
  cloudImg = loadImage ("cloud.png");
  
  obstacle1Img = loadImage ("obstacle1.png");
  
  obstacle2Img = loadImage ("obstacle2.png");
  
  obstacle3Img = loadImage ("obstacle3.png");
  
  obstacle4Img = loadImage ("obstacle4.png");

  obstacle5Img = loadImage ("obstacle5.png");

  obstacle6Img = loadImage ("obstacle6.png");
}


function setup() {
  
  createCanvas(600, 200);
  
  trex = createSprite (50, 180, 10,10);
  trex.addAnimation ("running", trexRunning);
  trex.scale = 0.5
  
  ground = createSprite (300, 180, 600, 20)
  ground.addImage ("ground", groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite (300,190,600,10);
  invisibleGround.visible = false;
  
  cloudGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
  background("white");
  
  trex.collide (invisibleGround);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if (keyDown("space") && trex.y >=150) {
      trex.velocityY = -10;
  }
  
  spawnClouds();
  spawnObstacles();
  
  trex.velocityY = trex.velocityY + 0.8;
  drawSprites();
}

function spawnClouds() {
  if (frameCount % 60 == 0) {
      var cloud = createSprite (600, 150, 10,10);
      cloud.addImage (cloudImg);
      cloud.scale = 0.5;
      cloud.velocityX = -5;
      cloud.y = Math.round(random(80,120));
      cloud.lifetime = 125;
    
      cloudGroup.add(cloud);      
    
      cloud.depth = trex.depth;
      trex.depth = trex.depth +  1;
  
  }

}

function spawnObstacles() {
  if (frameCount % 80 == 0) {
      var obstacle = createSprite (600, 165,10, 10 );  
      
      obstacle.velocityX = -4;
      obstacle.lifetime = 155;
    
      var rand = Math.round(random(1,6));    
        switch(rand) {
            
          case 1 : obstacle.addImage(obstacle1Img);  
                  break;
          case 2 : obstacle.addImage(obstacle2Img);  
                  break;
          case 3 : obstacle.addImage(obstacle3Img);  
                  break;
          case 4 : obstacle.addImage(obstacle4Img);  
                  break;
          case 5 : obstacle.addImage(obstacle5Img);  
                  break;        
          case 6 : obstacle.addImage(obstacle6Img);  
                  break;
          default : break;

        }
    
      obstacle.scale = 0.5;
    
      obstaclesGroup.add(obstacle);
  }
}