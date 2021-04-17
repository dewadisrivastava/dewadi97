var boy,boyImage,boyImage2
var road,roadImage
var obstacle,obstaclesGroup,obstacleImage
var obstacle2,obstacles2Group,obstacle2Image
var obstacle3,obstacles3Group,obstacle3Image
var opponent2,opponents2Group,opponent2Image,opponent2Image2
var sound
var distance
var PLAY=1
var END=0
 gameState=PLAY
var gameOver,gameOverImage
var reset
function preload(){
  boyImage=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png")
  roadImage=loadAnimation("images/Road.png")
  obstacleImage=loadAnimation("images/obstacle1.png")
  obstacle2Image=loadAnimation("images/obstacle2.png")
  obstacle3Image=loadAnimation("images/obstacle3.png")
  
  opponent2Image=loadAnimation("images/opponent4.png","images/opponent5.png")

  sound=loadSound("sound/bell.mp3")
  
  
  boyImage2=loadAnimation("images/mainPlayer3.png")
  opponent2Image2=loadAnimation("images/opponent6.png")
  gameOverImage=loadAnimation("images/gameOver.png")
}

function setup(){
  createCanvas(1300,400)
  road=createSprite(200,150)
  road.addAnimation("road",roadImage)
  
  boy=createSprite(200,200)
  boy.addAnimation("boy",boyImage)
  boy.scale=0.1
  distance=0

  obstaclesGroup=new Group()
  obstacles2Group=new Group()
  obstacles3Group=new Group()
opponentsGroup=new Group()
  opponents2Group=new Group()
  
  gameOver=createSprite(200,200)
  gameOver.addAnimation("gameOver",gameOverImage)
  reset=createSprite(300,300,30,30)
}

function draw(){
  background(220)
  drawSprites()
  if(gameState===PLAY){
    
   
     road.velocityX=-6

    if(distance%200===0){
    sound.play() 
     }
 

 
    
    if(opponents2Group.isTouching(boy)){
      opponent2.addAnimation("opponent2",opponent2Image2)
      boy.addAnimation("boy",boyImage2)
       road.velocityX=0
      gameState=END
      
      if(obstaclesGroup.isTouching(boy)){
     gameState=END
     boy.addAnimation("boy",boyImage2)
     road.velocityX=0
   }
   if(obstacles2Group.isTouching(boy)){
     gameState=END
     boy.addAnimation("boy",boyImage2)
     road.velocityX=0
   }
   if(obstacles3Group.isTouching(boy)){
     gameState=END
     boy.addAnimation("boy",boyImage2)
     road.velocityX=0
   }
    }
    gameOver.visible=false
    reset.visible=false
  }else if(gameState===END){
     
  opponentsGroup.setVelocityXEach(0)  
    opponentsGroup.setLifetimeEach(-1)
     opponents2Group.setVelocityXEach(0)  
    opponents2Group.setLifetimeEach(-1)
    
   
     obstaclesGroup.setVelocityXEach(0)
     obstaclesGroup.setLifetimeEach(0)
    
     obstacles2Group.setVelocityXEach(0)
     obstacles2Group.setLifetimeEach(0)
    
     obstacles3Group.setVelocityXEach(0)
     obstacles3Group.setLifetimeEach(0)
    
    
    
    
    gameOver.visible=true
    reset.visible=true
    if(mousePressedOver(reset)){
      gameState=PLAY
      distance=0
    opponentsGroup.destroyEach()
      opponents2Group.destroyEach()
       obstaclesGroup.destroyEach()
      obstacles2Group.destroyEach()
       obstacles3Group.destroyEach()
      
      boy.addAnimation("boy",boyImage)
    }
  }
  
  boy.y=mouseY
  text("distance:"+distance,270,30)
 if(road.velocityX===-6){
    distance=distance+1
 }
   
 
    if(road.x<200){
    road.x=1300
    }
  
  cyclist2()
  obstacles()
  obstacles1()
  obstacles2()
}


function cyclist2(){
  if(frameCount%600===0){
     opponent2=createSprite(1200,100)
  opponent2.addAnimation("opponent2",opponent2Image)
  opponent2.scale=0.1
    opponent2.velocityX=-4
    opponent2.y=Math.round(random(30,160))
     opponents2Group.add(opponent2)
  }
}
function obstacles(){
if(frameCount%300===0)  {
  obstacle=createSprite(1200,100)
  obstacle.addAnimation("obstacle",obstacleImage)
  obstacle.scale=0.15
  obstacle.velocityX=-2
  obstacle.y=Math.round(random(200,100))
  obstaclesGroup.add(obstacle)
}
}

function obstacles1(){
if(frameCount%600===0)  {
  obstacle2=createSprite(1200,600)
  obstacle2.addAnimation("obstacle2",obstacle2Image)
  obstacle2.scale=0.15
  obstacle2.velocityX=-2
  obstacle2.y=Math.round(random(200,100))
  obstacles2Group.add(obstacle2)
}
}
function obstacles2(){
  if(frameCount%900===0){
    obstacle3=createSprite(1200,200)
  obstacle3.addAnimation("obstacle3",obstacle3Image)
  obstacle3.scale=0.15 
    obstacle3.velocityX=-3
    obstacles3Group.add(obstacle3)

  }
}