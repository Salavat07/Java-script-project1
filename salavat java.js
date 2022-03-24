
var a = 4;
var z = 34;
var i = 380;
var o = 37;
var m = -26;
var n = 400;
var f = 190;
draw = function() {
    
background(173, 226, 255);

fill(255, 255, 255);
ellipse(m,40,60,30);
m++;
fill(255, 255, 255);
ellipse(n,60,60,30);
n= n - 1;
fill(255, 255, 0);
ellipse(a,z,60,60);
a +=2;
z +=1/2;

if(a > 400){
    background(18, 0, 89);
    image(getImage("cute/Star"),10,10,20,30);
    image(getImage("cute/Star"),149,10,20,30);
    image(getImage("cute/Star"),63,27,20,30);
    image(getImage("cute/Star"),93,10,20,30);
    image(getImage("cute/Star"),36,61,20,30);
    image(getImage("cute/Star"),10,39,20,30);
    image(getImage("cute/Star"),223,10,20,30);
    image(getImage("cute/Star"),270,10,20,30);
    image(getImage("cute/Star"),260,30,20,30);
    image(getImage("cute/Star"),320,10,20,30);
    image(getImage("cute/Star"),300,40,20,30);
    fill(255, 255, 255);
    ellipse(i,o,40,40);
    i= i -2;
    o= o + 1/2;
    fill(133, 133, 133);
    ellipse(273,f,15,200);
    f = f -2;
   
}

for(var q = 0; q < 400; q +=60){
image(getImage("cute/TreeTall"),q,326,40,40);
}


fill(125, 66, 66);
triangle(200, 28, 350, 150, 50, 150);
fill(94, 27, 27);
rect(264,73,20,38);
fill(125, 66, 66);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

for(var x = 0; x < 400; x+= 35){
image(getImage("cute/GrassBlock"),x,327,36,94);
}

for(var y = 58; y < 335; y+= 15 ){
   for( var d = 40; d < 151; d+=40 ){
        fill(0, 196, 255);
        rect(y,d+115,15,42);
    }
}

rect(139,94,111,40);
fill(0, 0, 0);
ellipse(198,116,1,40);
fill(255, 183, 0);
triangle(140,117,140,96,184,95);
image(getImage("space/octopus"),158,104,30,30);
image(getImage("space/rocketship"),205,107,30,30);
image(getImage("cute/Rock"),325,355,30,40);
triangle(251,117,251,95,206,95);
};
