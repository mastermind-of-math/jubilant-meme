function doNothing(){
    navigator.mediaDevices.getUserMedia({audio, True})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9zENfpMI8/model.json', modelLoaded)
}

function modelLoaded(){
    console.error("Model not Loaded")
}