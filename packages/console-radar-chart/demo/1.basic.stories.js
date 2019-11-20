import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'oss',
    data: [['specification', 29], ['feature', 28], ['docs', 31]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      formatter: val => val + '~'
    }
  },
};
storiesOf('ConsoleRadarChart', module).add('基本用法', () => (
  <Chart data={data} config={config} height={300} />
));
