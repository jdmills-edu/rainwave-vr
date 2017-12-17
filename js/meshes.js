//Carpet
var geometry = new THREE.BoxGeometry(992, 8, 992);
var material = new THREE.MeshBasicMaterial({
map: THREE.ImageUtils.loadTexture('textures/carpet-texture-tiled.jpg')
});
//material = new THREE.MeshBasicMaterial({color:'#3e3e3e'});
var carpet = new THREE.Mesh(geometry, material);
var thisObject = carpet;
thisObject.name = "carpet";
thisObject.position.y = -512;
scene.add(thisObject);

//rainwave banner
var text = 'rainwave radio';
geometry = new THREE.TextGeometry(text);
material = new THREE.MeshBasicMaterial({color:'#f7941e'});
var rainwaveBanner = new THREE.Mesh(geometry, material);
thisObject = rainwaveBanner;
thisObject.name = "rainwaveBanner";
thisObject.scale.x = .8;
thisObject.scale.y = .8;
thisObject.scale.z = .4;
thisObject.scale.multiplyScalar(1);
thisObject.position.x = -350;
thisObject.position.y = 190;
thisObject.position.z = -350;
scene.add(thisObject);

//rainwave url
var text = 'http://rainwave.cc';
geometry = new THREE.TextGeometry(text);
material = new THREE.MeshBasicMaterial({color:'#eee'});
var rainwaveBanner = new THREE.Mesh(geometry, material);
thisObject = rainwaveBanner;
thisObject.name = "rainwaveBanner";
thisObject.scale.x = .5;
thisObject.scale.y = .5;
thisObject.scale.z = .4;
thisObject.scale.multiplyScalar(1);
thisObject.position.x = -280;
thisObject.position.y = 110;
thisObject.position.z = -350;
scene.add(thisObject);

//Holographic platform cylinder
 geometry = new THREE.CylinderGeometry(170, 170, 160, 16);
 material = new THREE.MeshBasicMaterial({color:'#55595a'});
var holoPlatform = new THREE.Mesh(geometry, material);
thisObject = holoPlatform;
thisObject.name = "holoPlatform";
thisObject.position.y = -394;
scene.add(thisObject);

//Holographic scroller
geometry = new THREE.CylinderGeometry(180, 180, 1, 32);
material = new THREE.MeshBasicMaterial({
color:'#eeeeee'});
var holoScroller = new THREE.Mesh(geometry, material);
thisObject = holoScroller;
thisObject.name = "holoScroller";
thisObject.scale.y = 20;
thisObject.position.y = holoPlatform.position.y;
scene.add(thisObject);

//Album art
geometry = new THREE.BoxGeometry(1, 1, 16);
material = new THREE.MeshBasicMaterial({
map: THREE.ImageUtils.loadTexture('textures/rainwave-logo.png')
});
var albumArt = new THREE.Mesh(geometry, material);
thisObject = albumArt;
thisObject.name = "albumArt";
thisObject.scale.x = 320;
thisObject.scale.y = 320;
thisObject.position.y = -100;
scene.add(thisObject);

//Speaker Left
geometry = new THREE.BoxGeometry(128, 1, 1);
material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('textures/speaker-wood.png')});
var speakerLeft = new THREE.Mesh(geometry, material);
thisObject = speakerLeft;
thisObject.name = "speakerLeft";
thisObject.scale.y = 256;
thisObject.scale.z = 128;
thisObject.position.x = -350;
thisObject.position.y = thisObject.scale.y / 2 - 512;
thisObject.position.z = 50;
thisObject.rotation.y = .5;
scene.add(thisObject);

//Cone1 Left
geometry = new THREE.CylinderGeometry(50, 50, 1, 16);
material = new THREE.MeshBasicMaterial({color:'#1e1e1e'});
var cone1Left = new THREE.Mesh(geometry, material);
thisObject = cone1Left;
thisObject.name = "cone1Left";
thisObject.scale.y = 10;
thisObject.position.x = speakerLeft.position.x + 30;
thisObject.position.y = speakerLeft.scale.y / 2 - 512 - 40;
thisObject.position.z = speakerLeft.position.z + speakerLeft.scale.z / 2 - 10;
thisObject.rotation.x = 90 * (Math.PI / 180);
thisObject.rotation.z = speakerLeft.rotation.y * (-1);
scene.add(thisObject);

