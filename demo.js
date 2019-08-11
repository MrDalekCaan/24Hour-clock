/*
 *
 *Canvas for clock
 *Made By Dalek
 *
 */

var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 17;
ctx.shadowBlur = 15;

function renderTime() {
	var date = new Date();
	var today = date.toDateString();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var ms = date.getMilliseconds();
	var rs=s+ms/1000;
	gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
	gradient.addColorStop(0, "#03303a");
	gradient.addColorStop(1, "#000");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 500, 500);

	ctx.beginPath();
	ctx.arc(250,250,200,deg(270),deg(h*30-90));
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(250 ,250,180,deg(270),deg(m*6-90) );
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(250,250,160,deg(270),deg(rs*6-90));
	ctx.stroke();

	ctx.font = '25px Helventica';
	ctx.fillStyle = 'rgba(0,255,255,1)';
	ctx.fillText(today,175,250);

	ctx.font = '25px Helventica';
	ctx.fillStyle = 'rgba(0,255,255,1)';
	h=('0'+h).slice(-2);
	m=('0'+m).slice(-2);
	s=('0'+s).slice(-2);
	ms=('00'+ms).slice(-3);
	ctx.fillText(h+':'+m+':'+s+':'+ms,190,280);

}

function deg (deg) {
	let f=Math.PI/180;
	return deg*f;
}

setInterval(renderTime, 1);