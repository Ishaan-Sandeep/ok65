noseX = 0
noseY = 0
Lwrist = 0
Rwrist = 0
FZ = 0
function setup() {
   canvas =  createCanvas(900,300)
   canvas.position(250,350)
   video = createCapture(VIDEO)
   video.size(300,300)
   posiffier = ml5.poseNet(video,modelLoaded)
   posiffier.on('pose',GotResults)
}
function draw() {
    background("lemonchiffon")
    fill("lightcoral")
    text("Ishaan>Dheeraj",noseX,noseY)
    textSize(FZ-100)
}
function modelLoaded() {
    console.log("Model Is Loaded!")
}
function GotResults(results) {
    if(results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        Lwrist = results[0].pose.leftWrist.x
        Rwrist = results[0].pose.rightWrist.x
        FZ = Math.floor(Lwrist - Rwrist)
    }
}