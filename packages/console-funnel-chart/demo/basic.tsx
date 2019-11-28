import React from 'react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'A产品',
    data: [['毛利润', 20], ['净利润', 15], ['成本', 5]],
  },
];

const config = {};

export default () => (
  <Chart data={data} config={config} height={300} />
);
