import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data = [
      { name: 'Party A', votes: 120 },
      { name: 'Party B', votes: 150 },
      { name: 'Party C', votes: 80 },
      { name: 'Party D', votes: 200 },
      { name: 'Party E', votes: 95 },
    ];

    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.votes)!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x) as any);

    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    svg
      .append('g')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.name)!)
      .attr('y', d => y(d.votes))
      .attr('height', d => y(0) - y(d.votes))
      .attr('width', x.bandwidth())
      .attr('fill', 'steelblue');
  }, []);

  return (
    <div>
        <svg ref={svgRef} width={500} height={300}></svg>
    </div>
  );
};

export default BarChart;
