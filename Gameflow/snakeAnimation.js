let c = document.querySelector('canvas').getContext('2d')
let canvasHeight = 650 //13 blocks 
let canvasWidth = 1250 //25 blocks = for placement, grid is 12x24
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
  highlight.style.color = c.canvas.style.borderColor
  highlight1.style.color = c.canvas.style.borderColor
  highlight2.style.color = c.canvas.style.borderColor
  highlight3.style.color = c.canvas.style.borderColor
  highlight4.style.color = c.canvas.style.borderColor
  highlight5.style.color = c.canvas.style.borderColor
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


let aboutArray = [[100,100],[200,450],[350,200],[600,250],[500,500],[450,0]]
let page1Array = [[1100,550],[150,350],[0,300],[400,100],[200,400],[850,0]]
let page2Array = [[200,300],[1200,400],[0,0],[50,550],[1000,450],[600,0]]
let page3Array = [[100,500],[250,50],[300,0],[900,600],[500,500],[1000,0]]

let currentPage

let score = 0 
let maxScore = 6

let aboutContainer = document.getElementById('aboutContainer')
let peronalPorfolioContainter = document.getElementById('peronalPorfolioContainter')
let experienceContainer = document.getElementById('experienceContainer')
let educationContainer = document.getElementById('educationContainer')


function eductionColors(){
  let amityDate = document.getElementById('amityDate')
  let jumeriahDate = document.getElementById('jumeriahDate')
  let educationTitle = document.getElementById('educationTitle')
  amityDate.style.color = c.canvas.style.borderColor
  jumeriahDate.style.color = c.canvas.style.borderColor
  educationTitle.style.color = c.canvas.style.borderColor
 
  let qualCertif = document.getElementById('qualCertif')
  let academicProjects = document.getElementById('academicProjects')
  let qualCertifDate1 = document.getElementById('qualCertifDate1')
  let qualCertifDate2 = document.getElementById('qualCertifDate2')
  let qualCertifDate3 = document.getElementById('qualCertifDate3')
  qualCertif.style.color = c.canvas.style.borderColor
  academicProjects.style.color = c.canvas.style.borderColor
  qualCertifDate1.style.color = c.canvas.style.borderColor
  qualCertifDate2.style.color = c.canvas.style.borderColor
  qualCertifDate3.style.color = c.canvas.style.borderColor
  let project1fDate = document.getElementById('project1fDate')
  project1fDate.style.color = c.canvas.style.borderColor

  let emailPhone1 = document.getElementById('emailPhone1')
  emailPhone1.style.color = c.canvas.style.borderColor

}


function personalPorfolioColors(){
  let personalPorfolioTitle = document.getElementById('personalPorfolioTitle')
  let personalProjects = document.getElementById('personalProjects')
  let Awards = document.getElementById('Awards')
  let Competitions = document.getElementById('Competitions')
  let awardDate1 = document.getElementById('awardDate1')
  let awardDate2 = document.getElementById('awardDate2')
  let competitionDate1 = document.getElementById('competitionDate1')
  let competitionDate2 = document.getElementById('competitionDate2')
  let emailPhone3 = document.getElementById('emailPhone3')

  personalPorfolioTitle.style.color = c.canvas.style.borderColor
  personalProjects.style.color = c.canvas.style.borderColor
  Awards.style.color = c.canvas.style.borderColor
  Competitions.style.color = c.canvas.style.borderColor
  awardDate1.style.color = c.canvas.style.borderColor
  awardDate2.style.color = c.canvas.style.borderColor
  competitionDate1.style.color = c.canvas.style.borderColor
  competitionDate2.style.color = c.canvas.style.borderColor
  emailPhone3.style.color =  c.canvas.style.borderColor
}

