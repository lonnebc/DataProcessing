d3.json("world_income.json", function(error, world_income) {
	if (error) return console.error(error);
	console.log(world_income)

var dictionary = {}

// transform values stored as strings to floats, value is 3 letter code country
for (i = 0; i < world_income.length; i++){
    id =  world_income[i][0]
    values = world_income[i][1]
    console.log(id,values)

    if (values[i] < 500){
        dictionary[id] = {fillKey : 'class1'};
    }
    else if (values >= 500 && values < 1000){
        dictionary[id] = {fillKey : 'class2'};
    }
    else if (values >= 1000 && values < 5000){
        dictionary[id] = {fillKey : 'class3'};
    }
    else if (values >= 5000 && values < 10000){
        dictionary[id] = {fillKey : 'class4'};
    }
    else if (values >= 10000 && values < 25000){
        dictionary[id] = {fillKey : 'class5'};
    }
    else if (values >= 25000 && values < 50000){
        dictionary[id] = {fillKey : 'class6'};
   	}
};

   	var map = new Datamap({element: document.getElementById('container'),

    fills: {
        'class1': '#fff5f0',
        'class2': '#fee0d2',
        'class3': '#fcbba1',
        'class4': '#fc9272',
        'class5': '#fb6a4a',
        'class6': '#ef3b2c',
      	defaultFill: 'white'
    },

    // add associative array a
    world_income : dictionary
});



// fill in color countries
// dictionary is an associative array  

    // colorscale countries










