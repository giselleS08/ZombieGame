let startButtonSize = 10;
let repeat = 0;
function setup() {
  createCanvas(600, 600);
  background(255);

  // start screen
startScreen();


//making a button for start
let startButtonText = `
  ...bbbbbbbbbbbbbbbbbb
  bssssddddddddddddddb
  bssfffdfdddfffdfdfdb
  bsdfffdfdddfffdfffsb
  bddfdddfffdfdfddfssb
  bddddddddddddddssssb
  .bbbbbbbbbbbbbbbbbb
  `;

  let palette1 = {
    b: color(175,0,0),//outline more than likely orange

    s:color(255,25,25),//this will be the lighter orange
    d:color(255,191,0),//yellow main color
    f:color(255,93,0)//word color like black for visibility
  };
        startButton = new Sprite();
        startButton.img = spriteArt(startButtonText, 10, palette1);
       startButton.pos={x:285, y: 400};
        startButton.rotation =0;
        startButton.collider = "kinematic";
}

function draw() {
  startScreen();
  //need to make the button more cool, more style, more wow
//going to add a while so continues to grow
//also pront x positions
while (repeat <= 10)
{
setInterval(startButtonAnimationGrow, 10);
repeat +=1;
}

repeat = 0;

while (repeat <= 10)
{
setInterval(startButtonAnimationShrink, 10);
repeat+=1;
}
repeat =0;


}

function startScreen() {
  background(91,181,49);
}
function startButtonAnimationGrow(){
  
  startButton.scale +=0.01;

}
function startButtonAnimationShrink(){

  startButton.scale -=0.01;
}