//Cone2 Left
geometry = new THREE.CylinderGeometry(30, 30, 1, 16);
material = new THREE.MeshBasicMaterial({color:'#1e1e1e'});
var cone2Left = new THREE.Mesh(geometry, material);
thisObject = cone2Left;
thisObject.name = "cone2Left";
thisObject.scale.y = 10;
thisObject.position.x = cone1Left.position.x;
thisObject.position.y = cone1Left.position.y + 110;
thisObject.position.z = cone1Left.position.z;
thisObject.rotation.x = cone1Left.rotation.x;
thisObject.rotation.z = cone1Left.rotation.z;
scene.add(thisObject);

//Speaker Right
geometry = new THREE.BoxGeometry(128, 1, 1);
material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('textures/speaker-wood.png')});
var speakerRight = new THREE.Mesh(geometry, material);
thisObject = speakerRight;
thisObject.name = "speakerRight";
thisObject.scale.y = speakerLeft.scale.y;
thisObject.scale.z = speakerLeft.scale.z;
thisObject.position.x = speakerLeft.position.x * (-1);
thisObject.position.y = speakerLeft.position.y;
thisObject.position.z = speakerLeft.position.z;
thisObject.rotation.y = speakerLeft.rotation.y * (-1);
scene.add(thisObject);

//Cone1 Right
geometry = new THREE.CylinderGeometry(50, 50, 1, 16);
material = new THREE.MeshBasicMaterial({color:'#1e1e1e'});
var cone1Right = new THREE.Mesh(geometry, material);
thisObject = cone1Right;
thisObject.name = "cone1Right";
thisObject.scale.y = 10;
thisObject.position.x = cone1Left.position.x * (-1);
thisObject.position.y = cone1Left.position.y;
thisObject.position.z = cone1Left.position.z;
thisObject.rotation.x = 90 * (Math.PI / 180);
thisObject.rotation.z = speakerRight.rotation.y * (-1);
scene.add(thisObject);

//Cone2 Right
geometry = new THREE.CylinderGeometry(30, 30, 1, 16);
material = new THREE.MeshBasicMaterial({color:'#1e1e1e'});
var cone2Right = new THREE.Mesh(geometry, material);
thisObject = cone2Right;
thisObject.name = "cone2Right";
thisObject.scale.y = 10;
thisObject.position.x = cone1Right.position.x;
thisObject.position.y = cone1Right.position.y + 110;
thisObject.position.z = cone1Right.position.z;
thisObject.rotation.x = cone1Right.rotation.x;
thisObject.rotation.z = cone1Right.rotation.z;
scene.add(thisObject);

var cones = [cone1Left, cone2Left, cone1Right, cone2Right];

//Control Panel
geometry = new THREE.BoxGeometry(1, 1, 1);
material = new THREE.MeshBasicMaterial({color: '#eee'});
var controlPanel = new THREE.Mesh(geometry, material);
thisObject = controlPanel;
thisObject.name = "controlPanel";
thisObject.scale.x = 768;
thisObject.scale.y = 96;
thisObject.scale.z = 96;
thisObject.rotation.x = -0.4;
thisObject.position.x = 0;
thisObject.position.y = thisObject.scale.y - 512 - 64;
thisObject.position.z = 300;
scene.add(thisObject);

//Help Screen
geometry = new THREE.BoxGeometry(1,1,1);
material = new THREE.MeshBasicMaterial({
map: THREE.ImageUtils.loadTexture('textures/help-screen.png')
});
var helpScreen = new THREE.Mesh(geometry, material);
thisObject = helpScreen;
thisObject.name = "helpScreen";
//thisObject.rotation.x = (-90) * (Math.PI/180);
thisObject.scale.x = 768;
thisObject.scale.y = 576;
thisObject.position.x = 0;
thisObject.position.y = controlPanel.position.y + controlPanel.scale.y / 2 + thisObject.scale.y / 2;
thisObject.position.z = controlPanel.position.z;
thisObject.visible = false;
scene.add(thisObject);

//Party pedastal
geometry = new THREE.BoxGeometry(1, 1, 1);
material = new THREE.MeshBasicMaterial({color: '#eee'});
var partyPedastal = new THREE.Mesh(geometry, material);
thisObject = partyPedastal;
thisObject.name = "partyPedastal";
thisObject.scale.x = 50;
thisObject.scale.y = 100;
thisObject.scale.z = 50;
thisObject.rotation.x = 0;
thisObject.position.x = -470;
thisObject.position.y = thisObject.scale.y / 2 - 512;
thisObject.position.z = 470;
thisObject.visible = false;
scene.add(thisObject);

