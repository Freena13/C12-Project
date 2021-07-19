var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaves,leavesImg

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
  grassImg = loadImage("grass.png");
  redLeavesImg = loadImage("redImage.png");
  orangeLeavesImg = loadImage("orangeLeaf.png");
}

function setup()
{
  
  createCanvas(400,400);
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

}


function draw() 
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,4));
  if (frameCount % 80 == 0)
  {
    if (select_sprites == 1)
    {
      createApples();
    }
    else if(select_sprites == 2)
    {
      createLeavesRed();
    }
    else if(select_sprites == 3)
    {
      createLeavesOrange();
    }
    else
    {
      createLeaves();
    }
    
    
  }


  rabbit.x = mouseX;

  drawSprites();
}

function createApples()
{
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY = 3
  apple.lifetime = 125;
  apple.scale = 0.1;
}

function createLeaves()
{
  leaves = createSprite(random(60,320),40,10,10);
  leaves.addImage(leavesImg);
  leaves.velocityY = 3;
  leaves.lifetime = 125;
  leaves.scale = 0.1;
}

function createLeavesRed()
{
  leavesRed = createSprite(random(60,320),40,10,10);
  leavesRed.addImage(redLeavesImg);
  leavesRed.velocityY = 3;
  leavesRed.lifetime = 125;
  leavesRed.scale = 0.1;
}

function createLeavesOrange()
{
  leavesOrange = createSprite(random(60,320),40,10,10);
  leavesOrange.addImage(orangeLeavesImg);
  leavesOrange.velocityY = 3;
  leavesOrange.lifetime = 125;
  leavesOrange.scale = 0.1;
}

