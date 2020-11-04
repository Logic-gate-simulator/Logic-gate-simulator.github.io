// set up variables method
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

var andGate_x=500;
var andGate_y=500;

///////////////////////////////////////

function fillrect(X,Y,W,H,color){
  ctx.fillStyle = color;
  ctx.fillRect(X, Y, H, W, color);
}

function lineTo(x1, y1, x2, y2, type, width, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();       
  ctx.moveTo(x1, y1);    
  ctx.lineTo(x2, y2);  
  ctx.lineWidth = width ;
  ctx.lineCap = type; //round, butt, square
  ctx.stroke();  
}

function fillEllipse(X, Y, radius, color) {
  var radius = radius;
  ctx.beginPath();
  ctx.arc(X, Y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
}

function andGate(x,y){
  ctx.strokeStyle='white';
  ctx.beginPath();
  ctx.arc(x,y,75/4,1.5*Math.PI,2.5*Math.PI,false);
  ctx.lineWidth=5;
  ctx.strokeStyle='lightGreen';
  ctx.stroke();
  lineTo(x-0/4,y-75/4,x-100/4,y-75/4);
  lineTo(x-0/4,y+75/4,x-100/4,y+75/4);
  lineTo(x-100/4,y-84/4,x-100/4,y+83/4);
  ctx.lineWidth=3;
  lineTo(x-100/4,y-50/4,x-170/4,y-50/4);
  lineTo(x-100/4,y+50/4,x-170/4,y+50/4);
}  

function orGate(x,y){
  
}

//run code
andGate(andGate_x,andGate_y);
