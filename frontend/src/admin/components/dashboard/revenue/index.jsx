import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

	datasets: [
		{
			label: 'status1',
			borderColor: '#1b5a90',
			borderWidth: 2,
			borderCapStyle: 'round',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			lineTension: false,
			pointBorderColor: '#1b5a90',
			pointBackgroundColor: '#1b5a90',
			pointBorderWidth: 5,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: '#1b5a90',
			pointHoverBorderColor: '#1b5a90',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			backgroundColor: '#99b6d0',
			pointHitRadius: 50,
			fill: true,
			gridLines: false,
			data: [65, 59, 80, 81, 56, 55, 40, 60],
		},
	],
};

const RevenueChart = () => {
	return (
		<div>
			<Line data={data} />
		</div>
	);
};

export default RevenueChart;
