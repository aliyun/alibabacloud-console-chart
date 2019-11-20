import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'ecs',
    data: [['specification', 20], ['feature', 10], ['docs', 15]],
    color: '#0093EE',
  },
  {
    name: 'oss',
    data: [['specification', 25], ['feature', 15], ['docs', 31]],
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
storiesOf('ConsoleRadarChart', module).add('多组数据', () => (
  <Chart data={data} config={config} height={300} />
));