function experienceColors(){
  let experienceTitle = document.getElementById('experienceTitle')
  experienceTitle.style.color = c.canvas.style.borderColor
  let emailPhone2 = document.getElementById('emailPhone2')
  emailPhone2.style.color =  c.canvas.style.borderColor
  
  let civicsUnpluggedText = document.getElementById('civicsUnpluggedText')
  civicsUnpluggedText.style.color = c.canvas.style.borderColor

  let flippboardText = document.getElementById('flippboardText')
  flippboardText.style.color = c.canvas.style.borderColor

  let pocketText = document.getElementById('pocketText')
  pocketText.style.color = c.canvas.style.borderColor
  
  let googleWalletText = document.getElementById('googleWalletText')
  googleWalletText.style.color = c.canvas.style.borderColor
  
  let googleCloudText = document.getElementById('googleCloudText')
  googleCloudText.style.color = c.canvas.style.borderColor
  
  let secretLabText = document.getElementById('secretLabText')
  secretLabText.style.color = c.canvas.style.borderColor
  
  let facebookText = document.getElementById('facebookText')
  facebookText.style.color = c.canvas.style.borderColor
  
  let dancingText = document.getElementById('dancingText')
  dancingText.style.color = c.canvas.style.borderColor
  
  let squarespaceText = document.getElementById('squarespaceText')
  squarespaceText.style.color = c.canvas.style.borderColor
  
}

function aboutMeColors(){
  let aboutMeTitle = document.getElementById('aboutMeTitle')
  aboutMeTitle.style.color = c.canvas.style.borderColor
  

  let nutshell = document.getElementById('nutshell')
  nutshell.style.color = c.canvas.style.borderColor

  let skills = document.getElementById('skills')
  skills.style.color = c.canvas.style.borderColor

  let contactMeskills = document.getElementById('contactMe')
  contactMeskills.style.color = c.canvas.style.borderColor

  skillProgress1.style.backgroundColor = c.canvas.style.borderColor
  skillProgress2.style.backgroundColor = c.canvas.style.borderColor
  skillProgress3.style.backgroundColor = c.canvas.style.borderColor
  skillProgress4.style.backgroundColor = c.canvas.style.borderColor
  skillProgress5.style.backgroundColor = c.canvas.style.borderColor
  skillProgress6.style.backgroundColor = c.canvas.style.borderColor
  skillProgress7.style.backgroundColor = c.canvas.style.borderColor
  skillProgress8.style.backgroundColor = c.canvas.style.borderColor

  polymath.addEventListener('mouseover',labelColorChange1)
  golfer.addEventListener('mouseover',labelColorChange2)
  dubaiBorn.addEventListener('mouseover',labelColorChange3)
  goal.addEventListener('mouseover',labelColorChange4)
  
  polymath.addEventListener('mouseout',labelDefault)
  golfer.addEventListener('mouseout',labelDefault)
  dubaiBorn.addEventListener('mouseout',labelDefault)
  goal.addEventListener('mouseout',labelDefault)
  
  let emailButton = document.getElementById('emailButton')
  let phone = document.getElementById('phone')
  let behance = document.getElementById('behance')
  let github = document.getElementById('github')
  let linkedin = document.getElementById('linkedin')

  emailButton.addEventListener('mouseover',iconColorChange)
  phone.addEventListener('mouseover',iconColorChange)
  behance.addEventListener('mouseover',iconColorChange)
  github.addEventListener('mouseover',iconColorChange)
  linkedin.addEventListener('mouseover',iconColorChange)

  emailButton.addEventListener('mouseout',iconDefault)
  phone.addEventListener('mouseout',iconDefault)
  behance.addEventListener('mouseout',iconDefault)
  github.addEventListener('mouseout',iconDefault)
  linkedin.addEventListener('mouseout',iconDefault)
}

function labelColorChange1(){
  polymath.style.fontWeight = "600"
  
  polymath.style.color = c.canvas.style.borderColor
  golfer.style.color = "#7C7D81"
  dubaiBorn.style.color = "#7C7D81"
  goal.style.color = "#7C7D81"

  Text.style.opacity = "1"
  Text.style.bottom = "75px"
  Text.innerHTML = "I can state this with certainty, I've been able to quickly grasp any instruction given to me; be it at an internship or for an assignment given to me by my university. I love learning and I love being able to use my knowledge even more! And worry not, I make sure to learn everything about a topic or an instruction well before I even think about implementing them. No room for mistakes."
}

