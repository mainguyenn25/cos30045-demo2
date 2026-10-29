// Step 1: Bind the data to DOM elements.
const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 500")
      .style("border", "1px solid black");

// Load the data and pass it to the function that draws the chart.
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count //=> converts to number
  };

}).then(data => {
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count)); //=> array with min and max

  // Sort the data before binding it to the rectangles.
  data.sort((a, b) => b.count - a.count);
  console.log(data);

  drawBarChart(data);
});

const drawBarChart = data => {
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
    console.log(d);
     return `bar bar-${d.count}`;
   })

  // Step 2: Make your data visible: Add attributes (.attr) to your bar chart for width, height and fill.
  const barHeight = 18;

  svg
    .selectAll("rect")
    .attr("width", d => d.count)
    .attr("height", barHeight)
    .attr("fill", "blue");

  // Step 3: Space out the bars.
  svg
    .selectAll("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * barHeight);
};

