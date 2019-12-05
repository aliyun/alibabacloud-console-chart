import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '等级',
    data: [
      ['11', 55.0],
      ['12', 26.8],
      ['13', 112.8],
      ['14', 81.5],
      ['15', 61.2],
      ['16', 7],
      ['17', 12],
    ],
  },
];

const config = {
  tooltip: {
    nameFormatter: function(v) {
      return 'name: ' + v;
    },
    valueFormatter: function(v, data) {
      return 'value: ' + parseFloat(String(data.percent * 100)).toFixed(0) + '%';
    },
  },
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