function labelColorChange2(){
  golfer.style.fontWeight = "600"
  
  golfer.style.color = c.canvas.style.borderColor
  polymath.style.color = "#7C7D81"
  dubaiBorn.style.color = "#7C7D81"
  goal.style.color = "#7C7D81"

  Text.style.opacity = "1"
  Text.style.bottom = "160px"
  Text.innerHTML = "I was passionate since birth. But, this sport also made me competitive and disciplined. I love it more than anything."
}

function labelColorChange3(){
  dubaiBorn.style.fontWeight = "600"
  
  dubaiBorn.style.color = c.canvas.style.borderColor
  golfer.style.color = "#7C7D81"
  polymath.style.color = "#7C7D81"
  goal.style.color = "#7C7D81"

  Text.style.opacity = "1"
  Text.style.bottom = "150px"
  Text.innerHTML = "In a place filled with many color and taste, I still maintained my heritage. It's shaped who I am, who I'm going to be and who I want to be."
}


function labelColorChange4(){
  goal.style.fontWeight = "600"
  
  goal.style.color = c.canvas.style.borderColor
  polymath.style.color = "#7C7D81"
  golfer.style.color = "#7C7D81"
  dubaiBorn.style.color = "#7C7D81"
  
  Text.style.opacity = "1"
  Text.style.bottom = "60px"
  Text.innerHTML = "My ultimate goal is to have my colleagues see things my way by fully grasping the purpose with which I undertake a task. I strive to accomplish that through efficient communication as well as by using the knowledge I acquire through my experiences. Ultimately, as corny as it sounds, I want to be known as a legend. Only the people who create huge impacts earn the right to be acknowledged with that cool title."

}




function labelDefault(){
  this.style.color = "#1F2124"
  polymath.style.color = "#1F2124"
  golfer.style.color = "#1F2124"
  dubaiBorn.style.color = "#1F2124"
  goal.style.color ="#1F2124"

  this.style.fontWeight = "400"
  Text.style.opacity = "0"
}

function iconColorChange(){
  this.style.fill = c.canvas.style.borderColor
}

function iconDefault(){
  this.style.fill = "#1F2124"
}


function drawPages(){
  if(displayNone == true){
    c.fillStyle = c.canvas.style.borderColor
    c.strokeStyle = "black"
    
    if(pageChecker == 1){    // copying the page block config to drawing array  
      currentPage = aboutArray.slice(0)
      mainPageTitle.innerHTML = "Level 1 : About Me"
      aboutMeColors()
    }
    else if(pageChecker == 2){
      currentPage = page1Array.slice(0)
      mainPageTitle.innerHTML = "Level 2 : Education History"
      eductionColors()
    }
    else if(pageChecker == 3){
      currentPage = page2Array.slice(0)
      mainPageTitle.innerHTML = "Level 3 : Work Experience"
      experienceColors()
    }
    else if(pageChecker == 4){
      currentPage = page3Array.slice(0)
      mainPageTitle.innerHTML = "Level 4 : Personal Portfolio"
      personalPorfolioColors()
    }
    
    if(difficultyChecker == 1){ // adjusting number of blocks to difficulty level 
      currentPage.splice(1,4)
      maxScore = 2  
    }
    else if(difficultyChecker == 2){
      currentPage.splice(2,2)
      maxScore = 4
    }

    if(score == maxScore){
      isPaused = true
      backgroundBar.style.opacity = "0"
      if(pageChecker == 1){
        aboutPage.classList.remove("class1")
        aboutPage.classList.add("class2")
        aboutContainer.style.display = "block"
        setTimeout(function(){
          aboutContainer.style.opacity = "1"
        },1500)
      }
      else if(pageChecker == 2){
        page1.classList.remove("class1")
        page1.classList.add("class2")
        educationContainer.style.display = "block"
        setTimeout(function(){
          educationContainer.style.opacity = "1"
        },1500)      }
      else if(pageChecker == 3){
        page2.classList.remove("class1")
        page2.classList.add("class2")
        experienceContainer.style.display = "block"
        setTimeout(function(){
          experienceContainer.style.opacity = "1"
        },1500)
      }
      else if(pageChecker == 4){
        page3.classList.remove("class1")
        page3.classList.add("class2")
        peronalPorfolioContainter.style.display = "block"
        setTimeout(function(){
          peronalPorfolioContainter.style.opacity = "1"
        },1500)
      }
    }
    else{
      backgroundBar.style.opacity = "1"
      c.fillRect(currentPage[score][0],currentPage[score][1],cubeSize,cubeSize)
      if(realSnake[0].x == currentPage[score][0] && realSnake[0].y == currentPage[score][1]){
        score++
      }
      let progress
      if(score == 0){
        progress = 1
      }
      else{
        progress = (score/maxScore)*100
      }
      progressBar.style.width =  progress.toString() + "%"
    }
  }
}


