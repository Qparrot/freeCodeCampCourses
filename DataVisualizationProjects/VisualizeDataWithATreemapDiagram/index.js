const w = 960;
const h = 550;
const sales = d3.json('https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json');
const padding = 1;
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
	
	root = d3.hierarchy(results[0]);
	root
		.sum((d) => d.value)
		.sort((a, b) => b.height - a.height || b.value - a.value);

	var treemap = d3.treemap()
		.size([w, h])
		.padding(padding)
		.round(true);

	treemap(root);

	var g = d3.select('svg')
		.selectAll('.node')
		.data(root.leaves())
		.enter()
		.append('g')
		.attr('class', 'node')
		.attr("transform",  (d) => "translate(" + d.x0 + "," + (d.y0) + ")");

	g.append('rect')
		.attr('width', (d) => d.x1 - d.x0)
		.attr('height', (d) => d.y1 - d.y0)
		.style('fill', (d) => 	{ 
			while(d.depth > 1) {
				d = d.parent;
					return d3.schemeCategory10[parseInt(d.value % 7)];
			}
		})
		.style('opacity', 0.6)

	g.append('text')
		.attr('x', 15)
		.attr('dy', 4)
		.style('text-decoration', 'underline')
		.attr('font-size', '0.3em')
		.text(d => 'On ' + d.data.category);

	g.append('text')
		.selectAll('tspan')
		.data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
		.enter()
		.append('tspan')
		.attr('font-size', '0.3em')
		.attr('x', 3)
		.attr('y', (d, i) => 10 + 8*i)
		.text(d => d);
});
