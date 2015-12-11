// data visualisation D3
// by Lonneke Lammers

// get data from json-file 
d3.json("world_income+.json", function(error, world_income) {
	if (error) return console.error(error);
	
	// make dictionary to add colors 
	var dictionary = {}

	// make lists of id's countrycodes and income, calles values
	ids = []
	values = []
	for (i = 0; i < world_income.length; i++){
		id =  world_income[i][0]
		value = Math.round(world_income[i][1])
		ids.push(id)
		values.push(value)
	}

	for (i = 0; i < world_income.length; i++){
		if (values[i] < 500){
			//console.log(ids[i])
			dictionary[ids[i]] = {fillKey : '< 500 $'};
		}
		else if (values[i] >= 500 && values[i] < 1000){
			dictionary[ids[i]] = {fillKey : '500 - 1.000 $'};
		}
		else if (values[i] >= 1000 && values[i] < 5000){
			dictionary[ids[i]] = {fillKey : '1.000 - 5.000 $'};
		}
		else if (values[i] >= 5000 && values[i] < 10000){
			dictionary[ids[i]] = {fillKey : '5.000 - 10.000 $'};
		}
		else if (values[i] >= 10000 && values[i] < 25000){
			dictionary[ids[i]] = {fillKey : '10.000 - 25.000 $'};
		}
		else if (values[i] >= 25000 && values[i] < 50000){
			dictionary[ids[i]] = {fillKey : '25.000 - 50.000 $'};
		}
		else if (values[i] > 50000){
			dictionary[ids[i]] = {fillKey : '> 50.000 $'};
		}		
	}

	refresh_bars = function(){
		d3.selectAll(".makechart")
			.remove();
	}

	var map = new Datamap({
		element: document.getElementById("container"),
	
	done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
        	refresh_bars() 
            chart(geography.id);       
        })
	},

	// colors by colorbrewer2.org in nice hue's
	fills: {
		'< 500 $': '#efedf5',
		'500 - 1.000 $': '#dadaeb',
		'1.000 - 5.000 $': '#bcbddc',
		'5.000 - 10.000 $': '#9e9ac8',
		'10.000 - 25.000 $': '#807dba',
		'25.000 - 50.000 $': '#6a51a3',
		'> 50.000 $': '#4a1486',
		defaultFill: 'grey'
	},

	// add associative array 
	data : dictionary
	});
	
	// add legenda 
	map.legend()

	// get data from json-file 
	d3.json("bar_chart.json", function(error, bar_chart) {
		if (error) return console.error(error);

	// function to get values for barchart
	chart = function(geo_id){
		
		// loop over dataset
		// if key(id2) is equal to geo_id
		// get value
		for (var i = 0; i < bar_chart.length; i++){	
			id2 = bar_chart[i][0]
			year13 = Math.round(bar_chart[i][1][6])
			year12 = Math.round(bar_chart[i][1][5])
			year11 = Math.round(bar_chart[i][1][4])
			year10 = Math.round(bar_chart[i][1][3])
			year09 = Math.round(bar_chart[i][1][2])
			year08 = Math.round(bar_chart[i][1][1])
			year07 = Math.round(bar_chart[i][1][0])

			if (geo_id == id2){
			 	console.log(year13, year10, year07)
			 	console.log(geo_id)
	 			draw_chart(year07, year08, year09,year10,year11, year12, year13)
			}	
		}
	}

	// barchart visualisation function
	draw_chart = function(year07, year08, year09, year10, year11, year12, year13){
		
		var data = [year07, year08, year09, year10, year11, year12, year13]

		// barcharts
		var width = 420,
		    barHeight = 30;

		var x = d3.scale.linear()
		    .domain([0, d3.max(data)])
		    .range([0, width]);

		var chart = d3.select(".chart")
		    .attr("width", width)
		    .attr("height", barHeight * data.length);

		var bar = chart.selectAll("g")
	    	.data(data)
	  		.enter().append("g")
	    	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")";})
	    	.attr("class", "makechart");
	    	
	    // append bars
		bar.append("rect")
		    .attr("width", x)
		    .attr("height", barHeight - 1);
		    
		// append text in bars
		bar.append("text")
		    .attr("x", function(d) { return x(d) - 3; })
		    .attr("y", barHeight / 2)
		    .attr("dy", ".35em")
		    .text(function(d) { return d; });
		}
	});
});


