let menuButton = document.getElementById('menuButton')
let menu = document.getElementById('menu')


let menuAbout = document.getElementById('menuAbout')
let menuPage1 = document.getElementById('menuPage1')
let menuPage2 = document.getElementById('menuPage2')
let menuPage3 = document.getElementById('menuPage3')

menuAbout.addEventListener('mouseover',function(){
  menuAbout.style.color = "white"
  menuAbout.style.backgroundColor = c.canvas.style.borderColor 
})

menuPage1.addEventListener('mouseover',function(){
  menuPage1.style.color = "white"
  menuPage1.style.backgroundColor = c.canvas.style.borderColor 
})


menuPage2.addEventListener('mouseover',function(){
  menuPage2.style.color = "white"
  menuPage2.style.backgroundColor = c.canvas.style.borderColor 
})

menuPage3.addEventListener('mouseover',function(){
  menuPage3.style.color = "white"
  menuPage3.style.backgroundColor = c.canvas.style.borderColor 
})

menuAbout.addEventListener('mouseout',function(){
  menuAbout.style.color = "#7C7D81"
  menuAbout.style.backgroundColor = "#1F2124"
})

menuPage1.addEventListener('mouseout',function(){
  menuPage1.style.color = "#7C7D81"
  menuPage1.style.backgroundColor = "#1F2124"
})

menuPage2.addEventListener('mouseout',function(){
  menuPage2.style.color = "#7C7D81"
  menuPage2.style.backgroundColor = "#1F2124"
})

menuPage3.addEventListener('mouseout',function(){
  menuPage3.style.color = "#7C7D81"
  menuPage3.style.backgroundColor = "#1F2124"
})



viewMenu.addEventListener("click",function(){
  score = 0
  aboutPage.classList.remove("class2")
  aboutPage.classList.add("class1")
  menu.style.display = "block"
  aboutContainer.style.display = "none"
  aboutContainer.style.opacity = "0"
  isPaused = true
})



viewMenu.addEventListener("click",function(){
  score = 0
  page1.classList.remove("class2")
  page1.classList.add("class1")
  menu.style.display = "block"
  educationContainer.style.display = "none"
  educationContainer.style.opacity = "0"
  isPaused = true
})

viewMenu.addEventListener("click",function(){
  score = 0
  page2.classList.remove("class2")
  page2.classList.add("class1")
  menu.style.display = "block"
  experienceContainer.style.display = "none"
  experienceContainer.style.opacity = "0"
  isPaused = true
})

viewMenu.addEventListener("click",function(){
  score = 0
  page3.classList.remove("class2")
  page3.classList.add("class1")
  menu.style.display = "block"
  peronalPorfolioContainter.style.display = "none"
  peronalPorfolioContainter.style.opacity = "0"
  isPaused = true
})

