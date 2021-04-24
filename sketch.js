const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particle = []
var plinko = []


function setup() 
{	
	engine = Engine.create();
	world = engine.world;

    createCanvas(480,800);

	
	wall1 = new Wall(10,700,20,200)
	wall2 = new Wall(130,700,20,200)
	wall3 = new Wall(250,700,20,200)
	wall4 = new Wall(360,700,20,200)
	wall5 = new Wall(470,700,20,200)
	wall6 = new Wall(240,790,480,20)
    
  
  plinko1 = new Plinko (30,150,10);
  plinko2 = new Plinko (80,150,10);
  plinko3 = new Plinko (130,150,10);
  plinko4 = new Plinko (180,150,10);
  plinko5 = new Plinko (230,150,10)
  plinko6 = new Plinko (280,150,10)
  plinko7 = new Plinko (330,150,10)
  plinko8 = new Plinko (380,150,10)
  plinko9 = new Plinko (430,150,10)
  plinko10 = new Plinko (50,200,10);
  plinko11 = new Plinko (100,200,10);
  plinko12 = new Plinko (150,200,10);
  plinko13 = new Plinko (200,200,10);
  plinko14 = new Plinko (250,200,10);
  plinko15 = new Plinko (300,200,10);
  plinko16 = new Plinko (350,200,10);
  plinko17 = new Plinko (400,200,10);
  plinko18 = new Plinko (30,250,10);
  plinko19 = new Plinko (80,250,10);
  plinko20 = new Plinko (130,250,10);
  plinko21 = new Plinko (180,250,10);
  plinko22 = new Plinko (230,250,10)
  plinko23 = new Plinko (280,250,10)
  plinko24 = new Plinko (330,250,10)
  plinko25 = new Plinko (380,250,10)
  plinko26 = new Plinko (430,250,10)
  plinko27 = new Plinko (50,300,10);
  plinko28 = new Plinko (100,300,10);
  plinko29 = new Plinko (150,300,10);
  plinko30 = new Plinko (200,300,10);
  plinko31 = new Plinko (250,300,10);
  plinko32 = new Plinko (300,300,10);
  plinko33 = new Plinko (350,300,10);
  plinko34 = new Plinko (400,300,10);
  plinko35 = new Plinko (30,350,10);
  plinko36 = new Plinko (80,350,10);
  plinko37 = new Plinko (130,350,10);
  plinko38 = new Plinko (180,350,10);
  plinko39 = new Plinko (230,350,10)
  plinko40 = new Plinko (280,350,10)
  plinko41 = new Plinko (330,350,10)
  plinko42 = new Plinko (380,350,10)
  plinko43 = new Plinko (430,350,10)
  plinko44 = new Plinko (50,400,10);
  plinko45 = new Plinko (100,400,10);
  plinko46 = new Plinko (150,400,10);
  plinko47 = new Plinko (200,400,10);
  plinko48 = new Plinko (250,400,10);
  plinko49 = new Plinko (300,400,10);
  plinko50 = new Plinko (350,400,10);
  plinko51 = new Plinko (400,400,10);

  
  

	Engine.run(engine); 
}


function draw() 
{  
  
  background(255,255,0);  
    
   r = Math.round(random(35,425))

   for(var j = 0;j < plinko.length;j++)
   {
     plinko[j].display();
   }

  if(frameCount % 60 === 0)
  {
	 particle.push(new Particle(r,125,10))  
  }

  for(var h = 0;h < particle.length;h++)
  {
    particle[h].display();
  }

  
  
  wall1.display();	
  wall2.display()
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();


plinko1.display();
plinko2.display();
plinko3.display();
plinko4.display();
plinko5.display();
plinko6.display();
plinko7.display();
plinko8.display();
plinko9.display();
plinko10.display();
plinko11.display();
plinko12.display();
plinko13.display();
plinko14.display();
plinko15.display();
plinko16.display();
plinko17.display();
plinko18.display();
plinko19.display();
plinko20.display();
plinko21.display();
plinko22.display();
plinko23.display();
plinko24.display();
plinko25.display();
plinko26.display();
plinko27.display();
plinko28.display();
plinko29.display();
plinko30.display();
plinko31.display();
plinko32.display();
plinko33.display();
plinko34.display();
plinko35.display();
plinko36.display();
plinko37.display();
plinko38.display();
plinko39.display();
plinko40.display();
plinko41.display();
plinko42.display();
plinko43.display();
plinko44.display();
plinko45.display();
plinko46.display();
plinko47.display();
plinko48.display();
plinko49.display();
plinko50.display();
plinko51.display();

  
 

}



