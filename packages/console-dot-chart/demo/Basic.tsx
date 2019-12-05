import React from 'react';
import { ConsoleDotChart } from '@alicloud/console-chart';

const data = [
  {
    name: '云产品数据',
    data: [
      ['a', 1892],
      ['b', 7292],
      ['c', 5714],
      ['d', 5354],
      ['e', 2014],
      ['f', 22],
      ['g', 1123],
      ['h', 5218],
    ],
  },
];

const config = {};

export default () => (
  <ConsoleDotChart data={data} config={config} height={300} />
);
