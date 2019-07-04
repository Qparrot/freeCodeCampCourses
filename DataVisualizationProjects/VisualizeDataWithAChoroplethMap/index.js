// Constant
const w = 1000;
const h = 500;

// heading
const heading = d3.select('body')
		.append('h1')
		.attr('id', 'title')
		.html('France and its neighborhood');
// The svg
var svg = d3.select("body")
		.append('svg')
  		.attr('width', w)
  		.attr('height', h);

var projection = d3.geoMercator().translate([w/2, h/2]).scale(700).center([-100, 39]);
var path = d3.geoPath().projection(projection);

var worldmap = d3.json('counties.geojson');
var cities = d3.csv('cities.csv');

Promise.all([worldmap, cities]).then(function(values) {
	// map
	svg.selectAll('path')
		.data(values[0].features)
		.enter()
		.append('path')
		.attr('class', 'continent')
		.attr('d', path);
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
