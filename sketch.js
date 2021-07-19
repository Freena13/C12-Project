var garden,rabbit;
var gardenImg,rabbitImg;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
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

  var select_sprites = math.round(random(1,2));
  if (frameCount % 80 == 0)
  {
    if (select_sprite == 1)
    {
      createApples();
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
  apple.addImage(apple.png);
  apple.velocityY = -3
  apple.lifetime = 125;
  apple.scale = 0.1;
}

function createLeaves()
{
  leaves = createSprite(random(60,320),40,10,10);
  leaves.addImage(leaf.png);
  leaves.velocityY = -3;
  leaves.lifetime = 125;
  leaves.scale = 0.1;
}