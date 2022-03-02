function setup() {
  canvas=createCanvas(640, 480);
    canvas.position(200,250);
    video = createCapture(VIDEO);
    video.hide()
    }
    
    function draw() {
    image(video , 130,100,220,200);
    fill( 255,0,0);
    stroke( 255,0,0); 
    circle(100,56,80);
    circle(350,56,80);
    circle(100,350,80);
    circle(350,350,80);
    fill( 0,255,0);
    stroke( 0,255,0);
    rect( 100,40,250,28);
    rect( 100,40,28,290);
    rect( 100,330,250,28);
    rect( 350,40,28,318);
    }
    function take_snapshot(){ save('student_name.png'); }