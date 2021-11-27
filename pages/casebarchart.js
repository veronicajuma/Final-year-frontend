import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'sales and revenue',
    data: [10, 32, 25, 40, 68, 52],
    backgroundColor: [

      'rgba(54, 162, 235, 0.2)'
      
    ],
    borderColor: [
     
      'rgba(54, 162, 235, 1)'
     
    ],
    borderWidth: 1
  }]
}

export default function casebarchart(){
    return (
      <div>
          <p>Missing Children</p>
        <Bar
          data={data}
         
          height= {150}
        />
      </div>
    );
  }