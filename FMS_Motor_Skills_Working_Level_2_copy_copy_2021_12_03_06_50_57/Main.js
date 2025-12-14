/*
//Game 1 is fully functional

//Game 2 works but is currently unable to return to the home screen

//Game 3 is a work in progress as it works but makes the rest of the game at a really slow rate

//Still needs a title

//

*/
let button;
let img;
let img1;
let shark;
let myFont;
let MENU = 0;
let inBounds;
var s = 1.0;
var r = 0;
let x = 400;
let y = 400;
let dragging = false;
let extraCanvas
let insCanvas
let close
let pinching = false;
let windowWidth = 800;

let randia;
let randx2;
let randy2;

let randx 
let randy 
let randW 
let randH 

let red
let green
let blue






function preload() {
  myFont = loadFont('Lobster 1.4.otf');
   img = loadImage('GameBackground.png');
    img1 = loadImage('318053-200.png');
    shark = loadImage('shark.png');
}


function setup() {
  createCanvas(800, 800);
  extraCanvas = createGraphics(800,800)
  insCanvas = createGraphics(800,800)
  
  
  Background();
  rectMode(CORNER);
  textSize(32);
  fill('#f2057c');
  textFont(myFont);
  textAlign(RIGHT);
  text("FMS Motor Skills",515,100);
 
  
  fill('#ebd810')
   rect(50, 400, 150, 75);
  rect(325, 400, 150, 75);
  rect(600, 400, 150, 75);

  
  textSize(26)
 
  fill('#f2057c');
  text('Game 1', 157, 444);
  text('Game 3', 707, 444);
  textSize(26);
  text('Game 2', 433, 444);
  
  
  
//for game 3
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('pinch').set({ enable: true });
  hammer.get('rotate').set({ enable: true });  
  hammer.on("pinch", scaleRect);
  hammer.on("rotate", rotateRect);

  
}

function draw(){
   
  
  if(MENU == 3){
    Background()
  image(extraCanvas,0,0)
  image(insCanvas,0,0)
      
  menu();

  }
  
  else{
   
     menu();
    image(extraCanvas,0,0)
  image(insCanvas,0,0)
  
  
 
  }
  
}



function menu(){
   
 
  if (MENU == 1) {
  
   Background()
   backButton();
   Game1Ins()
    Game1();
    
  
    
 ;
  } 

  // START GAME
  if (MENU == 2) {
   
   Background();
    backButton();
    Game2Ins()
    Game2();

  } 
  
  // INSTRUCTIONS
  if (MENU == 3) {
   
   Game3();
   
    
    
   
      
  } 

}




//MENU & BACKGROUND
//================================================================================
function mouseClicked() {
  
  if (MENU == 0) {
    const context = canvas.getContext('2d');
    context.clearRect(0,0,800,800);
    
    setup();
    if (mouseY < 475 && mouseY > 400) {
      
      if (mouseX < 200 && mouseX > 50) {
          context.clearRect(0,0,800,800);
        Background();
        randx = random(100,300)
        randy = random(100,300)
        randW = random(100,350)
        randH = random(100,350)
        MENU = 1
        
        
      }
      if (mouseX < 475 && mouseX > 325) {
         context.clearRect(0,0,800,800);
        Background();
        red = random(0,255)
        green = random(0,255)
        blue = random(0.255)
        randx = random(100,300)
        randy = random(100,300)
        randx2 = random(300,500)
        randy2 = random(250,375)
        randia = random(50, 500)
        MENU = 2
      }
      if (mouseX < 750 && mouseX > 600) {
         context.clearRect(0,0,800,800);
        Background();
        MENU = 3
      }
    }
  }
}


 function Background(){
 image(img, 0,0,800,800)
   if(MENU == 1,2,3){
     loop()
   }
}

function backButton(){
  
  extraCanvas.stroke(0)
  extraCanvas.strokeWeight(1)
  extraCanvas.fill('#ebd810')
  extraCanvas.rect(650,50,100,50);
  extraCanvas.fill('#f2057c');
  extraCanvas.textFont(myFont);
  extraCanvas.textSize(26)
  extraCanvas.textAlign(RIGHT);
  extraCanvas.text('Menu', 725, 85);
  if(mouseY <100 && mouseY>50){ 
     if(mouseX <750 && mouseX >650){
        MENU = 0;
       
     }
  }
  loop()
}
  
 //================================================================================ 
  



//GAME 1
//===============================================================================
function Game1() {
  
  fill(0,0,0,0)
  strokeWeight(5)
  rect(randx, randy, randW, randH)
  
  
  

print(mouseX, mouseY)
  outofbounds();
 
  
   
  c = map(mouseX,0,width,0,360)
  


  extraCanvas.strokeWeight(9);
  if(mouseIsPressed){
  	extraCanvas.stroke(c,75,100)
   extraCanvas.line(mouseX,mouseY,pmouseX,pmouseY) 
  }
  
  
}