//Party button
geometry = new THREE.CylinderGeometry(15, 15, 1, 8);
material = new THREE.MeshBasicMaterial({color:'#ff0000'});
var partyButton = new THREE.Mesh(geometry, material);
thisObject = partyButton;
thisObject.name = "partyButton";
thisObject.scale.y = 15;
thisObject.position.x = partyPedastal.position.x;
thisObject.position.y = partyPedastal.position.y + partyPedastal.scale.y / 2 + thisObject.scale.y / 2;
thisObject.position.z = partyPedastal.position.z;
thisObject.visible = false;
scene.add(thisObject);

//stop button
geometry = new THREE.CylinderGeometry(30, 30, 15, 16);
material = new THREE.MeshBasicMaterial({color:'#eee'});
var stopCylinder = new THREE.Mesh(geometry, material);
thisObject = stopCylinder;
thisObject.name = "stopCylinder"
thisObject.position.x = cone2Right.position.x + 30;
thisObject.position.y = cone2Right.position.y + 100;
thisObject.position.z = cone2Right.position.z - 60;
thisObject.rotation.x = 90 * (Math.PI / 180);
thisObject.rotation.z = cone2Right.rotation.z;
scene.add(thisObject);

geometry = new THREE.BoxGeometry(25, 19, 25);
material = new THREE.MeshBasicMaterial({color: '#f7941e'});
var stopSquare = new THREE.Mesh(geometry, material);
thisObject = stopSquare;
thisObject.name = "stopSquare"
thisObject.position.x = stopCylinder.position.x;
thisObject.position.y = stopCylinder.position.y;
thisObject.position.z = stopCylinder.position.z;
thisObject.rotation.x = stopCylinder.rotation.x;
thisObject.rotation.z = stopCylinder.rotation.z;
scene.add(thisObject);

//bars

var bars=[];
var barPosition = (-450);

for(i = 0; i < 10; i++){
	geometry = new THREE.BoxGeometry(1, 1, 1);
	material = new THREE.MeshBasicMaterial({color: '#eee'});
	var barMesh = new THREE.Mesh(geometry, material);
	thisObject = barMesh;
	thisObject.name = 'bar'+[i];
	thisObject.scale.x = 85;
	thisObject.scale.y = 100;
	thisObject.scale.z = 85;
	thisObject.position.x = barPosition;
	thisObject.position.y = (thisObject.scale.y/2) - 512;
	thisObject.position.z = ((thisObject.scale.z/2) - 512) + 25;
	scene.add(thisObject);
	barPosition = barPosition + 100;
	bars.push(thisObject);
}

//buttons
var allButton = {text:"all", buttonName:"allButton", offset: (-350), mesh:""};
var gameButton = {text:"game", buttonName:"gameButton", offset: (-250), mesh:""};
var chipButton = {text:"chip", buttonName:"chipButton", offset: -70, mesh:""};
var ocrButton = {text:"ocr", buttonName:"ocrButton", offset: 70, mesh:""};
var coversButton = {text:"covers", buttonName:"coversButton", offset: 180, mesh:""};

var buttons = [allButton, gameButton, chipButton, ocrButton, coversButton];

for(i = 0; i < buttons.length; i++){
	buttonBuilder(i, buttons[i].text, buttons[i].buttonName, buttons[i].offset);
	}

//button geometry

function buttonBuilder(i, text, buttonName, offset){
	geometry = new THREE.TextGeometry(text);
	material = new THREE.MeshBasicMaterial({color:'#f7941e'});
	thisButton = buttonName + "Mesh";
	thisButton = new THREE.Mesh(geometry, material);
	thisButton.scale.x = 0.4;
	thisButton.scale.y = 0.4;
	thisButton.scale.z = 0.2;
	thisButton.rotation.x = controlPanel.rotation.x;
	thisButton.scale.multiplyScalar(1);
	thisButton.position.x = controlPanel.position.x + offset;
	thisButton.position.y = controlPanel.position.y;
	thisButton.position.z = controlPanel.position.z + controlPanel.scale.z / 2;
	buttons[i].mesh = thisButton;
	buttons[i].mesh.name = buttonName + "Mesh";
	scene.add(thisButton);
}

//button reset
function resetButtons(){
	for (i = 0; i < buttons.length; i++) {
		buttons[i].mesh.material.color.set(0xf7941e);
		buttons[i].mesh.material.needsUpdate = true;
		buttons[i].mesh.scale.z = .2;
		}
}

