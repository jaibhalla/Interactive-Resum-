let c = document.querySelector('canvas').getContext('2d')
let canvasHeight = 650
let canvasWidth = 1250
c.canvas.height = canvasHeight*2
c.canvas.width = canvasWidth*2
c.canvas.style.height = (c.canvas.height/2).toString().concat('px')
c.canvas.style.width = (c.canvas.width/2).toString().concat('px')
c.scale(2,2)


let checker = 0
let cubeSize = 50
let displayNone = false
let isPaused = false
let movementSpeed = cubeSize
let step = 0
let level = 0

let openChecker = false
let aboutPage = document.getElementById('aboutPage')
let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')

interactive.addEventListener("click",start)

function start(){
  let game = setInterval(gameLoop,75)
  c.canvas.style.zIndex = "1"
  snake[0].x = [24*cubeSize,23*cubeSize,22*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,21*cubeSize,20*cubeSize,19*cubeSize,18*cubeSize,17*cubeSize,16*cubeSize,15*cubeSize,15*cubeSize,14*cubeSize,13*cubeSize,12*cubeSize,11*cubeSize,10*cubeSize,9*cubeSize,8*cubeSize,7*cubeSize,6*cubeSize,5*cubeSize,4*cubeSize]
  snake[0].y = [1*cubeSize,1*cubeSize,1*cubeSize,1*cubeSize,2*cubeSize,3*cubeSize,4*cubeSize,5*cubeSize,6*cubeSize,7*cubeSize,8*cubeSize,8*cubeSize,8*cubeSize,8*cubeSize,8*cubeSize,8*cubeSize,8*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize,7*cubeSize]
}

function gameLoop(){
  c.clearRect(0,0,canvasWidth,canvasHeight)
  boundary()
  if(interactive.style.display == "none"){
    c.drawImage(imageName,280,240)
  }
  drawPages()
  drawSnake()
  togglePages()
  checker++
  if(checker > 27 && displayNone == false){
    instructionsdiv.style.display = "block"
    instructionsdiv.style.zIndex = "3"
    c.canvas.style.borderColor = highlightColor
  }
}

var snake = []
snake[0] = {
  x : [],
  y : []
}

var addSnake = function(x,y){
  this.x = x
  this.y = y
}

snake[1] = new addSnake(24*cubeSize,1*cubeSize)
snake[2] = new addSnake(24*cubeSize,1*cubeSize)
snake[3] = new addSnake(24*cubeSize,1*cubeSize)
snake[4] = new addSnake(24*cubeSize,1*cubeSize)
snake[5] = new addSnake(24*cubeSize,1*cubeSize)
snake[6] = new addSnake(24*cubeSize,1*cubeSize)
snake[7] = new addSnake(24*cubeSize,1*cubeSize)
snake[8] = new addSnake(24*cubeSize,1*cubeSize)
snake[9] = new addSnake(24*cubeSize,1*cubeSize)

let realSnake = []

realSnake[0] = {
  x:8*cubeSize,
  y:1*cubeSize,
  dx:movementSpeed,
  dy:0
}
realSnake[1] = new addSnake(7*cubeSize,1*cubeSize)
realSnake[2] = new addSnake(6*cubeSize,1*cubeSize)
realSnake[3] = new addSnake(5*cubeSize,1*cubeSize)
realSnake[4] = new addSnake(4*cubeSize,1*cubeSize)
realSnake[5] = new addSnake(3*cubeSize,1*cubeSize)
realSnake[6] = new addSnake(2*cubeSize,1*cubeSize)
realSnake[7] = new addSnake(1*cubeSize,1*cubeSize)

function drawSnake(){
  if (displayNone == false){
    c.fillStyle = highlightColor
    c.fillRect(snake[0].x[step],snake[0].y[step],cubeSize,cubeSize)
    c.strokeRect(snake[0].x[step],snake[0].y[step],cubeSize,cubeSize)
    c.lineWidth = 2
    c.strokeStyle = "black"
    c.fillRect(snake[1].x,snake[1].y,cubeSize,cubeSize)
    c.strokeRect(snake[1].x,snake[1].y,cubeSize,cubeSize)
    for(let i = snake.length-1; i>1;i--){
      c.fillRect(snake[i].x,snake[i].y,cubeSize,cubeSize)
      c.strokeRect(snake[i].x,snake[i].y,cubeSize,cubeSize)
      if(checker<27){
        snake[i].x = snake[i-1].x
        snake[i].y = snake[i-1].y
      }
    }
    if(checker<27){
      snake[1].x = snake[0].x[step]
      snake[1].y = snake[0].y[step]
      step++
    }
  }
  else{
    for(let i = realSnake.length-1; i>=1;i--){
      c.fillStyle = "#ffffff"
      c.fillRect(realSnake[i].x,realSnake[i].y,cubeSize,cubeSize)
      c.strokeRect(realSnake[i].x,realSnake[i].y,cubeSize,cubeSize)
      if(isPaused == false){
        realSnake[i].x = realSnake[i-1].x
        realSnake[i].y = realSnake[i-1].y
      }
    }
    c.fillStyle = "#ffffff"
    c.fillRect(realSnake[0].x,realSnake[0].y,cubeSize,cubeSize)
    c.strokeRect(realSnake[0].x,realSnake[0].y,cubeSize,cubeSize)
    if(isPaused == false){
      realSnake[0].x += realSnake[0].dx
      realSnake[0].y += realSnake[0].dy
    }
  }
}

