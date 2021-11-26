
function setup() {
  createCanvas(1920,1025);
  background(51);
  box = createSprite(1920/2,1025/2,30,30);
}

function draw() 
{
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
  }
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

  drawSprites();
}