//pick a station
var text = 'pick a station';
geometry = new THREE.TextGeometry(text);
material = new THREE.MeshBasicMaterial({color:'#eee'});
var instructionsText = new THREE.Mesh(geometry, material);
thisObject = instructionsText;
thisObject.name = 'instructionsText';
thisObject.scale.x = .3;
thisObject.scale.y = .3;
thisObject.scale.z = .05;
thisObject.rotation.x = (-70) * (Math.PI/180);
thisObject.scale.multiplyScalar(1);
thisObject.position.x = controlPanel.position.x - 130;
thisObject.position.y = carpet.position.y + 10;
thisObject.position.z = controlPanel.position.z + 115;
scene.add(thisObject);

//help button

text = '?';
geometry = new THREE.TextGeometry(text);
material = new THREE.MeshBasicMaterial({color:'#f7941e'});
var helpButton = new THREE.Mesh(geometry, material);
thisObject = helpButton;
thisObject.name = 'helpButton';
thisObject.scale.x = .2;
thisObject.scale.y = .2;
thisObject.scale.z = .15;
thisObject.rotation.x = (-80) * (Math.PI/180);
thisObject.scale.multiplyScalar(1);
thisObject.position.x = controlPanel.position.x - 6;
thisObject.position.y = carpet.position.y + 5;
thisObject.position.z = controlPanel.position.z + 170;
scene.add(thisObject);

geometry = new THREE.CylinderGeometry(20, 20, 5, 16);
material = new THREE.MeshBasicMaterial({color:'#eee'});
var helpCylinder = new THREE.Mesh(geometry, material);
thisObject = helpCylinder;
thisObject.name = "helpCylinder"
thisObject.rotation.x = (10) * (Math.PI/180);
thisObject.position.x = controlPanel.position.x;
thisObject.position.y = carpet.position.y + 10;
thisObject.position.z = controlPanel.position.z + 160;
scene.add(thisObject);

//dance floor tiles
var tiles=[];
var tileXZ = 198;
//row 1
for(i=0; i<5; i++){
	var geometry = new THREE.BoxGeometry(tileXZ, 8, tileXZ);
	material = new THREE.MeshBasicMaterial({color:'#eee'});
	var tile = new THREE.Mesh(geometry, material);
	var thisObject = tile;
	thisObject.name = "tile1-" + i;
	thisObject.position.x = tileXZ * (-2) + tileXZ * i;
	thisObject.position.z = tileXZ * (-2);
	thisObject.position.y = -512;
	thisObject.visible = false;
	scene.add(thisObject);
	tiles.push(thisObject);
}
//row 2
for(i=0; i<5; i++){
	var geometry = new THREE.BoxGeometry(tileXZ, 8, tileXZ);
	material = new THREE.MeshBasicMaterial({color:'#eee'});
	var tile = new THREE.Mesh(geometry, material);
	var thisObject = tile;
	thisObject.name = "tile2-" + i;
	thisObject.position.x = tileXZ * (-2) + tileXZ * i;
	thisObject.position.z = tileXZ * (-1);
	thisObject.position.y = -512;
	thisObject.visible = false;
	scene.add(thisObject);
	tiles.push(thisObject);
}
//row 3
for(i=0; i<5; i++){
	var geometry = new THREE.BoxGeometry(tileXZ, 8, tileXZ);
	material = new THREE.MeshBasicMaterial({color:'#eee'});
	var tile = new THREE.Mesh(geometry, material);
	var thisObject = tile;
	thisObject.name = "tile3-" + i;
	thisObject.position.x = tileXZ * (-2) + tileXZ * i;
	thisObject.position.z = 0;
	thisObject.position.y = -512;
	thisObject.visible = false;
	scene.add(thisObject);
	tiles.push(thisObject);
}
//row 4
for(i=0; i<5; i++){
	var geometry = new THREE.BoxGeometry(tileXZ, 8, tileXZ);
	material = new THREE.MeshBasicMaterial({color:'#eee'});
	var tile = new THREE.Mesh(geometry, material);
	var thisObject = tile;
	thisObject.name = "tile4-" + i;
	thisObject.position.x = tileXZ * (-2) + tileXZ * i;
	thisObject.position.z = tileXZ * (1);
	thisObject.position.y = -512;
	thisObject.visible = false;
	scene.add(thisObject);
	tiles.push(thisObject);
}
//row 5
for(i=0; i<5; i++){
	var geometry = new THREE.BoxGeometry(tileXZ, 8, tileXZ);
	material = new THREE.MeshBasicMaterial({color:'#eee'});
	var tile = new THREE.Mesh(geometry, material);
	var thisObject = tile;
	thisObject.name = "tile4-" + i;
	thisObject.position.x = tileXZ * (-2) + tileXZ * i;
	thisObject.position.z = tileXZ * (2);
	thisObject.position.y = -512;
	thisObject.visible = false;
	scene.add(thisObject);
	tiles.push(thisObject);
}

