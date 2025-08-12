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
  
  //need to make the button more cool, more style, more wow
//going to add a while so continues to grow
//also pront x positions
startScreen();



}

function startScreen() {
  background(91,181,49);
  text("This is the title", 10, 10);
}
