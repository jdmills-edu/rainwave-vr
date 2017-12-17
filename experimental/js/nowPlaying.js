//update now playing

var timeLeft;
var updateAgain;

function updateNowPlaying(globalStationSID, npTitle, npArtist, npAlbum, npArt, npLength, serverTime){
	updateAlbumArt(npArt);
	document.getElementById("title").innerHTML = npTitle;
	document.getElementById("artist").innerHTML = npArtist;
	document.getElementById("album").innerHTML = npAlbum;
	getTimeDiff(serverTime);
	//circle back when the this song finishes, add 5 second buffer
	timeLeft = (npEnd - serverTime) * 1000;
	countdownTimer = npEnd - serverTime;
	updateAgain = setTimeout(function(){getRWInfo(globalStationSID)}, timeLeft + 8000);
}

//update albumArt

function updateAlbumArt(npArt){
	albumArt.material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(npArt)});
	albumArt.material.needsUpdate = true;
	setTimeout(resizeArt,1000);
	}

function resizeArt(){
	if (albumArt.material.map.image.width > albumArt.material.map.image.height){
		//get aspect ratio
		var aspectRatio = albumArt.material.map.image.height / albumArt.material.map.image.width
		albumArt.scale.x = 320;
		albumArt.scale.y = 320 * aspectRatio;
		}
	if (albumArt.material.map.image.height > albumArt.material.map.image.width){
		//get aspect ratio
		var aspectRatio = albumArt.material.map.image.width / albumArt.material.map.image.height
		albumArt.scale.y = 360;
		albumArt.scale.x = 360 * aspectRatio;
		}
	else {
		albumArt.scale.x = 320;
		albumArt.scale.y = 320;
	}
}