const w = 500;
const h = 500;
const sales = d3.json('https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json');
let totalPerPlatform = {};
let totalSales = 0;

const heading = d3.select('body');
	heading.append('h1')
		.attr('id', 'title')
		.html('Treemap');

	heading.append('p')
		.attr('id', 'description')
		.html('evolution of the sale of console over the years.');

const svg = d3.select('body')
		.append('svg')
		.attr('width', w)
		.attr('height', h);

Promise.all([sales]).then(function (results) {
	svg.selectAll('rect')
		.data(results[0].children)
		.enter()
		.append('rect')
		.attr('width', 5)
		.attr('height', 5)
		.attr('x', w / 2)
		.attr('y', h / 2)
		.style('fill', 'red');;
	
	// Calculate the number of sales of all games.	
	let i = 0;
	while(results[0].children[i])
	{
		totalPerPlatform[results[0].children[i].name] = 0; 	
		results[0].children[i].children.forEach(function(games) {
			/*totalPerPlatform[results[0].children[i].name] */
			totalPerPlatform[results[0].children[i].name] += parseInt(games.value);
			totalSales += parseInt(games.value);
		});
		i++;
	};
	console.log(totalPerPlatform);
	console.log(totalSales);

});
