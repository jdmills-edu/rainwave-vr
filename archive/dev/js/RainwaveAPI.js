//Rainwave API

var globalStationSID;
var jsonResponse;
var	npTitle;
var	npArtist;
var	npAlbum;
var	npArt;
var npLength;
var npEnd;
var serverTime;

var countdownTimer = 0;

function getRWInfo(stationSID){
	if(stream.paused == false){
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://rainwave.cc/api4/info", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("sid="+stationSID);
		xhr.onload = function() {
			jsonResponse=JSON.parse(xhr.response);
			npID = jsonResponse.sched_current.songs[0].id;
			npTitle = jsonResponse.sched_current.songs[0].title;
			npArtist = jsonResponse.sched_current.songs[0].artists[0].name;
			npAlbum = jsonResponse.sched_current.songs[0].albums[0].name;
			npArt = "http://rainwave.cc" + jsonResponse.sched_current.songs[0].albums[0].art + "_320.jpg";
			npLength = jsonResponse.sched_current.songs[0].length;
			npEnd = jsonResponse.sched_current.end;
			serverTime = jsonResponse.api_info.time;
			var imgCache = new Image();
			globalStationSID = stationSID;
			imgCache.onload = updateNowPlaying(globalStationSID, npTitle, npArtist, npAlbum, npArt, npLength, serverTime);
			imgCache.style = "display:none;"
			imgCache.src = npArt;
			}
	}
}


var t;
var timeDiff;

function getTimeDiff(serverTime){
	t = Math.floor( Date.now() / 1000)
	timeDiff = t - serverTime;
}