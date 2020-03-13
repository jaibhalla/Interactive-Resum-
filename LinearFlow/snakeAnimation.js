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
let pageOne = document.getElementById('page1')
let pageTwo = document.getElementById('page2')
let pageThree = document.getElementById('page3')

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

function addPages(x,y,colour){
  this.x = x
  this.y = y
  this.colour = colour
}

let page1 = new addPages(150,150,"#1649FE")
let page2 = new addPages(1000,300,"#FF1F46")
let page3 = new addPages(550,400,"#FECA16")
let page4 = new addPages(100,100,"#FF1F46")

let title = document.getElementById('Title')
let changeTitle = document.getElementById('changeTitle')

function drawPages(){
  if (displayNone == true){
    title.style.display = "block"
    title.style.opacity = "1"
    if(level == 0){
      c.canvas.style.borderColor = page1.colour
      c.fillStyle = page1.colour
      c.fillRect(page1.x,page1.y,cubeSize,cubeSize)
      c.strokeRect(page1.x,page1.y,cubeSize,cubeSize)
      title.innerHTML = "About Me"
      if(realSnake[0].x == page1.x && realSnake[0].y == page1.y){
        openPage()
      }
    }
    if(level == 1){
      c.canvas.style.borderColor = page2.colour
      c.fillStyle = page2.colour
      c.fillRect(page2.x,page2.y,cubeSize,cubeSize)
      c.strokeRect(page2.x,page2.y,cubeSize,cubeSize)
      title.innerHTML = "Page 1"
      if(realSnake[0].x == page2.x && realSnake[0].y == page2.y){
        openPage()
      }
    }
    if(level == 2){
      c.canvas.style.borderColor = page3.colour
      c.fillStyle = page3.colour
      c.fillRect(page3.x,page3.y,cubeSize,cubeSize)
      c.strokeRect(page3.x,page3.y,cubeSize,cubeSize)
      changeTitle.innerHTML = "Page 2"
      if(realSnake[0].x == page3.x && realSnake[0].y == page3.y){
        openPage()

      }
    }
    if(level == 3){
      c.canvas.style.borderColor = page4.colour
      c.fillStyle = page4.colour
      c.fillRect(page4.x,page4.y,cubeSize,cubeSize)
      c.strokeRect(page4.x,page4.y,cubeSize,cubeSize)
      title.innerHTML = "Page 3"
      if(realSnake[0].x == page4.x && realSnake[0].y == page4.y){
        openPage()
      }
    }
    title.style.color = c.canvas.style.borderColor
  }
}

function openPage(){
  if(level == 0){
    isPaused = true
    aboutPage.style.opacity = 1;
    aboutPage.style.zIndex = 3;
    openChecker = true
  }
  else if(level == 1){
    isPaused = true
    pageOne.style.opacity = 1;
    pageOne.style.zIndex = 3;
    openChecker = true
  }
  else if(level == 2){
    isPaused = true
    pageTwo.style.opacity = 1;
    pageTwo.style.zIndex = 3;
    openChecker = true
  }
  else if(level == 3){
    isPaused = true
    pageThree.style.opacity = 1;
    pageThree.style.zIndex = 3;
    openChecker = true
  }
}

aboutPage.addEventListener("click",closePage)
pageOne.addEventListener("click",closePage)
pageTwo.addEventListener("click",closePage)
pageThree.addEventListener("click",closePage)


function closePage(){
  if(openChecker = true){
    this.style.display = "none"
    level++
    isPaused = false
    openChecker = false
  }
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

