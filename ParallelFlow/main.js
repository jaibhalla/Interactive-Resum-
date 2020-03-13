let interactive = document.getElementById('Interactive')
let static = document.getElementById('Static')
let fun = document.getElementById('fun')
let speed = document.getElementById('speed')
let eIr = document.getElementById('ExploreIR')
let eSr = document.getElementById('ExploreSR')
let rand = Math.floor(Math.random()*3)
let rand1 = Math.floor(Math.random()*3)
let logo = document.getElementById('logo')
let highlightColor
let highlightColor2
let playButton = document.getElementById('playTrigger')
let playColor = document.getElementById('circle')
let contact = document.getElementById('Contact')
let closeButton = document.getElementById('closeButton')
let instructionsdiv = document.getElementById('Instructions')
let seeStatic = document.getElementById('seeStatic')
let imageName = document.getElementById('imageName')
let colorCounter

closeButton.addEventListener('mouseover',mouseColorChange)
closeButton.addEventListener('mouseout',mouseColorChangeBack)

function mouseColorChange(){
  closeButton.style.fill = highlightColor
}

function mouseColorChangeBack(){
  closeButton.style.fill = "#7C7D81"
}


//Interactive
eIr.style.opacity = "0"
fun.style.fontWeight = "600"

interactive.addEventListener("mouseover",interactiveColor)
interactive.addEventListener("mouseout",colorBack)

function interactiveColor(){
  rand = Math.floor(Math.random()*3)
  eIr.style.opacity = "1"
  if(rand==0){
    this.style.color = "#1649FE"
    fun.style.color = "#1649FE"
    highlightColor = "#1649FE"
    colorCounter = 0
  }
  else if(rand == 1){
    this.style.color = "#FF1F46"
    fun.style.color = "#FF1F46"
    highlightColor = "#FF1F46"
    colorCounter = 1
  }
  else{
    this.style.color = "#FECA16"
    fun.style.color = "#FECA16"
    highlightColor = "#FECA16"
    colorCounter = 2
  }
  playColor.style.fill = highlightColor
  c.canvas.style.borderColor = highlightColor
  contact.style.color = "white"
}



//Static
eSr.style.opacity = "0"
speed.style.fontWeight = "300"
speed.style.fontStyle = "italic"


static.addEventListener("mouseover",staticColor)
static.addEventListener("mouseout",colorBack)

function staticColor(){
  eSr.style.opacity = "1"
  do{
    rand1 = Math.floor(Math.random()*3)
  }while(rand1==rand)
  if(rand1==0){
    this.style.color = "#1649FE"
    speed.style.color = "#1649FE"
    highlightColor2 = "#1649FE"
    colorCounter = 0
  }
  else if(rand1 == 1){
    this.style.color = "#FF1F46"
    speed.style.color = "#FF1F46"
    highlightColor2 = "#FF1F46"
    colorCounter = 1
  }
  else{
    this.style.color = "#FECA16"
    speed.style.color = "#FECA16"
    highlightColor2 = "#FECA16"
    colorCounter = 2
  }
  c.canvas.style.borderColor = highlightColor2
  contact.style.color = "white"
}

function colorBack(){
  this.style.color = "#1F2124"
  eIr.style.opacity = "0"
  eSr.style.opacity = "0"
  c.canvas.style.borderColor = "transparent"
  contact.style.color = "#1F2124"
}

//Instructions

playButton.addEventListener("click",startInstructions)

function startInstructions(){
  interactive.style.display = "none"
  static.style.display = "none"
  eIr.style.display = "none"
  eSr.style.display = "none"
  logo.style.display = "none"
  contact.style.display = "none"
  instructionsdiv.style.display = "none"
  aboutPage.style.display = "block"
  page1.style.display = "block"
  page2.style.display = "block"
  page3.style.display = "block"
  seeStatic.style.display = "block"
  displayNone = true
}


function changeHighlightColor(){
  colorCounter++
  if(colorCounter>2){
    colorCounter = 0
  }
  if(colorCounter == 0){
    c.canvas.style.borderColor = "#1649FE"
  }
  else if(colorCounter == 1){
    c.canvas.style.borderColor =  "#FF1F46"
  }
  else if(colorCounter == 2){
    c.canvas.style.borderColor = "#FECA16"
  }
}