menuAbout.addEventListener("click",function(){
  pageChecker = 1 
  openNewPage()
  menu.style.display = "none"
})

menuPage1.addEventListener("click",function(){
  pageChecker = 2 
  openNewPage()
  menu.style.display = "none"
})


menuPage2.addEventListener("click",function(){
  pageChecker = 3
  openNewPage()
  menu.style.display = "none"
})

menuPage3.addEventListener("click",function(){
  pageChecker = 4
  openNewPage()
  menu.style.display = "none"
})

function openNewPage(){
  isPaused = false 
  changeHighlightColor()
}

let mainProjectContainer = document.getElementById('mainProjectContainer')
let mainProject = document.getElementById('mainProject')
let mainProjectText1 = document.getElementById('mainProjectText1')
let mainProjectFiller = document.getElementById('mainProjectFiller')

mainProjectContainer.addEventListener('mouseover',function(){
  mainProject.style.opacity = "0.1"
  mainProjectText1.style.opacity = "1"
  mainProjectFiller.style.opacity = "1"
})

mainProjectContainer.addEventListener('mouseout',function(){
  mainProject.style.opacity = "1"
  mainProjectText1.style.opacity = "0"
  mainProjectFiller.style.opacity = "0"
})


let sideProject1Container = document.getElementById('sideProject1Container')
let sideProject1 = document.getElementById('sideProject1')
let sideProjectText1 = document.getElementById('sideProjectText1')
let sideProjectFiller1 = document.getElementById('sideProjectFiller1')

sideProject1Container.addEventListener('mouseover',function(){
  sideProject1.style.opacity = "0.2"
  sideProjectText1.style.opacity = "1"
  sideProjectFiller1.style.opacity = "1"
})

sideProject1Container.addEventListener('mouseout',function(){
  sideProject1.style.opacity = "1"
  sideProjectText1.style.opacity = "0"
  sideProjectFiller1.style.opacity = "0"
})

let sideProject2Container = document.getElementById('sideProject2Container')
let sideProject2 = document.getElementById('sideProject2')
let sideProjectText2 = document.getElementById('sideProjectText2')
let sideProjectFiller2 = document.getElementById('sideProjectFiller2')


sideProject2Container.addEventListener('mouseover',function(){
  sideProject2.style.opacity = "0.2"
  sideProjectText2.style.opacity = "1"
  sideProjectFiller2.style.opacity = "1"
})

sideProject2Container.addEventListener('mouseout',function(){
  sideProject2.style.opacity = "1"
  sideProjectText2.style.opacity = "0"
  sideProjectFiller2.style.opacity = "0"
})

let sideProject3Container = document.getElementById('sideProject3Container')
let sideProject3 = document.getElementById('sideProject3')
let sideProjectText3 = document.getElementById('sideProjectText3')
let sideProjectFiller3 = document.getElementById('sideProjectFiller3')


sideProject3Container.addEventListener('mouseover',function(){
  sideProject3.style.opacity = "0.2"
  sideProjectText3.style.opacity = "1"
  sideProjectFiller3.style.opacity = "1"
})

sideProject3Container.addEventListener('mouseout',function(){
  sideProject3.style.opacity = "1"
  sideProjectText3.style.opacity = "0"
  sideProjectFiller3.style.opacity = "0"
})


let skillLabel1 = document.getElementById('skillLabel1')
let skillProgress1 = document.getElementById('skillProgress1')
let skillProgressBar1 = document.getElementById('skillProgressBar1')

skillLabel1.addEventListener('mouseover',function(){
  skillProgress1.style.width = "70%"
})
skillProgressBar1.addEventListener('mouseover',function(){
  skillProgress1.style.width = "70%"
})




let skillLabel2 = document.getElementById('skillLabel2')
let skillProgress2 = document.getElementById('skillProgress2')
let skillProgressBar2 = document.getElementById('skillProgressBar2')

skillLabel2.addEventListener('mouseover',function(){
  skillProgress2.style.width = "95%"
})
skillProgressBar2.addEventListener('mouseover',function(){
  skillProgress2.style.width = "95%"
})



