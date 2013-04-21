$(document).ready(function() {

	// Declaramos el stage
	var lienzo = new Kinetic.Stage({
		container: 'lienzo',
		width: 800,
		height: 600
	});

	// Declaramos el layer y lo añadimos
	var figurasBasicas = new Kinetic.Layer();
	lienzo.add(figurasBasicas);

    var miSpline = new Kinetic.Spline({
        points: [{
          x: 100,
          y: 160
        }, {
          x: 300,
          y: 200
        }, {
          x: 400,
          y: 400
        }],
        stroke: '#900',
        strokeWidth: 10,
        lineCap: 'round',
        tension: 0.5
      });

    var miBlob = new Kinetic.Blob({
        points: [{
          x: 300,
          y: 100
        }, {
          x: 500,
          y: 100
        }, {
          x: 450,
          y: 220
        }],
        stroke: '#900',
        strokeWidth: 10,
        fill: '#000',
        tension: 1
      });

    var miTexto = new Kinetic.Text({
        x: 450,
        y: 450,
        text: 'Hola Mundo',
        fontSize: 30,
        fontFamily: 'Verdana',
        stroke: '#090',
        fill: '#0c0'
      });

    var miFigura = new Kinetic.Shape({
        drawFunc: function(canvas) {
          var context = canvas.getContext();
          context.beginPath();
          context.moveTo(100, 450);
          context.lineTo(320, 400);
          context.quadraticCurveTo(300, 350, 160, 370);
          context.closePath();
          canvas.fillStroke(this);
        },
        fill: '#ff0',
        stroke: '#000',
        strokeWidth: 2
      });

    figurasBasicas.add(miTexto);
    figurasBasicas.add(miBlob);
    figurasBasicas.add(miSpline);
    figurasBasicas.add(miFigura);

    figurasBasicas.draw();


});