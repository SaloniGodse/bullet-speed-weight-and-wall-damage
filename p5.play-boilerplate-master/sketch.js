var bullet, wall, thickness;
var weight, speed;

function setup() {
  createCanvas(1200,400);
  
  bullet = createSprite(100, 200, 50, 25);
  bullet.shapeColor = color(255,69,0);

  weight = random(30,52);
  speed = random(223,321);
  thickness = random(22,83)
  bullet.velocityX = speed;

  wall = createSprite(900,200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(249,228,183);  

  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage >= 10){
      wall.shapeColor = color(135,206,235);
    }
    if(damage < 10) {
      wall.shapeColor = color(221,160,221);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}