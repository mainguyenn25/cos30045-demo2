// Step 1: Use row conversion function, d3.csv(), to give D3 access to data
d3.csv("../data/tvBrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count //=> converts to number
  };

}).then(data => {
  // Step 2: Check browser console tab for java objects created from your data set
  console.log(data);

  // Step 3: Finding information about the data set
  console.log(data.length);
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count)); //=> array with min and max

  // Sort the data by count from highest to lowest.
  data.sort((a, b) => b.count - a.count);
  console.log(data);

  drawBarChart(data);
});
