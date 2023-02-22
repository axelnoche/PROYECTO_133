x = 0;
y = 0;
draw_circle  = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start() {
   document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";
 recognition.start(); }


recognition.onresult = function (event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconocio como : "+content;
      if(content == "Circle")
      {
        x = Math.floor(Math.ramdom() * 900);
        y = Math.floor(Math.ramdom() * 600);
        document.getElementById("status").innerHTML = "Se empezo a dibujar un círculo";
        draw_circle = "set";
      }
      if(content == "Rectangle")
      {
        x = Math.floor(Math.ramdom() * 900);
        y = Math.floor(Math.ramdom() * 600);
        document.getElementById("status").innerHTML = "Se empezo a dibujar un rectángulo";
        draw_rect = "set";
      }
      }

      function setup(){
         canvas = createCanvas(900,600);
      }

      function draw(){
         if(draw_circle == "set")
         {
           radius = Math.floor (Math.ramdom()*100);
           circle(x,y, radius);
           document.getElementById("status").innerHTML = "Se dibujo un circúlo.";
           draw_circle = ""
      }
      if(draw_rect == "set")
         {
           radio = Math.floor (Math.ramdom()*100);
           rect(x,y, 70,50);
           document.getElementById("status").innerHTML = "Se dibujo un rectángulo.";
           draw_rect = ""
      }
      }