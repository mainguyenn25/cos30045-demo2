const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1000 500")

const drawBarChart = data => {
    const margin = { top: 40, right: 170, bottom: 25, left: 40 };
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`);

    const innerChart = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.screenTech))
        .range([0, innerWidth])
        .padding(0.2);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) {
            return d.energyConsumption;
        }) * 1.1])
        .range([innerHeight, 0]);

    const bottomAxis = d3.axisBottom(xScale);
    const leftAxis = d3.axisLeft(yScale);

    innerChart.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis);

    innerChart.append("g")
        .call(leftAxis);

    innerChart.append("text")
        .attr("x", -margin.left + 5)
        .attr("y", -25)
        .text("Energy Consumption (kWh)");

    innerChart.selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.screenTech))
        .attr("y", d => yScale(d.energyConsumption))
        .attr("width", xScale.bandwidth())
        .attr("height", d => innerHeight - yScale(d.energyConsumption))
        .attr("fill", "green");

    innerChart.selectAll(".bar-label")
        .data(data)
        .join("text")
        .attr("class", "bar-label")
        .attr("x", d => xScale(d.screenTech) + xScale.bandwidth() / 2)
        .attr("y", d => yScale(d.energyConsumption) - 8)
        .attr("text-anchor", "middle")
        .text(d => `${Math.round(d.energyConsumption)} kWh`);
};

d3.csv("data/55 inch TVs only.csv").then(function (data) {
    data.forEach(function (d) {
        d.screenTech = d.Screen_Tech;
        d.screenSize = +d.screensize_inch;
        d.energyConsumption = +d["Mean(Labelled energy consumption (kWh/year))"];

        if (d.screenTech === "LCD (LED)") {
            d.screenTech = "LED";
        }
    });

    console.table(data);
    data.sort((a, b) => b.energyConsumption - a.energyConsumption);

    drawBarChart(data);
});
