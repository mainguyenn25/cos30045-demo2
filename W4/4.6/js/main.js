const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 500 500")
      .style("border", "1px solid black");

// Preparation: Start this exercise with your code from Exercise 4.5.
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count //=> converts to number
  };

}).then(data => {
  data.sort((a, b) => b.count - a.count);

  drawBarChart(data);
});

const drawBarChart = data => {
  // Step 1: Add Linear scale for count data
  const xScale = d3.scaleLinear()
    .domain([0, 1100])
    .range([0, 500]);

  // Step 2: Use a band scale to calculate bar thickness based on number of categories
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 500])
    .padding(0.1);

  // Step 2: Use Linear scale to calculate bar widths
  svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
      console.log(d);
      return `bar bar-${d.count}`;
    })
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue")
    .attr("x", 0)
    .attr("y", d => yScale(d.brand));
};
