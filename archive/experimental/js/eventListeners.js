		//event listeners
		
		var pressPlay = false;
		
		//sync button listeners
		
		function addButtonListeners(listenerSID, listenerURL, listenerButton){
			listenerButton.addEventListener('cursorup', function() {
				syncPlaying.set({
					playing:true,
					sid:listenerSID
				});
			});
			listenerButton.addEventListener('cursordown', function() {
				listenerButton.scale.z -=.05;
			});
		}
		
		//do this when a stream or stop button is pressed
		syncPlaying.on('value',function(snapshot){
			var val = snapshot.val();
			var syncPlaying = val.playing;
			var syncSID = val.sid;
			console.log("syncPlaying was " + syncPlaying);
			console.log("syncSID was " + syncSID);
			syncStream(syncPlaying, syncSID);
		});
		
		function syncStream (syncPlaying, syncSID){
			//play button actions
			var playing = syncPlaying;
			var sid = syncSID;
			if(playing == true){
				pressPlay = true;
				thisButton = streams[(sid) - 1].button;
				clearTimeout(updateAgain);
				globalStationSID = sid;
				stream.pause();
				stream.src="";
				stream.load();
				stream.src=streams[(sid) - 1].url;
				stream.play();
				streamErrors = 0;
				getRWInfo(sid);
				resetButtons();
				thisButton.material.color.set(0x1f95e5);
				thisButton.material.needsUpdate = true;
				for(i=0; i<cones.length; i++){
					cones[i].material.color.set(0x1f95e5);
					}
				controlPanel.material.color.set(0xeeeeee);
				controlPanel.material.needsUpdate = true;
				holoScroller.scale.y = 20;
				holoScroller.material.color.set(0xf7941e);
				holoScroller.material.needsUpdate = true;
				//blue bars
				if(partyMode == 0 || !(partyMode)){
				for(i=0;i<bars.length;i++){
					bars[i].material.color.set("#1f95e5");
					bars[i].material.needsUpdate = true;
					}
				}
			}
				
			//stop button actions
			if(playing == false){
				pressPlay = false;
				
				stream.pause();
				stream.src="";
				stream.load();
					
				//default album art
				albumArt.material = new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture('textures/rainwave-logo.png')
				});
				albumArt.material.needsUpdate = true;
				
				//reset buttons
				resetButtons();
							
				//reset cones
				for(i=0; i<cones.length; i++){
						cones[i].material.color.set(0x1e1e1e);
					}
					
				//reset scroller
				holoScroller.material.color.set(0xeeeeee);
				holoScroller.material.needsUpdate = true;
				holoScroller.scale.y = 20;
				
				//reset text
				document.getElementById("title").innerHTML = "";
				document.getElementById("artist").innerHTML = "";
				document.getElementById("album").innerHTML = "";
				
				//bar reset
				for(i=0;i<bars.length;i++){
					bars[i].scale.y = 100;
					bars[i].material.color.set("#eee");
				}
				syncPartyMode.set(false);
			}
		}
		//attach listeners to buttons
		
		var all_listener = new addButtonListeners(stream_all.sid,stream_all.url,stream_all.button);
		var game_listener = new addButtonListeners(stream_game.sid,stream_game.url,stream_game.button);
		var chip_listener = new addButtonListeners(stream_chip.sid,stream_chip.url,stream_chip.button);
		var ocr_listener = new addButtonListeners(stream_ocr.sid,stream_ocr.url,stream_ocr.button);
		var covers_listener = new addButtonListeners(stream_covers.sid,stream_covers.url,stream_covers.button);
		
		//party mode button
		var partyMode = 0;
		
		syncPartyMode.on('value',function(snapshot){
			partyMode = snapshot.val();
			checkPartyMode(partyMode);
			console.log('partyMode is ' + partyMode);
		});
		function enablePartyMode() {
			carpet.visible = false;
			for (i=0; i<tiles.length; i++){
				tiles[i].visible = true;
			}
			leftLaser.visible = true;
			rightLaser.visible = true;
		}
		function clearDanceFloor() {
			carpet.visible = false;
			for (i=0; i<tiles.length; i++){
				tiles[i].visible = true;
			}
			for (i=0; i<hidePartyMeshes.length; i++){
				hidePartyMeshes[i].visible = false;
			}
		}
		function maximumDancing() {
			carpet.visible = false;
			for (i=0; i<tiles.length; i++){
				tiles[i].visible = true;
			}
			for (i=0; i<hidePartyMeshes.length; i++){
				hidePartyMeshes[i].visible = false;
			}
			holoPlatform.visible = false;
			holoScroller.visible = false;
			var tween = new TWEEN.Tween(albumArt.position).to({ y: 100 }, 5000);
			document.getElementById("title").style.marginTop = "0px";
			tween.start();
		}
		function disablePartyMode(){
			//show carpet
			carpet.visible = true;
			
			//unhide hidden meshes
			for (i=0; i<hidePartyMeshes.length; i++){
				hidePartyMeshes[i].visible = true;
			}
			
			//hide all dance floor tiles
			for (i=0; i<tiles.length; i++){
				tiles[i].visible = false;
			}
			
			//reset scroller
			holoPlatform.visible = true;
			holoScroller.visible = true;
			if (pressPlay == true){
				holoScroller.material.color.set("#f7941e");
			}
			else if (pressPlay == false){
				holoScroller.material.color.set("#eee");
			}
			holoScroller.material.needsUpdate = true;
			holoScroller.scale.y = 20;
			
			//reset bars
			for(i=0;i<bars.length;i++){
				if(pressPlay == true){
				bars[i].material.color.set("#1f95e5");
				bars[i].material.needsUpdate = true;
				}
				if(pressPlay == false){
				bars[i].material.color.set("#eee");
				bars[i].material.needsUpdate = true;
				}
			}
			
			//reset cones
			if(pressPlay == true){
				for(i=0;i<cones.length;i++){
					cones[i].material.color.set("#1f95e5");
					cones[i].material.needsUpdate = true;
				}	
			}
			else if (pressPlay == false){
				for(i=0;i<cones.length;i++){
					cones[i].material.color.set("#1e1e1e");
					cones[i].material.needsUpdate = true;
				}
			}
			//tween album art
			var tween = new TWEEN.Tween(albumArt.position).to({ y: -100 }, 5000);
			if(!(navigator.userAgent.match(/mobile/))){
				document.getElementById("title").style.marginTop = "25%";
			}
			tween.start();
		}
		function checkPartyMode(partyTime){
			if(partyTime == 1){
				enablePartyMode();
				}
			else if (partyTime == 2){
				clearDanceFloor();
			}
			else if (partyTime == 3){
				maximumDancing();
			}
			else if (partyTime == 0){
				disablePartyMode();
				}
		}
		
		partyButton.addEventListener('cursorup', function(){
			if(partyMode == 0){
				syncPartyMode.set(1);
			}
			else if (partyMode == 1){
				syncPartyMode.set(2);
			}
			else if (partyMode == 2){
				syncPartyMode.set(3);
			}
			else {
				syncPartyMode.set(0);
			}
		});
		
		//stop button listeners
		
		stopCylinder.addEventListener('cursorup', function(){
			syncPlaying.set({playing:false})
		});
		stopSquare.addEventListener('cursorup', function(){
			syncPlaying.set({playing:false})
		});
		
		var showHelpScreen = false;
		function checkHelpScreen(){
			if (showHelpScreen == false){
				helpScreen.visible = true;
				showHelpScreen = true;
			}
			else{
				helpScreen.visible = false;
				showHelpScreen = false;
			}
		}
		//help screen
		helpButton.addEventListener('cursorup', checkHelpScreen);
		helpCylinder.addEventListener('cursorup', checkHelpScreen);
		