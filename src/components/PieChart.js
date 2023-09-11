// src/components/PieChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Dummy data
    const data = [30, 40, 60, 20, 10];

    const svg = d3.select(svgRef.current);

    // Create the pie chart here using D3.js

    // Example: Create a simple pie chart with dummy data
    const pie = d3.pie()(data);

    const arc = d3.arc().innerRadius(0).outerRadius(100);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    svg
      .selectAll("path")
      .data(pie)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));
  }, []);

  return <svg ref={svgRef} width={200} height={200}></svg>;
};

export default PieChart;
