// lons
var padding = 40
var h = 520
var w = 750

var data; // a global

d3.json("knmi.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;


var vis = d3.select("#visualisation")
    WIDTH = 750,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 40
    };

var max_x = d3.max(data, function(d) { 
   	newDate = new Date(d[0]).getTime()
    return newDate;  // references max date
});

var min_x = d3.min(data, function(d) { 
	newDate = new Date(d[0])
    return newDate;  // references min date 
});

// scale lines
yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 40])
xScale = d3.time.scale().range([MARGINS.left, WIDTH - MARGINS.right]).domain([min_x, max_x]);

// x axis
var xAxis = d3.svg.axis()
    .scale(xScale)
	//.ticks(12)
	//.tickValues(["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]);

// y axis
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left")
	.ticks(10);

// x line
vis.append("g")
	.attr("class", "axis")
	.attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis)

// y line
vis.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);

// line coordinates
var line = d3.svg.line()
	.x(function(d) {
		return xScale(new Date(d[0]));
	})
	.y(function(d) {
		return yScale(d[1] * 0.1);
	})
	.interpolate('linear');

// draw graph
vis.append("svg:path")
	.attr('d', line(data))
	.attr('stroke', '#FF6633')
	.attr('stroke-width', 1)
	.attr('fill', 'none');

// draw crosshair x
var crossX = vis.append("line")
	.style("stroke", "black")
	.attr("x1", 0)
	.attr("y1", 10)
	.attr("x2", WIDTH)
	.attr("y2", 10)
	.attr('opacity', 0);

// draw crosshair y
var crossY = vis.append("line")
	.style("stroke", "black")
	.attr("x1", 10)
	.attr("y1", 0)
	.attr("x2", 10)
	.attr("y2", HEIGHT)
	.attr('opacity', 0);

// mousemove
vis.on('mousemove', function(data){
	mouse = d3.mouse(this);
	console.log(mouse)

// move y-line to mouse position
crossY.style('opacity', 1)
	.attr('x1', mouse[0])
	.attr('x2', mouse[0])
//
crossX.style('opacity', 1)
	.attr('y1', mouse[1])
	.attr('y2', mouse[1])

});
});


