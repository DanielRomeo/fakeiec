'use client'
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface PieChartProps {
  data: { label: string; value: number }[];
}



const RegistrationAnalysisChart: React.FC<PieChartProps> = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

	let data = [
		{
		label: 'voted',
		value: 10  },
		{
		label: 'non-voted',
		value: 90
		}
	]

	// let data = []

  	useEffect(() => {
		if (data.length === 0) return;

		const width = 200;
		const height = 200;
		const radius = Math.min(width, height) / 2;

		const color = d3.scaleOrdinal(d3.schemeCategory10);

		const pie = d3.pie<{ label: string; value: number }>().value(d => d.value);
		const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
		.outerRadius(radius - 10)
		.innerRadius(0);

		const labelArc = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
		.outerRadius(radius - 40)
		.innerRadius(radius - 40);

		const svg = d3.select(svgRef.current)
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${width / 2},${height / 2})`);

		const g = svg.selectAll('.arc')
		.data(pie(data))
		.enter().append('g')
		.attr('class', 'arc');

		g.append('path')
		.attr('d', arc as any)
		.style('fill', d => color(d.data.label));

		g.append('text')
		.attr('transform', d => `translate(${labelArc.centroid(d)})`)
		.attr('dy', '.35em')
		.text(d => d.data.label);
  	}, [data]);

  	return <svg ref={svgRef}></svg>;
};

export default RegistrationAnalysisChart;
