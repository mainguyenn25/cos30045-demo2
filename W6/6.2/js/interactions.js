const populateFilters = data => {
    d3.select("#filters_screen")
        .selectAll(".filter")
        .data(filters_screen)
        .join("button")
        .attr("class", d => `filter${d.isActive ? " active" : ""}`)
        .text(d => d.label)
        .on("click", (event, d) => {
            if (!d.isActive) {
                filters_screen.forEach(filter => {
                    filter.isActive = filter.id === d.id;
                });

                d3.select("#filters_screen")
                    .selectAll(".filter")
                    .classed("active", filter => filter.id === d.id);

                updateHistogram(d.id, data);
            }
        });
};

const updateHistogram = (filterId, data) => {
    const updatedData = filterId === "all"
        ? data
        : data.filter(tv => tv.screenTech === filterId);

    const updatedBins = binGenerator(updatedData);

    d3.selectAll("#histogram rect")
        .data(updatedBins)
        .transition()
        .duration(500)
        .ease(d3.easeCubicInOut)
        .attr("y", d => yScale(d.length))
        .attr("height", d => innerHeight - yScale(d.length));
};
