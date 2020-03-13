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
let viewMenu = document.getElementById('viewMenu')
let imageName = document.getElementById('imageName')
let colorCounter
let easyButton = document.getElementById('easyButton')
let mediumButton = document.getElementById('mediumButton')
let hardButton = document.getElementById('hardButton')
let difficultyChecker = 0
let pageChecker = 0
let aboutOption = document.getElementById('aboutOption')
let page1Option = document.getElementById('page1Option')
let page2Option = document.getElementById('page2Option')
let page3Option = document.getElementById('page3Option')
let proceeedChecker1 = false
let proceeedChecker2 = false
let backgroundBar = document.getElementById('backgroundBar')
let progressBar = document.getElementById('progressBar')

let mainPageTitle = document.getElementById('mainPageTitle')
let highlight = document.getElementById('highlight')

let highlight1 = document.getElementById('highlight1')
let highlight2 = document.getElementById('highlight2')
let highlight3 = document.getElementById('highlight3')
let highlight4 = document.getElementById('highlight4')
let highlight5 = document.getElementById('highlight5')



//Interactive
eIr.style.opacity = "0"
fun.style.fontWeight = "600"

interactive.addEventListener("mouseover",interactiveColor)
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
  c.canvas.style.borderColor = highlightColor
  contact.style.color = "white"
}



//Static
eSr.style.opacity = "0"
speed.style.fontWeight = "300"
speed.style.fontStyle = "italic"

static.addEventListener("mouseover",staticColor)
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

//Interactive and Static
interactive.addEventListener("mouseout",colorBack)
static.addEventListener("mouseout",colorBack)
function colorBack(){
  this.style.color = "#1F2124"
  eIr.style.opacity = "0"
  eSr.style.opacity = "0"
  c.canvas.style.borderColor = "transparent"
  contact.style.color = "#1F2124"
}







//Instructions
playButton.addEventListener("mouseover",function(){
  playColor.style.fill = highlightColor
})

playButton.addEventListener("mouseout",function(){
  playColor.style.fill = "#1F2124"
})


playButton.addEventListener("click",startInstructions)
function startInstructions(){
  if(proceeedChecker1 == true && proceeedChecker2 == true){
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
    viewMenu.style.display = "block"
    mainPageTitle.style.display = "block"
    backgroundBar.style.display = "block"
    mediumButton.style.display = "block"
    displayNone = true

  }
}


closeButton.addEventListener('mouseover',mouseColorChange)
closeButton.addEventListener('mouseout',mouseColorChangeBack)
function mouseColorChange(){
  closeButton.style.fill = highlightColor
}
function mouseColorChangeBack(){
  closeButton.style.fill = "#7C7D81"
}



easyButton.addEventListener("mouseover",easyColorChange)
easyButton.addEventListener("mouseout",easyColorChangeBack)
easyButton.addEventListener("click",easyClicked)
function easyColorChange(){
  easyButton.style.color = "white"
  easyButton.style.borderColor = highlightColor
  easyButton.style.backgroundColor = highlightColor
}
function easyColorChangeBack(){
  if(difficultyChecker != 1){
    easyButton.style.color = "#7C7D81"
    easyButton.style.borderColor = "#1F2124"
    easyButton.style.backgroundColor = "#1F2124"
  }
}
function easyClicked(){
  difficultyChecker = 1 
  proceeedChecker1 = true
  easyColorChange()
  mediumColorChangeBack()
  hardColorChangeBack()
}


mediumButton.addEventListener("mouseover",mediumColorChange)
mediumButton.addEventListener("mouseout",mediumColorChangeBack)
mediumButton.addEventListener("click",mediumClicked)
function mediumColorChange(){
  mediumButton.style.color = "white"
  mediumButton.style.borderColor = highlightColor
  mediumButton.style.backgroundColor = highlightColor
}
function mediumColorChangeBack(){
  if(difficultyChecker != 2){
    mediumButton.style.color = "#7C7D81"
    mediumButton.style.borderColor = "#1F2124"
    mediumButton.style.backgroundColor = "#1F2124"
  }
}
function mediumClicked(){
  difficultyChecker = 2 
  proceeedChecker1 = true
  mediumColorChange()
  easyColorChangeBack()
  hardColorChangeBack()
}


