// Create Constant values
const w = 900;
const h = 500;
const padding = 30;
const colorPalette = ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"];

// Create svg caneva 
const svg = d3.select('body')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

// Create the toolTip
const toolTip = d3.select('body')
	.append('div')
	.attr('class', 'tooltip');

// Build the renderer
const render = (data) => {

	// Declare Scales
	const xScale = d3.scaleLinear()
		.domain([d3.min(data.monthlyVariance, (d) => d.year), d3.max(data.monthlyVariance, (d) => d.year)])
		.range([padding, w - padding]);

	const yScale = d3.scaleLinear()
		.domain([0, d3.max(data.monthlyVariance, (d) => d.month)])
		.range([h - padding, padding]); 

	// Display data as rectangle
	svg.selectAll('rect')
		.data(data.monthlyVariance)
		.enter()
		.append('rect')
		.attr('height', (h - 2 * padding )/12)
		.attr('width', w / (d3.max(data.monthlyVariance, (d) => d.year) - (d3.min(data.monthlyVariance, (d) => d.year))))
		.attr('x', (d) => xScale(d.year))
		.attr('y', (d) => yScale(d.month))
		// Fill with color each rectangle of the heat map
		.attr('fill', (d) => {
			console.log(data.baseTemperature + d.variance);
			if(data.baseTemperature + d.variance >= 12)
				return(colorPalette[11]);
			else if(data.baseTemperature + d.variance >= 11)
				return(colorPalette[10]);
			else if(data.baseTemperature + d.variance >= 10)
				return(colorPalette[9]);
			else if(data.baseTemperature + d.variance >= 9)
				return(colorPalette[8]);
			else if(data.baseTemperature + d.variance >= 8)
				return(colorPalette[7]);
			else if(data.baseTemperature + d.variance >= 7)
				return(colorPalette[6]);
			else if(data.baseTemperature + d.variance >= 6)
				return(colorPalette[5]);
			else if(data.baseTemperature + d.variance >= 5)
				return(colorPalette[4]);
			else if(data.baseTemperature + d.variance >= 4)
				return(colorPalette[3]);
			else if(data.baseTemperature + d.variance >= 3)
				return(colorPalette[2]);
			else if(data.baseTemperature + d.variance >= 2)
				return(colorPalette[1]);
			else if(data.baseTemperature + d.variance >= 1)
				return(colorPalette[0]);
			else
				return('blue');
		})
		// Insert the tooltip when the mouse is over the rectangle
		.on('mousemove', function(d) {
			toolTip
				.style('display', 'inline-block')
				.style('top', yScale(d.month))
				.style('left', xScale(d.year))
				.html(d.variance);
		})
	// Declare the Axis
	var x_axis = d3.axisBottom()
		.scale(xScale);

	var y_axis = d3.axisLeft()
		.scale(yScale);

	// Position the axis
	svg.append('g')
		.attr('transform', 'translate(0,' + (h - padding) + ')')
		.attr('id', 'x-axis')
		.call(x_axis);

	svg.append('g')
		.attr('transform', 'translate(' + padding + ', 0)')
		.attr('id', 'y-axis')
		.call(y_axis);

	
}
	// Fetch the data and render
	d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json').then(render)
