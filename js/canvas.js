//var cont = 0;
function graficar(cont){
	//cont = cont + 1;
	var posX = [0,115,275,170,185,250,390,485,620,395,420,480,540,600,610,650];
	var posY = [0,60,20,130,215,300,100,75,60,190,270,170,210,160,240,300];
	var tam = [0,70,70,70,70,70,70,70,70,70,70,50,50,50,50,70];

	var posXc = [0,115,275,170,185,250,390,485,620,395,420,480,540,600,610,650];
	var posYc = [0,35,3,105,190,275,75,50,35,165,245,145,185,135,215,275];
	var tamc = [0,90,90,90,90,90,90,90,90,90,90,70,70,70,70,90];

	var tab_jug = document.getElementById("tab_ju");
	var ctx = tab_jug.getContext("2d");
	var soldado = new Image();
	soldado.src = "imagenes/soldado.png";
	var castillo = new Image();
	castillo.src = "imagenes/castillo.png";	
	if(cont >= 1){
		soldado.onload = function (){
			ctx.drawImage(soldado,posX[cont+1],posY[cont+1],tam[cont+1],tam[cont+1]);	
		}
	}
	castillo.onload = function (){
		ctx.drawImage(castillo,posXc[cont],posYc[cont],tamc[cont],tamc[cont]);	
	}
	if(cont > 14 && cont < 20){
		var clickSound = new Audio("sound/ganador.mp3");
		clickSound.play();
		alertify.confirm("GANASTE!!!",
  		function(){
    		alertify.success('A JUGAR!!!');    		
			ctx.clearRect(0, 0, tab_jug.width, tab_jug.height);
			cont = 0;			
  		},
  		function(){
    		alertify.error('CHAO!!!');
  		});
	}
	if(cont == 20){
		ctx.clearRect(0, 0, tab_jug.width, tab_jug.height);
	}	
}