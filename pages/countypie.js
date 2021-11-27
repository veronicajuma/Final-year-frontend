import React from 'react'
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Nairobi',
		'Kiambu',
		'Machakos'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'rgba(255,0,0,0.5)',
		'rgba(36, 148, 36,0.5)',
		'#F9F9F9',
        'rgba(30, 153, 230, 0.5)'
		],
		hoverBackgroundColor: [
            '#rgba(255,0,0,0.5)',
            'rgba(36, 148, 36,0.5)',
            '#F9F9F9',
            'rgba(30, 153, 230, 0.5)'
		]
	}],
	circumference:'10'
};
export default function countypie() {
    return (
        <div>
            <p>Reports per county</p>
            <Pie
			data={data}
			width={500}
			height={700}
			
		/>
        </div>
    )
}
