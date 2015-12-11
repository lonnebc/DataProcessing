var width = 420,
		    barWidth = 40;

		var x = d3.scale.linear()
		    .domain([0, d3.max(data)])
		    .range([0, width]);

		var chart = d3.select(".chart")
		    .attr("width", width)
		    .attr("height", barWidth * data.length);

		var bar = chart.selectAll("g")
	    	.data(data)
	  		.enter().append("g")
	    	.attr("transform", function(d, i) { return "translate("+ i * 80 +"," + 100 + ")";})
	    	.attr("class", "makechart");
	    	
		bar.append("rect")
			.attr("y", function(d) { return x(data); })
		    .attr("width", barWidth)
		    .attr("height", x);
		    
		    //.attr("class", "makechart");

		bar.append("text")
		    .attr("x", function(d) { return x(d) + 3; })
		    .attr("y", barWidth / 2)
		    .attr("dy", ".35em")
		    .text(function(d) { return d; });