//hide these when clearing the dance floor
hidePartyMeshes = [carpet, speakerLeft, speakerRight, cone1Left, cone2Left, cone1Right, cone2Right, controlPanel, allButton.mesh, gameButton.mesh, chipButton.mesh, ocrButton.mesh, coversButton.mesh, stopCylinder, stopSquare, instructionsText];

geometry = new THREE.BoxGeometry(200, 3, 3);
material = new THREE.MeshBasicMaterial({color: '#eee'});
var volumeSlider = new THREE.Mesh(geometry, material);
thisObject = volumeSlider;
thisObject.name = "volumeSlider"
thisObject.position.x = controlPanel.position.x;
thisObject.position.y = controlPanel.position.y + 90;
thisObject.position.z = controlPanel.position.z;
scene.add(thisObject);

geometry = new THREE.CylinderGeometry(12, 12, 4, 16);
material = new THREE.MeshBasicMaterial({color: '#1f95e5'});
var volumeDrag = new THREE.Mesh(geometry, material);
thisObject = volumeDrag;
thisObject.name = "volumeDrag";
thisObject.position.x = volumeSlider.position.x + 60;
thisObject.position.y = volumeSlider.position.y;
thisObject.position.z = volumeSlider.position.z;
thisObject.rotation.x = 90 * (Math.PI / 180);
thisObject.addBehavior(altspace.utilities.behaviors.Drag({ x: {min: -100, max: 100}, z: {min: volumeSlider.position.z, max: volumeSlider.position.z}, y: false}));
scene.add(thisObject);

geometry = new THREE.CylinderGeometry(16, 16, 4, 16);
material = new THREE.MeshBasicMaterial({color: '#eee'});
var volumeIconCylinder = new THREE.Mesh(geometry, material);
thisObject = volumeIconCylinder;
thisObject.name = "volumeIconCylinder";
thisObject.position.x = volumeSlider.position.x - 134;
thisObject.position.y = volumeSlider.position.y;
thisObject.position.z = volumeSlider.position.z;
thisObject.rotation.x = 90 * (Math.PI / 180);
scene.add(thisObject);

geometry = new THREE.BoxGeometry(2, 4, 6);
material = new THREE.MeshBasicMaterial({color: '#f7941e'});
var volumeIconStripe1 = new THREE.Mesh(geometry, material);
thisObject = volumeIconStripe1;
thisObject.name = "volumeIconStripe1"
thisObject.position.x = volumeIconCylinder.position.x - 4;
thisObject.position.y = volumeIconCylinder.position.y;
thisObject.position.z = volumeIconCylinder.position.z;
scene.add(thisObject);

geometry = new THREE.BoxGeometry(2, 8, 6);
material = new THREE.MeshBasicMaterial({color: '#f7941e'});
var volumeIconStripe2 = new THREE.Mesh(geometry, material);
thisObject = volumeIconStripe2;
thisObject.name = "volumeIconStripe2"
thisObject.position.x = volumeIconCylinder.position.x;
thisObject.position.y = volumeIconCylinder.position.y;
thisObject.position.z = volumeIconCylinder.position.z;
scene.add(thisObject);

geometry = new THREE.BoxGeometry(2, 12, 6);
material = new THREE.MeshBasicMaterial({color: '#f7941e'});
var volumeIconStripe3 = new THREE.Mesh(geometry, material);
thisObject = volumeIconStripe3;
thisObject.name = "volumeIconStripe3"
thisObject.position.x = volumeIconCylinder.position.x + 4;
thisObject.position.y = volumeIconCylinder.position.y;
thisObject.position.z = volumeIconCylinder.position.z;
scene.add(thisObject);

volumeObjects = [volumeSlider, volumeDrag, volumeIconCylinder, volumeIconStripe1, volumeIconStripe2, volumeIconStripe3];