const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
 
var Score =  0 ;
var hour;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    box1 = new Box(900, 100, 70, 70); 
    box2 = new Box(900, 100, 70, 70); 
    box3 = new Box(900, 100, 70, 70);
     box4 = new Box(900, 100, 70, 70); 
     box5 = new Box(900, 100, 70, 70); 
     box6 = new Box(900, 100, 70, 70); 
     box7 = new Box(800, 100, 70, 70);
      box8 = new Box(800, 100, 70, 70);
       box9 = new Box(800, 100, 70, 70);
        box10 = new Box(800, 100, 70, 70);
         box11 = new Box(800, 100, 70, 70);
          box12 = new Box(800, 100, 70, 70);
           box13 = new Box(700, 100, 70, 70);
            box14 = new Box(700, 100, 70, 70);
             box15 = new Box(700, 100, 70, 70);
              box16 = new Box(700, 100, 70, 70); 
              box17 = new Box(700, 100, 70, 70); 
              box18 = new Box(700, 100, 70, 70);
         box19 = new Box(700, 100, 70, 70);
     box20 = new Box(700, 100, 70, 70);
   
     ball = new Ball(200,200,80,80);

     rope = new Rope(ball.body,{x:500,y:50});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(35);
    fill("white")
    text("Score"+Score,1000,350)
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        gameState = "onSling";
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        slingshot.attach(bird.body);
    }
}

async function getTime(){

    var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.currentDateTime);
    var datetime = responseJSON.currentDateTime;
    console.log(datetime);
    var hour = datetime.slice(11,13);
    console.log(hour);
    
    if(hour>=08 && hour<=20){
        bg="sprites/bg2.jpg";

    }
    else{
        bg="sprites/bg.png";

    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
    textSize(35)
    fill("white")
    text("Time :"+hour,1000,300);
}



























