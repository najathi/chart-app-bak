'use client';

import React, {useRef, useState} from 'react';

import LineChart from './LineChart';
import BarChart from './BarChart';
import useAppStore from '@/store';

interface IndexProps {
	[key: string]: any;
}

const DATA_LENGTH = 8;

const Index: React.FC<IndexProps> = ({}) => {
	const initialData: any = {
		labels: [
			'03:30',
			'03:40',
			'03:50',
			'04:00',
			'04:10',
			'04:20',
			'04:30',
			'04:40',
			'04:50',
			'05:00',
			'05:10',
			'05:20',
			'05:30',
			'05:40',
			'05:50',
			'06:00',
			'06:10',
			'06:20',
			'06:30',
			'06:40',
			'06:50',
			'07:00',
			'07:10',
			'07:20',
			'07:30',
			'07:40',
			'07:50',
			'08:00',
			'08:10',
			'08:20',
			'08:30',
			'08:40',
			'08:50',
			'09:00',
			'09:10',
			'09:20',
			'09:30',
			'09:40',
			'09:50',
			'10:00',
			'10:10',
			'10:20',
			'10:30',
			'10:40',
			'10:50',
			'11:00',
			'11:10',
			'11:20',
			'11:30',
			'11:40',
			'11:50',
			'12:00',
			'12:10',
			'12:20',
			'12:30',
			'12:40',
			'12:50',
			'13:00',
			'13:10',
			'13:20',
			'13:30',
			'13:40',
			'13:50',
			'14:00',
			'14:10',
			'14:20',
			'14:30',
			'14:40',
			'14:50',
			'15:00',
			'15:10',
			'15:20',
			'15:30',
			'15:40',
			'15:50',
			'16:00',
			'16:10',
			'16:20',
			'16:30',
			'16:40',
			'16:50',
			'17:00',
			'17:10',
			'17:20',
			'17:30',
			'17:40',
			'17:50',
			'18:00',
			'18:10',
			'18:20',
			'18:30',
			'18:40',
			'18:50',
			'19:00',
			'19:10',
			'19:20',
			'19:30',
			'19:40',
			'19:50',
			'20:00',
			'20:10',
			'20:20',
			'20:30',
			'20:40',
			'20:50',
			'21:00',
			'21:10',
			'21:20',
			'21:30',
			'21:40',
			'21:50',
			'22:00',
			'22:10',
			'22:20',
			'22:30',
			'22:40',
			'22:50',
			'23:00',
			'23:10',
			'23:20',
			'23:30',
			'23:40',
			'23:50',
			'24:00',
		],
		datasets: [
			{
				label: 'This Period',
				data: [
					0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5,
				],
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
				barThickness: 164,
			},
		],
	};

	const lineChart = useRef<any>();
	const barChart = useRef<any>();
	const hoverMarkerRef = useRef(undefined);

	return (
		<>
			<LineChart
				chartRef={lineChart}
				initialData={initialData}
				hoverMarkerRef={hoverMarkerRef}
				barChartRef={barChart}
			/>
			<BarChart
				chartRef={barChart}
				initialData={initialData}
				dataLength={DATA_LENGTH}
				hoverMarkerRef={hoverMarkerRef}
				lineChartRef={lineChart}
			/>
		</>
	);
};

export default Index;
