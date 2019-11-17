import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'A产品',
    data: [['毛利润', 20], ['净利润', 15], ['成本', 5]],
  },
];

const config = {};

storiesOf('ConsoleFunnelChart', module).add('基本用法', () => (
  <Chart data={data} config={config} height={300} />
));
