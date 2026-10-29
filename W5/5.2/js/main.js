const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1000 500");

const drawLineChart = data => {
    const margin = { top: 40, right: 170, bottom: 25, left: 40 };
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Create scales.
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.year))
        .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.averagePrice)])
        .range([innerHeight, 0]);

    // Set up axes.
    const bottomAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format("d"));
    const leftAxis = d3.axisLeft(yScale);

    innerChart.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    innerChart.append("g")
        .call(leftAxis);

    innerChart.append("text")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + margin.bottom)
        .attr("dy", "1em")
        .attr("text-anchor", "middle")
        .text("Year");

    innerChart.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -margin.left + 12)
        .attr("text-anchor", "middle")
        .text("Average Price ($ per megawatt hour)");

    // Draw the data points.
    innerChart.selectAll(".point")
        .data(data)
        .join("circle")
        .attr("class", "point")
        .attr("r", 4)
        .attr("cx", d => xScale(d.year))
        .attr("cy", d => yScale(d.averagePrice))
        .attr("fill", "green");

    const lineGenerator = d3.line()
        .x(d => xScale(d.year))
        .y(d => yScale(d.averagePrice));

    innerChart.append("path")
        .datum(data)
        .attr("d", lineGenerator)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 2);
};

d3.csv("../data/ARE_Spot_Prices.csv", d => ({
    year: +d.Year,
    averagePrice: +d["Average Price (notTas-Snowy)"]
}))
    .then(data => {
        data.sort((a, b) => a.year - b.year);
        
        drawLineChart(data);
    })