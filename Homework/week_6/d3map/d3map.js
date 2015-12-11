// get data from json-file 
d3.json("world_income.json", function(error, world_income) {
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

	var map = new Datamap({
		element: document.getElementById("container"),

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

		map.legend() 

});








