
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var leftCountPara = document.querySelector('p');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
let balls = []

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

function randomColor() {
    return 'rgb(' +
           random(0, 255) + ', ' +
           random(0, 255) + ', ' +
           random(0, 255) + ')';
}

function Shape(x,y,velX,velY,exists){
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.exists = exists
}

function Ball(x,y,velX,velY,exists,color,size) {
  Shape.call(this,x,y,velX,velY,exists)
  this.color = color
  this.size = size
}

Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.draw = function(){
  if(this.exists){  
    ctx.beginPath()
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
    ctx.fill()
  }
}

Ball.prototype.update = function(){
  if((this.x+this.size)>=width){
    this.velX = -(this.velX);
  }
  if((this.x - this.size)<=0){
    this.velX = -(this.velX);
  }

  if((this.y+this.size)>=height){
    this.velY = -(this.velY);
  }
  if((this.y - this.size)<=0){
    this.velY = -(this.velY);
  }

  this.x += this.velX
  this.y += this.velY
}

Ball.prototype.collisionDetect = function(){
  for(let j=0;j<balls.length;j++){
    let curBall = balls[j]
    if( (this!==curBall) ){
      var dx = this.x - curBall.x;
      var dy = this.y - curBall.y;
      var distance = Math.sqrt(dx*dx + dy*dy)

      if(distance < this.size+ curBall.size){
        curBall.color = this.color = randomColor()
      }
    }
  }
}

function EvilCircle(x,y,velX,velY,exists){
  Shape.call(this,x,y,velX,velY,exists)
  this.color = "white",
  this.size = 10
}
EvilCircle.prototype = Object.create(Shape.prototype)
EvilCircle.prototype.constructor = EvilCircle

EvilCircle.prototype.draw=function(){

  ctx.beginPath()
  ctx.strokeStyle = this.color
  ctx.lineWidth = 3
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
  ctx.stroke()
}


EvilCircle.prototype.update = function(){
  if((this.x+this.size)>=width){
    this.velX = -(this.velX);
  }
  if((this.x - this.size)<=0){
    this.velX = -(this.velX);
  }

  if((this.y+this.size)>=height){
    this.velY = -(this.velY);
  }
  if((this.y - this.size)<=0){
    this.velY = -(this.velY);
  }
}

EvilCircle.prototype.collisionDetect = function(){
  for(let j=0;j<balls.length;j++){
    let curBall = balls[j]
    if( (this!==curBall) ){
      var dx = this.x - curBall.x;
      var dy = this.y - curBall.y;
      var distance = Math.sqrt(dx*dx + dy*dy)

      if(distance < this.size+ curBall.size){
        // curBall.color = this.color = randomColor()
        curBall.exists = false;
      }
    }
  }
}

EvilCircle.prototype.setControls=function(){
  window.onkeydown = e => {
    if (e.key === 'a') {
      this.x -= this.velX;
    } else if (e.key === 'd') {
      this.x += this.velX;
    } else if (e.key === 'w') {
      this.y -= this.velY;
    } else if (e.key === 's') {
      this.y += this.velY;
    }
  };
}


function calcLeftBallCount(){
  let totalAliveCount = 0
  balls.map(function(ball){
    if(ball.exists){
      totalAliveCount++
    }
  })
  return totalAliveCount
}


let evilCircle = new EvilCircle(
  100,
  100,
  5,
  5,
  true
)

evilCircle.setControls()


function loop(){
  //清理画布
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while(balls.length<25){
    
    let ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      true,
      randomColor(),
      random(10,20)
      )
      balls.push(ball)
  }
  
  leftCountPara.textContent = "剩余"+calcLeftBallCount()+"个小球"
  for(let i=0;i<balls.length;i++){
    let ball = balls[i]
    ball.draw()
    ball.update()
    ball.collisionDetect()
  }
  evilCircle.draw()
  evilCircle.update()
  evilCircle.collisionDetect()


  requestAnimationFrame(loop)
}

loop()

