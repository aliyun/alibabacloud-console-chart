import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'A产品',
    data: [['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40]],
  },
];

const config = {
  area: true,
  symbol: true,
  symbolStyle: {
    fill: '#ffffff',
    stroke: '#fff',
  },
  tooltip: {
    crosshairs: {
      type: 'cross',
    },
  },
};
storiesOf('ConsoleLineChart', module).add('基本用法', () => (
  <Chart data={data} config={config} height={300} />
));
