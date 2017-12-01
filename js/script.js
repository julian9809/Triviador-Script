var canvas = document.getElementById("lienzo");
var ctx = ctx.getContext("2d");

function degToRoad(degree){ 
	var factor = Math.PI /180; 
	return factor * degree; 

}


function renderTime(){
	var now = new Date();
	var today = now.toDateString();
	var time = now.toLocaleTimeString(); 
	var minutes = now.getMinutes();
	var seconds = now.getSeconds(); 
 //hours 
	ctx.beginPath(); 
	ctx.arc(250, 250, 200, degToRoad(270), degToRoad((hours*15)-90));
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(250,250,170, degToRoad(270), degToRoad((minutes*6)-90));
	ctx.stroke();
}


