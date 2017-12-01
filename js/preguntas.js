var indice_respuesta_corecta;	 
var preguntas = [ 
	"¿En cuál de los siguientes países NO hay ningún desierto?", 
	"¿Quién escribió El viejo y el mar?", 
	"¿Quién marcó el gol 3.500 en Liga del Atlético de Madrid?", 
	"¿Qué cambio de estado ocurre en la sublimación? ", 
	"¿De qué color es la sange de los peces?", 
	"¿Quién pintó el cuadro El jardín de las delicias?", 
	"¿Como se llama el protagonista de la serie de televisión Mr Robot?", 
	"¿En qué país nació la Bauhaus?", 
	"¿Quién es la mascota de SEGA?", 
	"¿Quién es Bella en la saga Crepúsculo?", 
	"El Renacimiento marcó el inicio de la Edad... ", 
	"¿Qué se celebra el 8 de Marzo?", 
	"¿Quién gobernó Francia desde 1799 a 1815?", 
	"¿A qué país pertenece la isla Mujeres?",
	"Todos tenemos un amigo que nos ama y se llama...",
	"¿Cuántas caras tiene un icosaedro?",
	"¿Qué es el calostro?", 
	"¿Qué es un equino?",
	"¿Qué función cumplen los bigotes del gato?",
	"¿Qué es lo que transforma la leche en yogur?"

];
//la respuesta correcta es siempre la primera del arreglo, pero al momento de mostrarsen cambian de orden 
var respuestas = [
	["Alemania", "Chile", "Mongolia", "España"],
  	["Ernest Hemingway", "Norman Mailer", "Gabriel García Márquez","Truman Capote"],
  	["Christian Vieri", "Zinedine Zidane", "Luka Modric", "Adrián Escudero"],
  	["De sólido a gaseoso","De sólido a líquido", "De gaseoso a líquido","De líquido a solido"], 
  	["Rojo", "Verde oscuro","Marrón oscuro", "Azul"], 
  	["El Bosco", "Carvaggio", "Velázquez","Arcimboldo"],
  	["Elliot", "Sarah", "Jordan", "Molly"],
  	["Alemania","Holanda", "Rusia", "Estados Unidos"],
  	["Sonic","Mario","Pac Man", "Ryu"],
  	["Kristen Stewart","Cristina Ricci","Emma Watson","Dakota Fanning"],
  	["Moderna", "Antigüedad clásica","Contemporánea","Media"], 
  	["Dia de la mujer", "El día del trabajo", "El día del medio ambiente", "El día del niño"], 
  	["Napoleón Bonaparte","Adam Smith","François Quesnay","Louis Bonaldgug"],
  	["México","Argentina", "Colombia","Chile"],
  	["Jesus","Goku","Superman","Homero Simpson"],
  	["20", "16","8","24"], 
  	["La primera leche materna", "Una parte del intestino grueso", "Una hormona", "Un hueso de la espina dorsal"], 
  	["Un caballo","Un antilope","Un conejo","Una oveja"],
  	["Son un órgano táctil ","Son un órgano auditivo", "Son un órgano olfativo","Son de adorno"],
  	["Una bacteria","Un virus","Un musgo","El tiempo"]
];		
var clickSound = new Audio("sound/button-click.mp3");
var conta = 0;
var cont = 0;
var turnos=0;

