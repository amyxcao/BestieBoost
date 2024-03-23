let mobilenet;
let puffin;

function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(puffin, gotResults);
}

function gotResults();

function imageReady() {
    imageReady(puffin, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    background(0);
    puffin = createImg('puffin.jpg');
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}