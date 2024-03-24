let mobilenet;
let video;
let label = '';

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        label = results[0].className;
        //let prob = results[0].probability;
        mobilenet.predict(gotResults);
    }
}

function setup() {
    createCanvas(680, 480);
    video = createCapture(VIDEO);
    //puffin = createImg('puffin.jpg');
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    image(video, 0, 0);
    fill(0);
    textSize(32);
    text(label, 10, height - 100);
}