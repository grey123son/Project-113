function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(650, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    circle(120,50,40);
    rect(140,50,360,1);
    circle(500,50,40);
    rect(120,70,1,300);
    circle(500,370,40);
    rect(500,70,1,280);
    circle(120,370,40)
    rect(140,370,340,1)
    image(video, 160,100,300,240);

}

function take_snapshot(){
    save("tinted_screenshot.png");
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}