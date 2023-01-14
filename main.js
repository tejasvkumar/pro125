nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(650, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);

}

function modelloaded() {
    console.log("poseNet has been initialised");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);

    }

}

function draw() {
    background("orange");
    document.getElementById("square_side").innerHTML = "font size of the text will be = " + difference + "px";
    fill("green");
    textSize(difference);
    text('Tejasv',50,400);
}