function prueba(){

	var indice_aleatorio =  Math.floor(Math.random()*preguntas.length);
	var respuestas_posibles = respuestas[indice_aleatorio];
	var posiciones = [ 0,1,2,3];
	var respuestas_reordenadas = []; 
	var ya_entro=false;
	var ya_pregunto=false;

	for (i in respuestas_posibles){ 
		var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
		if(posicion_aleatoria==0 && ya_entro==false){ 
			indice_respuesta_corecta =i;
			ya_entro=true;
		}
		respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
		posiciones.splice(posicion_aleatoria, 1);
	}	    
	var txt_respuestas="";
	for( i in respuestas_reordenadas){
		txt_respuestas+='<input type = "radio" name="pp" value="'+i+'"><label>'+
		respuestas_reordenadas[i]+'</label><br>';
	}
	document.getElementById("respuestas").innerHTML = txt_respuestas;
	document.getElementById("preguntas").innerHTML = preguntas[indice_aleatorio];
	respuestas.splice(indice_aleatorio, 1);
	preguntas.splice(indice_aleatorio, 1);

	if (preguntas.length < 1 && respuestas.length < 1) {
		preguntas = [ 
		"¿En cuál de los siguientes países NO hay ningún desierto?", 
		"¿Quién escribió El viejo y el mar?", 
		"¿Quién marcó el gol 3.500 en Liga del Atlético de Madrid?", 
		"¿Qué cambio de estado ocurre en la sublimación? ", 
		"¿De qué color es la sange de los peces?", 
		"¿Quién pintó el cuadro El jardín de las delicias?", 
		"¿Como se llama el protagonista de la serie de televisión Mr Robot?", 
		"¿En qué país nació la Bauhaus?", 
		"¿Quién es la mascota de SEGA?", 
		"¿Quién es Bella en la saga Crepúsculo?", 
		"El Renacimiento marcó el inicio de la Edad... ", 
		"¿Qué se celebra el 8 de Marzo?", 
		"¿Quién gobernó Francia desde 1799 a 1815?", 
		"¿A qué país pertenece la isla Mujeres?",
		"Todos tenemos un amigo que nos ama y se llama...", 
		"¿Cuántas caras tiene un icosaedro?",
		"¿Qué es el calostro?", 
		"¿Qué es un equino?",
		"¿Qué función cumplen los bigotes del gato?",
		"¿Qué es lo que transforma la leche en yogur?"
		];
//la respuesta correcta es siempre la primera del arreglo, pero al momento de mostrarsen cambian de orden 
		 respuestas = [
		["Alemania", "Chile", "Mongolia", "España"],
  		["Ernest Hemingway", "Norman Mailer", "Gabriel García Márquez","Truman Capote"],
  		["Christian Vieri", "Zinedine Zidane", "Luka Modric", "Adrián Escudero"],
  		["De sólido a gaseoso","De sólido a líquido", "De gaseoso a líquido","De líquido a solido"], 
  		["Rojo", "Verde oscuro","Marrón oscuro", "Azul"], 
  		["El Bosco", "Carvaggio", "Velázquez","Arcimboldo"],
  		["Elliot", "Sarah", "Jordan", "Molly"],
  		["Alemania","Holanda", "Rusia", "Estados Unidos"],
  		["Sonic","Mario","Pac Man", "Ryu"],
  		["Kristen Stewart","Cristina Ricci","Emma Watson","Dakota Fanning"],
  		["Moderna", "Antigüedad clásica","Contemporánea","Media"], 
  		["Dia de la mujer", "El día del trabajo", "El día del medio ambiente", "El día del niño"], 
  		["Napoleón Bonaparte","Adam Smith","François Quesnay","Louis Bonaldgug"],
  		["México","Argentina", "Colombia","Chile"],
  		["Jesus","Goku","Superman","Homero Simpson"], 
  		["20", "16","8","24"], 
  		["La primera leche materna", "Una parte del intestino grueso", "Una hormona", "Un hueso de la espina dorsal"], 
  		["Un caballo","Un antilope","Un conejo","Una oveja"],
  		["Son un órgano táctil ","Son un órgano auditivo", "Son un órgano olfativo","Son de adorno"],
  		["Una bacteria","Un virus","Un musgo","El tiempo"]
		];		
	}
}


function comprobar(){ 	
	var clickSound = new Audio("sound/burro.mp3");
	var respuesta = $("input[type=radio]:checked").val();
	if(respuesta==indice_respuesta_corecta){		
		var clickSound = new Audio("sound/respuestacorrecta.mp3");
		clickSound.play();
		cont = cont + 1;
		if(cont == 16){
			conta = 0;
			cont = 0;
		}
		graficar(cont);
		prueba();
	}else{
		conta = conta + 1;
		if(conta<=3){			
			clickSound.play();
			alertify.error("Respuesta Equivocada");
		}else{
			var clickSound = new Audio("sound/perdedor.mp3");
			clickSound.play();
			alertify.confirm("PERDISTE!!!",
  		function(){  		
    		alertify.success("A JUGAR!!!");
    		cont = 20;
    		graficar(cont);
    		cont = 0;
    		conta = 0;
  		},
  		function(){
    		alertify.error("CHAO!!!");
  		});
		}
	}
}