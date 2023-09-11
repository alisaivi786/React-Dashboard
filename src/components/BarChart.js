// src/components/BarChart.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Dummy data
    const data = [4, 8, 15, 16, 23, 42];

    const svg = d3.select(svgRef.current);

    // Create the bar chart here using D3.js

    // Example: Create a simple bar chart with dummy data
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 40)
      .attr("y", (d) => 100 - d * 3)
      .attr("width", 30)
      .attr("height", (d) => d * 3)
      .attr("fill", "blue");
  }, []);

  return <svg ref={svgRef} width={400} height={200}></svg>;
};

export default BarChart;