let skillLabel3 = document.getElementById('skillLabel3')
let skillProgress3 = document.getElementById('skillProgress3')
let skillProgressBar3 = document.getElementById('skillProgressBar3')

skillLabel3.addEventListener('mouseover',function(){
  skillProgress3.style.width = "95%"
})
skillProgressBar3.addEventListener('mouseover',function(){
  skillProgress3.style.width = "95%"
})



let skillLabel4 = document.getElementById('skillLabel4')
let skillProgress4 = document.getElementById('skillProgress4')
let skillProgressBar4 = document.getElementById('skillProgressBar4')

skillLabel4.addEventListener('mouseover',function(){
  skillProgress4.style.width = "95%"
})
skillProgressBar4.addEventListener('mouseover',function(){
  skillProgress4.style.width = "95%"
})

let skillLabel5 = document.getElementById('skillLabel5')
let skillProgress5 = document.getElementById('skillProgress5')
let skillProgressBar5 = document.getElementById('skillProgressBar5')

skillLabel5.addEventListener('mouseover',function(){
  skillProgress5.style.width = "70%"
})
skillProgressBar5.addEventListener('mouseover',function(){
  skillProgress5.style.width = "70%"
})




let skillLabel6 = document.getElementById('skillLabel6')
let skillProgress6 = document.getElementById('skillProgress6')
let skillProgressBar6 = document.getElementById('skillProgressBar6')

skillLabel6.addEventListener('mouseover',function(){
  skillProgress6.style.width = "55%"
})
skillProgressBar6.addEventListener('mouseover',function(){
  skillProgress6.style.width = "55%"
})



let skillLabel7 = document.getElementById('skillLabel7')
let skillProgress7 = document.getElementById('skillProgress7')
let skillProgressBar7 = document.getElementById('skillProgressBar7')

skillLabel7.addEventListener('mouseover',function(){
  skillProgress7.style.width = "95%"
})
skillProgressBar7.addEventListener('mouseover',function(){
  skillProgress7.style.width = "95%"
})



let skillLabel8 = document.getElementById('skillLabel8')
let skillProgress8 = document.getElementById('skillProgress8')
let skillProgressBar8 = document.getElementById('skillProgressBar8')

skillLabel8.addEventListener('mouseover',function(){
  skillProgress8.style.width = "75%"
})
skillProgressBar8.addEventListener('mouseover',function(){
  skillProgress8.style.width = "75%"
})



let divEmail =  document.getElementById('divEmail')
let emailButton =  document.getElementById('emailButton')

emailButton.addEventListener('mouseover',function(){
  divEmail.style.width = "0px"
})

let phone = document.getElementById('phone')
let divPhone = document.getElementById('divPhone')

phone.addEventListener('mouseover',function(){
  divPhone.style.width = "0px"
})


let polymath = document.getElementById('polymath')
let golfer = document.getElementById('golfer')
let dubaiBorn = document.getElementById('dubaiBorn')
let goal = document.getElementById('goal')
let Text  = document.getElementById('Text')



let civicsUnplugged = document.getElementById('div1')
let civicsUnpluggedImage = document.getElementById('civicsUnplugged')
let civicsUnpluggedTitle = document.getElementById('civicsUnpluggedTitle')

let civicsUnpluggedText = document.getElementById('civicsUnpluggedText')
let civicsUnpluggedDate = document.getElementById('civicsUnpluggedDate')



civicsUnplugged.addEventListener('mouseover',function(){
  civicsUnpluggedTitle.style.opacity = "1"
  civicsUnpluggedText.style.opacity = "1"
  civicsUnpluggedDate.style.opacity = "1"
  civicsUnpluggedImage.style.filter = "brightness(20%)"
})

civicsUnplugged.addEventListener('mouseout',function(){
  civicsUnpluggedTitle.style.opacity = "0"
  civicsUnpluggedText.style.opacity = "0"
  civicsUnpluggedDate.style.opacity = "0"
  civicsUnpluggedImage.style.filter = "brightness(100%)"
})

