// Constant
const w = 1000;
const h = 500;

// Create the heading
const heading = d3.select('body');
		
		heading.append('h1')
		.attr('id', 'title')
		.html('United States Educational Attainment');
	
	heading.append('p')
		.attr('id', 'description')
		.html("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)");

// Create the svg canvas
var svg = d3.select("body")
		.append('svg')
  		.attr('width', w)
  		.attr('height', h);

// Create the Tooltip
var tooltip = d3.select('body')
	.append('div')
	.attr('id', 'tooltip')


// Create the projection
var projection = d3.geoMercator().translate([w/2, h/2]).scale(700).center([-100, 39]);
var path = d3.geoPath().projection(projection);

var worldmap = d3.json('counties.geojson');
var cities = d3.csv('cities.csv');
var education = d3.json('https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json');
Promise.all([worldmap, education]).then(function(values) {
	// map
	svg.selectAll('path')
		.data(values[0].features)
		.enter()
		.append('path')
		.attr('class', 'continent')
		.attr('d', path)
		// Add color scheme 
		.style('fill', (d) => {
			var j = 0;
			while (values[1][j])
			{
				var name = '';
				if(values[1][j].fips.toString().length === 5)
					name = values[1][j].fips.toString();
				else
					name = '0' + values[1][j].fips.toString();
				if(d.properties.STATE + d.properties.COUNTY === name)
				{
					if(values[1][j].bachelorsOrHigher >= 66)
						return('#061412');
					else if(values[1][j].bachelorsOrHigher >= 57)
						return('#0f322d');
					else if(values[1][j].bachelorsOrHigher >= 48)
						return('#185049');
					else if(values[1][j].bachelorsOrHigher >= 39)
						return('#216e64');
					else if(values[1][j].bachelorsOrHigher >= 30)
						return('#2a8d80');
					else if(values[1][j].bachelorsOrHigher >= 21)
						return('#33ab9d');
					else if(values[1][j].bachelorsOrHigher >= 12)
						return('#37baa9');
					else if(values[1][j].bachelorsOrHigher >= 3)
						return('#4ecbba');
					else
						return('6cd3c6');
				}
				j++;
			}
		})

		// On hover display the tooltip
		.on('mousemove', (d) => {
			tooltip.style('display', 'inline-block')
			.html(d.properties.NAME);
		})
		// out hover don't display the tooltip
		.on('mouseout', (d) => {
			tooltip.style('display', 'none')
		});
	// Points
	
	svg.selectAll('circle')
		.data(values[1])
		.enter()
		.append('circle')
		.attr('class', 'cities')
		.attr('cx', (d) => projection([d.Longitude, d.Lattitude])[0])
		.attr('cy', (d) => projection([d.Longitude, d.Lattitude])[1])
		.attr('r', '2px')
		.style('fill', '#f0f0f0');
			
	// labels
	svg.selectAll('text')
		.data(values[1])
		.enter()
		.append('text')
		.text( (d) => d.City)
		.attr('x', (d) => projection([d.Longitude, d.Lattitude])[0] + 5)
		.attr('y', (d) => projection([d.Longitude, d.Lattitude])[1] + 15)
		.attr('class', 'labels')
		.style('fill', '#fff');
});