window.addEventListener("keydown",check)

function check(ev){
  keycode = ev.keyCode
  if(keycode == 39 && realSnake[0].dx != -movementSpeed){//right
    realSnake[0].dx = movementSpeed
    realSnake[0].dy = 0
  }
  else if(keycode == 37 && realSnake[0].dx != movementSpeed){//left
    realSnake[0].dx = -movementSpeed
    realSnake[0].dy = 0
  }
  else if(keycode == 38 && realSnake[0].dy != movementSpeed){//up
    realSnake[0].dx = 0
    realSnake[0].dy = -movementSpeed
  }
  else if(keycode == 40 && realSnake[0].dy != -movementSpeed){//down
    realSnake[0].dx = 0
    realSnake[0].dy = movementSpeed
  }
  else if(keycode == 32){ //SpaceBar
    if(isPaused == true){
      isPaused = false
    }
    else{
      isPaused = true
    }
  }
}

function addPages(x,y,color){
  this.x = x
  this.y = y

}

let aboutPageBlock = new addPages(150,150,)
let page1Block = new addPages(1000,300,)
let page2Block = new addPages(550,400,)
let page3Block = new addPages(1100,100,)

function drawPages(){
  if(displayNone == true){
    c.fillStyle = c.canvas.style.borderColor
    c.strokeStyle = "black"
    c.fillRect(aboutPageBlock.x,aboutPageBlock.y,cubeSize,cubeSize)
    c.strokeRect(aboutPageBlock.x,aboutPageBlock.y,cubeSize,cubeSize)
    c.fillRect(page1Block.x,page1Block.y,cubeSize,cubeSize)
    c.strokeRect(page1Block.x,page1Block.y,cubeSize,cubeSize)
    c.fillRect(page2Block.x,page2Block.y,cubeSize,cubeSize)
    c.strokeRect(page2Block.x,page2Block.y,cubeSize,cubeSize)
    c.fillRect(page3Block.x,page3Block.y,cubeSize,cubeSize)
    c.strokeRect(page3Block.x,page3Block.y,cubeSize,cubeSize)
  }
}

function togglePages(){
  if(realSnake[0].x == aboutPageBlock.x && realSnake[0].y == aboutPageBlock.y){
    isPaused = true
    aboutPage.style.display = "block"
    aboutPage.style.opacity = "1"
    aboutPage.style.zIndex = "3"
    aboutPage.addEventListener("click",closePages)
  }
  else if(realSnake[0].x == page1Block.x && realSnake[0].y == page1Block.y){
    isPaused = true
    page1.style.display = "block"
    page1.style.opacity = "1"
    page1.style.zIndex = "3"
    page1.addEventListener("click",closePages)
  }
  else if(realSnake[0].x == page2Block.x && realSnake[0].y == page2Block.y){
    isPaused = true
    page2.style.display = "block"
    page2.style.opacity = "1"
    page2.style.zIndex = "3"
    page2.addEventListener("click",closePages)
  }
  else if(realSnake[0].x == page3Block.x && realSnake[0].y == page3Block.y){
    isPaused = true
    page3.style.display = "block"
    page3.style.opacity = "1"
    page3.style.zIndex = "3"
    page3.addEventListener("click",closePages)
  }

}

function closePages(){
  isPaused = false
  this.style.display = "none"
  this.style.opacity = "0"
  this.style.zIndex = "0"
  changeHighlightColor()
}



function boundary(){
  if(realSnake[0].x + cubeSize > canvasWidth){
    realSnake[0].x = 0
  }
  else if(realSnake[0].x< 0){
    realSnake[0].x = canvasWidth
  }
  else if(realSnake[0].y + cubeSize > canvasHeight){
    realSnake[0].y = 0
  }
  else if(realSnake[0].y< 0){
    realSnake[0].y = canvasHeight
  }
}