civicsUnplugged.addEventListener('click',function(){
  civicsUnpluggedTitle.style.opacity = "0"
  civicsUnpluggedText.style.opacity = "0"
  civicsUnpluggedDate.style.opacity = "0"
})

let flippboard = document.getElementById('div2')
let flippboardImage = document.getElementById('flippboard')
let flippboardTitle = document.getElementById('flippboardTitle')

let flippboardText = document.getElementById('flippboardText')
let flippboardDate = document.getElementById('flippboardDate')

flippboard.addEventListener('mouseover',function(){
  flippboardTitle.style.opacity = "1"
  flippboardText.style.opacity = "1"
  flippboardDate.style.opacity = "1"
  flippboardImage.style.filter = "brightness(20%)"
})

flippboard.addEventListener('mouseout',function(){
  flippboardTitle.style.opacity = "0"
  flippboardText.style.opacity = "0"
  flippboardDate.style.opacity = "0"
  flippboardImage.style.filter = "brightness(100%)"
})

flippboard.addEventListener('click',function(){
  flippboardTitle.style.opacity = "0"
  flippboardText.style.opacity = "0"
  flippboardDate.style.opacity = "0"
})

let pocket = document.getElementById('div3')
let pocketImage = document.getElementById('pocket')

let pocketTitle = document.getElementById('pocketTitle')

let pocketText = document.getElementById('pocketText')
let pocketDate = document.getElementById('pocketDate')

pocket.addEventListener('mouseover',function(){
  pocketTitle.style.opacity = "1"
  pocketText.style.opacity = "1"
  pocketDate.style.opacity = "1"
  pocketImage.style.filter = "brightness(20%)"
})

pocket.addEventListener('mouseout',function(){
  pocketTitle.style.opacity = "0"
  pocketText.style.opacity = "0"
  pocketDate.style.opacity = "0"
  pocketImage.style.filter = "brightness(100%)"
})

pocket.addEventListener('click',function(){
  pocketTitle.style.opacity = "0"
  pocketText.style.opacity = "0"
  pocketDate.style.opacity = "0"
})


let googleWallet = document.getElementById('div4')
let googleWalletImage = document.getElementById('googleWallet')

let googleWalletTitle = document.getElementById('googleWalletTitle')

let googleWalletText = document.getElementById('googleWalletText')
let googleWalletDate = document.getElementById('googleWalletDate')

googleWallet.addEventListener('mouseover',function(){
  googleWalletTitle.style.opacity = "1"
  googleWalletText.style.opacity = "1"
  googleWalletDate.style.opacity = "1"
  googleWalletImage.style.filter = "brightness(20%)"
})

googleWallet.addEventListener('mouseout',function(){
  googleWalletTitle.style.opacity = "0"
  googleWalletText.style.opacity = "0"
  googleWalletDate.style.opacity = "0"
  googleWalletImage.style.filter = "brightness(100%)"
})

googleWallet.addEventListener('click',function(){
  googleWalletTitle.style.opacity = "0"
  googleWalletText.style.opacity = "0"
  googleWalletDate.style.opacity = "0"
})

let googleCloud = document.getElementById('div5')
let googleCloudImage = document.getElementById('googleCloud')

let googleCloudTitle = document.getElementById('googleCloudTitle')

let googleCloudText = document.getElementById('googleCloudText')
let googleCloudDate = document.getElementById('googleCloudDate')

googleCloud.addEventListener('mouseover',function(){
  googleCloudTitle.style.opacity = "1"
  googleCloudText.style.opacity = "1"
  googleCloudDate.style.opacity = "1"
  googleCloudImage.style.filter = "brightness(20%)"
})

googleCloud.addEventListener('mouseout',function(){
  googleCloudTitle.style.opacity = "0"
  googleCloudText.style.opacity = "0"
  googleCloudDate.style.opacity = "0"
  googleCloudImage.style.filter = "brightness(100%)"
})

