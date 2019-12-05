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
  padding: [60, 'auto', 0, 'auto'],
  legend: {
    position: 'top',
    offsetY: -10,
    itemFormatter: function(value) {
      return value + 'K';
    },
  },
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
