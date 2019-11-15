import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: '北大',
    data: [['语文', 20], ['高数', 10], ['商务英语', 15]],
  },
  {
    name: '清华',
    data: [['语文', 18], ['高数', 20], ['商务英语', 16]],
  },
];

const config = {
  yAxis: {
    min: 0,
  },
};
storiesOf('ConsoleDotChart', module).add('基本用法', () => (
  <Chart data={data} config={config} height={300} />
));
