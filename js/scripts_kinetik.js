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

	// Líneas
	var miLinea = new Kinetic.Line({
	    points: [10, 10, 200, 10],
	    stroke: '#009',
	    strokeWidth: 5,
	    lineCap: 'round',
	    lineJoin: 'round'
	});

	var miOtraLinea = new Kinetic.Line({
	    points: [10, 400, 50, 300, 150, 500],
	    stroke: '#003',
	    strokeWidth: 5,
	    lineCap: 'round',
	    lineJoin: 'round'
	});

	// Rectángulos	
	var miRectangulo = new Kinetic.Rect({
	    x:10,
	    y:20,
	   	width: 100,
        height: 110,
        fill: '#0c0',
        stroke: '#090',
        strokeWidth: 2
	});

	// Círculos
    var miCirculo = new Kinetic.Circle({
        x: 200,
        y: 200,
        radius: 60,
        fill: '#fc0',
        stroke: 'f90',
        strokeWidth: 2
     });

    // Elipses
     var miElipse = new Kinetic.Ellipse({
        x: 600,
        y: 200,
        radius: {
          x: 100,
          y: 50
        },
        fill: '#c00',
        stroke: '#900',
        strokeWidth: 2
      });

    // Polígonos
    var miPoligonoRegular = new Kinetic.RegularPolygon({
        x: 500,
        y: 400,
        sides: 5,
        radius: 50,
        fill: '#fc0',
        stroke: '#f90',
        strokeWidth: 2
      });

    var miPoligonoIrregular = new Kinetic.Polygon({
        points: [300, 350, 400, 350, 310, 410, 270, 340],
        fill: '#00ddff',
        stroke: '#000',
        strokeWidth: 2
    });

    var miEstrella = new Kinetic.Star({
        x: 650,
        y: 450,
        numPoints: 8,
        innerRadius: 40,
        outerRadius: 70,
        fill: '#00ddff',
        stroke: '#000',
        strokeWidth: 4
      });

	figurasBasicas.add(miLinea);
	figurasBasicas.add(miOtraLinea);
	figurasBasicas.add(miRectangulo);	
	figurasBasicas.add(miCirculo);
	figurasBasicas.add(miElipse);
	figurasBasicas.add(miPoligonoRegular);
	figurasBasicas.add(miPoligonoIrregular);
	figurasBasicas.add(miEstrella);

	figurasBasicas.draw();

});