//--------------------------------------------------------------------------------
//Everything below is for Game 1
function outofbounds()
{
  
  
if ((mouseY >= randy-5 && mouseY <=randy +randH+5) && (mouseX <= randx+5 && mouseX >= randx-5))
  { 
        textSize(50)
        fill('green');
        text("Good Job!",250, 100)
        inBounds = true;
       
        
  }
  
else if ((mouseY >= randy-5 && mouseY <= randy+5) && (mouseX <= randx+randW+5 && mouseX >= randx-5))
  { 
    
        textSize(50)
        fill('green');
        text("Good Job!",250, 100)
        inBounds = true;
        
  }
else if ((mouseY >= randy-5 && mouseY <=randy +randH+5) && (mouseX <= randx+5+randW && mouseX >= randx-5+randW))
  { 
        textSize(50)
        fill('green');
        text("Good Job!",250, 100)
        inBounds = true;
       
  }
   else if ((mouseY >= randy+randH-5 && mouseY <=randy+randH+5) && (mouseX <= randx+randW+5 && mouseX >= randx-5))
  { 
        textSize(50)
        fill('green');
        text("Good Job!",250, 100)
        textAlign(RIGHT);
        inBounds = true;
         
  }
  else
    {
      textSize(50)
      fill('red')
      text("Try Again!",350,100)
      textAlign(RIGHT);
      inBounds = false;
      
       
    }
  
  
}


   
  


// All the paths

//--------------------------------------------------------------------------------
//================================================================================


//GAME 2
//================================================================================
function Game2(){
  
       
  
  
  print(mouseX, mouseY);
  fill(0,0,0,0)
  strokeWeight(5)
  ellipse(randx2, randy2, randia, randia)
  
  
  


  //if dragging is true
  //set x, y to mouseX, mouseY
  if(dragging){
    randx = mouseX;
    randy = mouseY;
    outofbounds2()
  }
  
    

  strokeWeight(0)
  fill(red,green,blue)
  circle = ellipse(randx, randy, randia, randia);

 
}

function outofbounds2()
{
  
  
  if ((mouseY < randy2+5 && mouseY > randy2-5) && (mouseX < randx2+5 && mouseX > randx2-5))
  {
    youWin();
  }
  else
    {
      textSize(50)
      fill('red')
      text("Out Of Bounds!",450,50)
    }
  
  function youWin()
  {

    createCanvas(800, 800);
   Background()
    fill('Green')
    textSize(50)
    text("You Win!", 200, 75)
    MENU = 0;
    
    
  }
}

  

//GAME 3 
//============================================================================================================

function Game3(){
let c = 0
let d = 0;
let f = windowWidth*0.1
let e = windowWidth*0.1
  

  outofbounds3()
  backButton()
  Game3Ins()
 
  
  rectMode(CENTER)
  strokeWeight(5)
  fill(0,0,0,0)
  let b = rect(width/2, height/2, windowWidth*0.4, windowWidth*0.4);
  strokeWeight(0)
  fill(255);
  translate(width/2, height/2);
  rotate(r);
  scale(s);
  let a = rect(0, 0, windowWidth*0.1, windowWidth*0.1);
  print(r)
  
  

}

function rotateRect(event) {
  //console.log(event);
  r = radians(event.rotation);
}


function scaleRect(event) {
  //console.log(event);
  s = event.scale;
}

function outofbounds3()
{
if ( s >= 3.9 && s<= 4 && r <= -3.12 && r>=  -3.17)
  { 
        youWin();
  }
  
  else
    {
      textSize(50)
      fill('red')
      text("Out Of Bounds!",450,50)
    }
}

function youWin(){
    textSize(50)
    fill('green')
    text("You Win!",450,50)
}
  


//GAME INSTRUCTIONS
//==================================================================================================================================================================
function Game1Ins(){
  insCanvas.rect(100,600,600,150)
  shark.resize(200,150)
  insCanvas.image(shark,500 ,600)
  insCanvas.textFont(myFont);
  insCanvas.textSize(26)
  insCanvas.text('Draw the shape with your finger to win!', 125, 650)
  
}

function Game2Ins(){
  insCanvas.rect(100,600,600,150)
  shark.resize(200,150)
  insCanvas.image(shark,500 ,600)
  insCanvas.textFont(myFont);
  insCanvas.textSize(26)
  insCanvas.text('Move the circle into the outline to win!', 125, 650)
}

function Game3Ins(){
  insCanvas.rect(100,600,600,150)
  shark.resize(200,150)
  insCanvas.image(shark,500 ,600)
  insCanvas.textFont(myFont);
  insCanvas.textSize(26)
  insCanvas.text('Pinch and rotate the shape to win!', 125, 650)
}
//USED IN Game 2

// Start it up
function mousePressed() {
 
  
  //check if mouse is over the ellipse
  if(dist(randx, randy, mouseX, mouseY) < randia/2){
    dragging = true;
  }
  
  
  
}

// Stop
function mouseReleased() {

  dragging = false;
  
}



