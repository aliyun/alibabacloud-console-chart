import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'oss',
    data: [['specification', 29], ['feature', 28], ['doc', 31]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      htmlTemplate: (val, item, index) => {
        console.log(val, item, index);
        return `
          <div>
            <div style="text-align: center;">${val}</div>
            <div style="text-align: center;">${index}</div>
          </div>
        `;
      }
    }
  },
};
storiesOf('ConsoleRadarChart', module).add('自定义坐标轴', () => (
  <Chart data={data} config={config} height={300} />
));
