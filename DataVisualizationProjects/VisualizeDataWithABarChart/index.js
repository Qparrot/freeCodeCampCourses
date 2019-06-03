// constant values
const w = 1000;
const h = 400;
const padding = 50;
const svg = d3.select('#container')
              .append('svg')
              .attr('width', w)
              .attr('height', h)
              .style('background-color', '#e8e8e8')

// Render 
const render = data => {
  
  // Build the yScale
  const yScale = d3.scaleLinear()
        .domain([0, d3.max(data.data, (d) => d[1])])
        .range([h - padding, padding]);
  
  // Build the function that will change the string values of the dataset to float values. This is used for the xScale
  function convert(d)
  {
    switch(d[6])
      {
        case '1':
          return (parseFloat(d[0] + d[1] + d[2] + d[3]));
           break;
          case '4':
          return (parseFloat(d[0] + d[1] + d[2] + d[3] + '.25'));
           break;
          case '7':
          return (parseFloat(d[0] + d[1] + d[2] + d[3] + '.5'));
           break;
          case '0':
          return (parseFloat(d[0] + d[1] + d[2] + d[3] + '.75'));
           break;
          
      }
  }
// Build the xScale
const xScale = d3.scaleLinear()
        .domain([d3.min(data.data, (d) => convert(d[0])), d3.max(data.data, (d) => convert(d[0]))])
        .range([padding, w - padding]);
  
  // Add bar for each batch of data
  svg.selectAll('rect')
      .data(data.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(convert(d[0])))
      .attr('y', (d) => yScale(d[1]))
      .attr('width', 1)
      .attr('height', (d) => h - padding - yScale(d[1]))
      .attr('fill', 'blue')
      .attr('class', 'bar')
      .attr('data-date', (d) => d[0])
      .attr('data-gdp', (d) => d[1])
  
  // Add scales to the xAxis
    var x_axis = d3.axisBottom()
                   .scale(xScale);

    //Append group and insert xAxis
    svg.append("g")
.attr("transform", "translate(0, " + (h - padding)  +")")     
           .attr('id', 'x-axis')

      .call(x_axis);
  
  // Add scales to yAxis
    var y_axis = d3.axisLeft()
                   .scale(yScale);

    //Append group and insert yAxis
    svg.append("g")
  .attr("transform", "translate(" + padding + ",0)")      
      .attr('id', 'y-axis')
      .call(y_axis);
  }

// Call the JSON file and render
d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json').then(render) 


