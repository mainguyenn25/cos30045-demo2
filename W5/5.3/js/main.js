const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 1000 500");

const drawDonutChart = data => {
    const width = 1000;
    const height = 500;
    const radius = Math.min(width, height) / 2 - 20;

    const color = d3.scaleOrdinal()
        .domain(data.map(d => d.screensize_category))
        .range(d3.schemeSet2);

    const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

    const arcGenerator = d3.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 1);

    const innerChart = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    innerChart.selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => color(d.data.screensize_category))
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    innerChart.selectAll("text")
        .data(pie(data))
        .join("text")
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text(d => d.data.screensize_category);
};

d3.csv("../data/5.3.csv", d => ({
    screensize_category: d.screensize_category,
    count: +d["Count*(screensize)"]
}))
    .then(data => {
        drawDonutChart(data);
    });
