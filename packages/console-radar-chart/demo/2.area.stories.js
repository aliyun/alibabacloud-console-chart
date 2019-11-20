import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'oss',
    data: [['specification', 25], ['feature', 24], ['docs', 26]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      formatter: val => val + '~'
    }
  },
  guide: {
    line: [
      {
        start: ['specification', 25.5],
        end: ['feature', 25.5],
      },
      {
        start: ['specification', 25.5],
        end: ['docs', 25.5],
      },
      {
        start: ['feature', 25.5],
        end: ['docs', 25.5],
      }
    ],
  },
  area: true,
};
storiesOf('ConsoleRadarChart', module).add('面积图', () => (
  <Chart data={data} config={config} height={300} />
));
