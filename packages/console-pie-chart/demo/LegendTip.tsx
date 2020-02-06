import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'Source',
    data: [
      ['A', 4590],
      ['B', 2628],
      ['C', 1228],
      ['D', 825],
      ['E', 622],
      ['F', 1207],
    ],
  },
];

const config = {
  padding: [0, 120 + 50, 0, 0],
  legend: {
    position: 'right-center',
    offsetY: 10,
    offsetX: 50,
    itemFormatter: function(value: string) {
      return `${value}   400   40%`;
    },
    tip: true,
    tipFormatter: (value: string) => value + 1,
  },
};

export default () => (
  <ConsolePieChart data={data} config={config} height={200} width={307} />
);
