function plotPoint(x0, y0, x, y) {

    console.log(x0, y0, x, y) // checks the arguments passed to this function
    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;


    //determine if a point exceeds the bounds of coordinatePlane and then control where to place the div on the screen using left and bottom of position:absolute 
    const planeMaxDistance = 200 - (10/2); 
    if (Math.abs(x0-x) > planeMaxDistance || Math.abs(y0-y) > planeMaxDistance)

    {
      var point2 = document.createElement('div'); 
      point2.className = 'point2';

      let leftmostPoint = x - x0 + 200 - 5; //find point within coordinatePlane closest to far away point on the x and y axis
      let lowestPoint = y - y0 + 200 - 5;

      point2.style.left = Math.max(0, Math.min(390, leftmostPoint)) + 'px'; //place down point
      point2.style.bottom = Math.max(0, Math.min(390, lowestPoint)) + 'px';
      document.getElementById('coordinatePlane').appendChild(point2);
    }

    else

    {
    var point1 = document.createElement('div'); 
    point1.className = 'point1';

    point1.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point1.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point1);

    }

    if (x > x0 && y > y0){
      out1.innerHTML = "NE"
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
  }