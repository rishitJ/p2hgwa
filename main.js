Webcam.set({
    width:350,
    height:300,
    img_format:"png",
    png_quality:100
})

camera = document.getElementById("camera")
Webcam.attach("camera")

function clicking()
{
    Webcam.snap(function(data_uri) {
        console.log(data_uri)
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'"
})
}

console.log("ml5version", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PsVf5nODo/model.json')