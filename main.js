function identify(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/O1i9x7kx1/model.json",modelReady)
}
function modelReady(){
    console.log("modelready")
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
    console.log("error");
    }
    else{
        console.log(results);
        document.getElementById("hear1").innerHTML="I hear a "+results[0].label;
        document.getElementById("acc1").innerHTML="I am "+(results[0].confidence*100).toFixed(2)+"% sure";
        if(results[0].label=="Background Noise"){
            document.getElementById("img1").src="https://nofilmschool.com/sites/default/files/styles/facebook/public/soundwave.jpg?itok=UGovzxgR"
        }
        else if(results[0].label=="Cat"){
            document.getElementById("img1").src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
        }
        else if(results[0].label=="Dog"){
            document.getElementById("img1").src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
        }
        else if(results[0].label=="Cow"){
            document.getElementById("img1").src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
        }
        else{
            document.getElementById("img1").src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
        }
    }  
}
