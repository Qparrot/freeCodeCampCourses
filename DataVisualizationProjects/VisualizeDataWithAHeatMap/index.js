// Create Constant values
const w = 500;
const h = 500;
const padding = 15;

// Create svg caneva 
const svg = d3.select('body')
	.append('svg')
	.attr('width', w)
	.attr('height', h);
//	.style('background', 'red');

// Build the renderer
const render = (data) => {

	// Declare Scales
	const xScale = d3.scaleLinear()
		.domain([d3.min(data.monthlyVariance, (d) => d.year), d3.max(data.monthlyVariance, (d) => d.year)])
		.range([padding, w - padding]);

	const yScale = d3.scaleLinear()
		.domain([d3.min(data.monthlyVariance, (d) => d.month), d3.max(data.monthlyVariance, (d) => d.month)])
		.range([h - padding, padding]); 

	// Display data
	svg.selectAll('rect')
		.data(data.monthlyVariance)
		.enter()
		.append('rect')
		.attr('height', h/12)
		.attr('width', w /(d3.max(data.monthlyVariance, d => d.year) - d3.min(data.monthlyVariance, d => d.year)))
		.attr('x', (d) => xScale(d.year))
		.attr('y', (d) => yScale(d.month))
		.attr('fill', 'blue'); 
	//	(d) => {
	//		if(d.variance >= 2)
	//	return('red');
	//if(d.variance < 2 && d.variance > 0)
	//	return('green');
	//else
	//	return('blue');
	//	});
	// Fetch the data and render
	d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json').then(render)
