var preguntasArray = ["En cuál de los siguientes países NO hay ningún desierto?", "Quién escribió El viejo y el mar?", "Cuál de las sisguientes enfermedades ataca al higado?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var respuestasArray = [["España", "Chile", "Mongolia", "Alemania"], ["Ernest Hemingway", "Norman Mailer", "Gabriel García Márquez","Truman Capote"], ["Hepatitis", "Diabetes", "Artrósis" ,"Cifoescoliosis"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var correctAnswers = ["D. Alemania", "A.Ernest Hemingway", "C. Hepatitis", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var clickSound = new Audio("sound/button-click.mp3");



function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(25,25,100,100);
  }


}

function main(){
	draw();
}
setInterval("main()");