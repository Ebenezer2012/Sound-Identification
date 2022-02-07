function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/z4CSHZxMO/model.jason",modelReady);
}

function modelReady(){
classifier.Classify(gotResult);
}

function gotResult(error,results){
console.log ('Got Results')
}