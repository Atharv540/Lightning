const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World =  Matter.World;

var engine, world, maxDrops, lightning, thunder, thunder2;
var drops = [];
maxDrops = 100;
function preload(){
  lightning = loadImage("lightning.png");
  thunder = loadImage("thunder.png");
  thunder2 = loadImage("thunder2.png");
}

function setup(){
   canvas = createCanvas(400,700);
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(200,500);
   if(frameCount%150===0){
     for(i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400), random(0,400)));
     }
   }
}

function draw(){
    background(20);
    var rand = Math.round(random(1,3));
    Engine.update(engine);
    umbrella.display();
    for(i=0; i<maxDrops; i++){
      drops[i].display();
      drops[i].update();
    }
    if(frameCount%80===0){
      var thunderCreatedFrame = frameCount;
      thunder = createSprite(random(10,370),random(10,40));
      switch(rand){
        case 1: thunder.addImage(lightning);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder2);
        break;
        default: break;
      }

    }
    if(thunderCreatedFrame+10=== frameCount&&thunder){
      thunder.destroy();
    }
    drawSprites();
}
