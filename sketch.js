var bullet
var thickness
var wall
var speed
var weight

function setup() {
  createCanvas(1300,900);
  bullet = createSprite(100, 200, 20, 100);
  bullet.shapecolor="white";

  wall =createSprite(900 , 350, 500 , 500)
  wall.shapecolor(80,80,80)

}

function draw() {
  background(0);  
  drawSprites();
}


if (hasCollided(bullet , wall)){

  bullet.velocityX=0

  var damage=0.5 * weight* seed * seed/(thickness*thickness*thickness)


  if(damage>10){
    wall.shapecolor=color(255,0,0)
  }

  if(damage<10){
    wall.shapecolor=color(0,255,0)
  }
}





function hasCollided(bullet , wall){

  bulletRightEdge=bullet.x + bullet.width
  wallLeftEdge=wall.x

  if(bulletRightEdge>=wallLeftEdge){

    return true
  }

  return false
}