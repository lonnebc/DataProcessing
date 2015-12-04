var data; // a global
console.log("blabla")
d3.json("knmi.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log("hi")
  visualizeit();
});

var vis = d3.select("#visualisation")
    WIDTH = 750,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    };

var xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0,120]);
var yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,400]);

xAxis = d3.svg.axis()
    .scale(xScale),
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  
yAxis = d3.svg.axis()
    .scale(yScale);
    .tickValues([5, 10, 15, 20, 25, 30, 35])

vis.append("svg:g")
    .call(xAxis);

    //.call(yAxis);

// vis.append("svg:g")
//     .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
//     .call(xAxis);

// vis.append("svg:g")
//     .call(yAxis);

// date = []
// temp = []
        
// var padding = 40
// var height = 450

// function createTransform(domain, range){
// // domain is a two-element array of the domain's bounds
// // range is a two-element array of the range's bounds    
//     var alpha = (range[1] - range[0]) / (domain[1] - domain[0]);
//     var beta = range[0] - (alpha * domain[0])

//     return function(x){
//         return alpha * x + beta;
//     };
// }
// // transformfunctions
// x_transform = createTransform([0, 365], [40, 650]);
// y_transform = createTransform([0, 350], [450, 100]);

// // draw first canvas
// function draw() {
//     var canvas = document.getElementById("canvas");
//     if (canvas.getContext) {
//         var ctx = canvas.getContext("2d");













