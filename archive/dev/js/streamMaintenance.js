//chrome error correction - keep playing after song ends

//DEPRECATE IN FAVOR OF RAINWAVEPLAYER.JS
var streamErrors = 0;

setInterval(function(){checkStream(pressPlay, timeLeft)},1000);

function secsToTime(secs){
	var minutes = Math.floor(secs / 60);
	var seconds = secs % 60;
	if (seconds <= 9){
		seconds = "0" + seconds
		}
	time = minutes + ":" + seconds;
	return time;
}

function checkStream(pressPlay, timeLeft){
	
	if (pressPlay == true && countdownTimer >= 0){
		document.getElementById("title").innerHTML = npTitle + " (" + secsToTime(countdownTimer) + ")";
		countdownTimer--;
		}
	
	if(stream.error && pressPlay == true && streamErrors < 60){
		stream.src = stream.currentSrc;
		stream.play();
		streamErrors++;
	}
	else if(!stream.error && pressPlay == true){
		streamErrors = 0;
	}
	else if(stream.error && pressPlay == true && streamErrors >= 60){
		pressPlay = false;
		controlPanel.material.color.set(0xff0000);
		controlPanel.material.needsUpdate = true;
		holoScroller.material.color.set(0xff0000);
		holoScroller.material.needsUpdate = true;
	}
}
//END DEPRECATE IN FAVOR OF RAINWAVEPLAYER.JS