googleCloud.addEventListener('click',function(){
  googleCloudTitle.style.opacity = "0"
  googleCloudText.style.opacity = "0"
  googleCloudDate.style.opacity = "0"
})

let secretLab = document.getElementById('div6')
let secretLabImage = document.getElementById('secretLab')

let secretLabTitle = document.getElementById('secretLabTitle')

let secretLabText = document.getElementById('secretLabText')
let secretLabDate = document.getElementById('secretLabDate')

secretLab.addEventListener('mouseover',function(){
  secretLabTitle.style.opacity = "1"
  secretLabText.style.opacity = "1"
  secretLabDate.style.opacity = "1"
  secretLabImage.style.filter = "brightness(20%)"
})

secretLab.addEventListener('mouseout',function(){
  secretLabTitle.style.opacity = "0"
  secretLabText.style.opacity = "0"
  secretLabDate.style.opacity = "0"
  secretLabImage.style.filter = "brightness(100%)"
})

secretLab.addEventListener('click',function(){
  secretLabTitle.style.opacity = "0"
  secretLabText.style.opacity = "0"
  secretLabDate.style.opacity = "0"
})


let facebook = document.getElementById('div7')
let facebookImage = document.getElementById('facebook')

let facebookTitle = document.getElementById('facebookTitle')

let facebookText = document.getElementById('facebookText')
let facebookDate = document.getElementById('facebookDate')

facebook.addEventListener('mouseover',function(){
  facebookTitle.style.opacity = "1"
  facebookText.style.opacity = "1"
  facebookDate.style.opacity = "1"
  facebookImage.style.filter = "brightness(20%)"
})

facebook.addEventListener('mouseout',function(){
  facebookTitle.style.opacity = "0"
  facebookText.style.opacity = "0"
  facebookDate.style.opacity = "0"
  facebookImage.style.filter = "brightness(100%)"
})

facebook.addEventListener('click',function(){
  facebookTitle.style.opacity = "0"
  facebookText.style.opacity = "0"
  facebookDate.style.opacity = "0"
})

let dancing = document.getElementById('div8')
let dancingImage = document.getElementById('dancing')

let dancingTitle = document.getElementById('dancingTitle')

let dancingText = document.getElementById('dancingText')
let dancingDate = document.getElementById('dancingDate')

dancing.addEventListener('mouseover',function(){
  dancingTitle.style.opacity = "1"
  dancingText.style.opacity = "1"
  dancingDate.style.opacity = "1"
  dancingImage.style.filter = "brightness(20%)"
})

dancing.addEventListener('mouseout',function(){
  dancingTitle.style.opacity = "0"
  dancingText.style.opacity = "0"
  dancingDate.style.opacity = "0"
  dancingImage.style.filter = "brightness(100%)"
})

dancing.addEventListener('click',function(){
  dancingTitle.style.opacity = "0"
  dancingText.style.opacity = "0"
  dancingDate.style.opacity = "0"
})

let squarespace = document.getElementById('div9')
let squarespaceImage = document.getElementById('squarespace')

let squarespaceTitle = document.getElementById('squarespaceTitle')

let squarespaceText = document.getElementById('squarespaceText')
let squarespaceDate = document.getElementById('squarespaceDate')

squarespace.addEventListener('mouseover',function(){
  squarespaceTitle.style.opacity = "1"
  squarespaceText.style.opacity = "1"
  squarespaceDate.style.opacity = "1"
  squarespaceImage.style.filter = "brightness(20%)"
})

squarespace.addEventListener('mouseout',function(){
  squarespaceTitle.style.opacity = "0"
  squarespaceText.style.opacity = "0"
  squarespaceDate.style.opacity = "0"
  squarespaceImage.style.filter = "brightness(100%)"
})

squarespace.addEventListener('click',function(){
  squarespaceTitle.style.opacity = "0"
  squarespaceText.style.opacity = "0"
  squarespaceDate.style.opacity = "0"
})