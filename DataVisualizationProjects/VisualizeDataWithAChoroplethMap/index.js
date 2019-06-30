//Declare const
const w = 500;
const h = 500;


//Declare heading
const heading = d3.select('body');
heading.append('h1')
		.attr('id', 'title')
		.html('United States Educational Attainment');

heading.append('p')
		.attr('id', 'description')
	.html("Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014)");

//Declare svg
const svg = d3.select('body')
		.append('svg')
		.attr('width', w)
		.attr('height', h);

//Call with d3.queue to load the TopoJSON file
d3.queue()
	.defer(d3.json, "cro.json")
	.await(ready);

function ready(error, cro) {
	if(error) throw error;
	/*	svg.append('g')
		.attr('class', 'land')
		.selectAll('path')
		.data(topojson.feature(cro, cro.objects.cro_regions).features)
		.enter().append('path')
		.attr('d', path)
		.on('mouseover', function(d) {})
		.on('mouseout', function (d) {});
		*/
	console.log(cro);
}

var projection = d3.geoAlbers()
	.parallels([40, 50])
	.center([0, 45])
	.rotate([-16, 0])
	.scale(8000)
	.translate([w / 2, h / 2]);

var path = d3.geoPath().projection(projection);