hardButton.addEventListener("mouseover",hardColorChange)
hardButton.addEventListener("mouseout",hardColorChangeBack)
hardButton.addEventListener("click",hardClicked)
function hardColorChange(){
  hardButton.style.color = "white"
  hardButton.style.borderColor = highlightColor
  hardButton.style.backgroundColor = highlightColor
}
function hardColorChangeBack(){
  if(difficultyChecker != 3){
    hardButton.style.color = "#7C7D81"
    hardButton.style.borderColor = "#1F2124"
    hardButton.style.backgroundColor = "#1F2124"
  }
}
function hardClicked(){
  difficultyChecker = 3
  proceeedChecker1 = true
  hardColorChange()
  mediumColorChangeBack()
  easyColorChangeBack()
}

aboutOption.addEventListener("mouseover",aboutOptionColorChange)
aboutOption.addEventListener("mouseout",aboutOptionColorChangeBack)
aboutOption.addEventListener("click",aboutOptionClicked)
function aboutOptionColorChange(){
  aboutOption.style.color = "white"
  aboutOption.style.borderColor = highlightColor
  aboutOption.style.backgroundColor = highlightColor
}
function aboutOptionColorChangeBack(){
  if(pageChecker != 1){
    aboutOption.style.color = "#7C7D81"
    aboutOption.style.borderColor = "#1F2124"
    aboutOption.style.backgroundColor = "#1F2124"
  }
}
function aboutOptionClicked(){
  pageChecker = 1 
  proceeedChecker2 = true
  aboutOptionColorChange()
  page1OptionColorChangeBack()
  page2OptionColorChangeBack()
  page3OptionColorChangeBack()
}

page1Option.addEventListener("mouseover",page1OptionColorChange)
page1Option.addEventListener("mouseout",page1OptionColorChangeBack)
page1Option.addEventListener("click",page1OptionClicked)
function page1OptionColorChange(){
  page1Option.style.color = "white"
  page1Option.style.borderColor = highlightColor
  page1Option.style.backgroundColor = highlightColor
}
function page1OptionColorChangeBack(){
  if(pageChecker != 2){
    page1Option.style.color = "#7C7D81"
    page1Option.style.borderColor = "#1F2124"
    page1Option.style.backgroundColor = "#1F2124"
  }
}
function page1OptionClicked(){
  pageChecker = 2
  proceeedChecker2 = true
  page1OptionColorChange()
  aboutOptionColorChangeBack()
  page2OptionColorChangeBack()
  page3OptionColorChangeBack()
}


page2Option.addEventListener("mouseover",page2OptionColorChange)
page2Option.addEventListener("mouseout",page2OptionColorChangeBack)
page2Option.addEventListener("click",page2OptionClicked)
function page2OptionColorChange(){
  page2Option.style.color = "white"
  page2Option.style.borderColor = highlightColor
  page2Option.style.backgroundColor = highlightColor
}
function page2OptionColorChangeBack(){
  if(pageChecker != 3){
    page2Option.style.color = "#7C7D81"
    page2Option.style.borderColor = "#1F2124"
    page2Option.style.backgroundColor = "#1F2124"
  }
}
function page2OptionClicked(){
  pageChecker = 3
  proceeedChecker2 = true
  page2OptionColorChange()
  aboutOptionColorChangeBack()
  page1OptionColorChangeBack()
  page3OptionColorChangeBack()
}


page3Option.addEventListener("mouseover",page3OptionColorChange)
page3Option.addEventListener("mouseout",page3OptionColorChangeBack)
page3Option.addEventListener("click",page3OptionClicked)
function page3OptionColorChange(){
  page3Option.style.color = "white"
  page3Option.style.borderColor = highlightColor
  page3Option.style.backgroundColor = highlightColor
}
function page3OptionColorChangeBack(){
  if(pageChecker != 4){
    page3Option.style.color = "#7C7D81"
    page3Option.style.borderColor = "#1F2124"
    page3Option.style.backgroundColor = "#1F2124"
  }
}
function page3OptionClicked(){
  pageChecker = 4
  proceeedChecker2 = true
  page3OptionColorChange()
  aboutOptionColorChangeBack()
  page2OptionColorChangeBack()
  page1OptionColorChangeBack()
}


//Blocks Color Change
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
