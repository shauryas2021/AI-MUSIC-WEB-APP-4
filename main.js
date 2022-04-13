song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song1_status = false;

var scoreLeftWrist = 0;
function preload(){
song1 = loadSound("angry_birds.mp3");song1 = loadSound("angry_birds.mp3");
song2 = loadSound("spider_man.mp3");
}
function setup()
{
   canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function play()
{
    song1.stop();
    song2.play();
    document.getElementById("name").innerHTML = "Song Name = Spider Man : Homecoming theme"
    song2.setVolume(1);
    song2.rate(1);
    song1.setVolume(1);
    song1.rate(1);
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if (scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
     song2.stop();

     if (song1_status == false){
         song1.play();
         document.getElementById("name").innerHTML = "Music Name = Angry Birds Theme"
     }
    }
    
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
if (results.length > 0){
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreLeftWrist = " + scoreLeftWrist);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
   rightWristY = results[0].pose.rightWrist.y;
    console.log("RightWristX = " + rightWristX + " RighttWristY = " + rightWristY);
}
}
