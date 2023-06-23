let numFrames = 20;
let images = [];
let img;
let currentFrame = 0;
let t = ["🎩", "👑", "🐈", "🕶", "👒"]
let s = ["🎀", " ", "💪🏿💪🏿", "🧳   ", "", "🍭     ", "", "🍖     ", "", "🍡     "]
let c = ["", "", " 👚", "", " 👙", "  🩲", "  🔥", "", "  🍔"]
let a = ["", "        👠 👠", " ", "", "         👢👢", "", "        🥾🥾"]
let index = 0;
let box = 0;
let ma = 0;
let zz = 0;


function preload() {
    for (let i = 0; i < numFrames; i++) {
        images[i] = loadImage("cats/cat_" + nf(i, 2) + ".PNG");
    }   

    img = loadImage("catt/cat.PNG");    
}

function setup() {
    createCanvas(955, 720);
    frameRate(13);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(245, 190, 189);

    image(images[currentFrame], 0, 0, 955, 720);

console.log(currentFrame)
    if (currentFrame == images.length - 1 || currentFrame < 1) {
        currentFrame = 0; 
    }
    currentFrame++;

    cat();


   textSize(40);
   fill(0);
   text(t[index], width / 2, 310);
   
   textSize(30);
   fill(0);
   text(s[box], width / 2, 370);
   
   textSize(50);
   fill(0);
   text(c[ma], width / 2, 370);
   
   textSize(20);
   fill(0);
   text(a[zz], width / 2, 410);
}    

function cat() {
    image(img, mouseX -55, mouseY -4, 83, 120);
}


function mouseClicked() { 
   index++;
   if(index > t.length - 1){ 
      index = 0;
   }

   box++;
   if(box > s.length - 1){ 
      box = 0;
   }

   ma++;
   if(ma > c.length - 1){ 
      ma = 0;
   }
   
   zz++;
   if(zz > a.length - 1){
      zz = 0;
   }
}