# VisualizeDataWithATreemapDiagram

## Version

- V1:
	- For each game, I display a square with a size related to the amount of sale.
	- For each game, I display the name of the game in the square with the amount of sales.
	- It should be organised per platform.
	- I don't take care of the color.
	- I don't show the tooltip.
	- The legend is not showed.

- V2:
	- Add the title headers. _(link 7)_
	- each platform has a specific color.
	- A tooltip is integrated.
## Log

- (18.07.2019): commit 'first commit'
	- Call the json file and show a square for each data.
- (24.07.2019): commit 'add the function that calculate the total amound of sales for each pl…'
	- Add a function that calculate the total of sales per platform and all platform together.
- (24.07.2019): commit 'V1 done'
	- Develop the V1 with the treemap of d3.

## Difficulties

- (24.07.2019): 
* How to do a carriage return?
	- I need to warp the text in tspan see _(link 4)_
* How to build a treemap in d5?
	- I need to use the promise.then method. And use the d3.treemap. see _(link 5)_

## Useful link

1. **Project page**: https://learn.freecodecamp.org/data-visualization/data-visualization-projects/visualize-data-with-a-treemap-diagram
2. **D3 API Reference**: https://github.com/d3/d3/blob/master/API.md#axes-d3-axis
3. **Data set used**: https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json
4. **How to get d3 treemap cell text to wrap and not overflow other cells**: https://stackoverflow.com/questions/56623476/how-to-get-d3-treemap-cell-text-to-wrap-and-not-overflow-other-cells
5. **D3.js v4/v5 treemap**: https://wizardace.com/d3-treemap/
6. **Treemap template**: https://www.d3-graph-gallery.com/treemap
7. **d3 Treemap with Title Headers**: http://billdwhite.com/wordpress/2012/12/16/d3-treemap-with-title-headers/
