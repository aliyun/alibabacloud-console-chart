import React from 'react';
import { ConsoleComboChart } from '@alicloud/console-chart';

const data = [
  {
    name: '使用',
    type: 'bar',
    yAxis: 0,
    data: [
      ['ecs', 1892],
      ['disk', 7292],
      ['ess', 5714],
      ['acs', 5354],
      ['batchcompute', 2014],
      ['ros', 22],
      ['fc', 11023],
      ['swas', 5218],
      ['ehpc', 8759],
      ['ecsgpu', 9981],
      ['acr', 4533],
      ['xdragon', 11398],
      ['scc', 1064],
      ['ddh', 6494],
    ],
  },
  {
    name: '使用增长率',
    type: 'line',
    yAxis: 1,
    data: [
      ['ecs', 18.92],
      ['disk', 72.92],
      ['ess', 57.14],
      ['acs', 53.54],
      ['batchcompute', 20.14],
      ['ros', 22],
      ['fc', 110.23],
      ['swas', 52.18],
      ['ehpc', 87.59],
      ['ecsgpu', 99.81],
      ['acr', 45.33],
      ['xdragon', 113.98],
      ['scc', 10.64],
      ['ddh', 64.94],
    ],
  },
];

const config = {
  padding: [40, 52, 'auto', 60],
  xAxis: {
    type: 'cat',
    // mask: 'YYYY-MM-DD'
    tickCount: 5,
  },
  yAxis: [
    {},
    {
      labelFormatter: val => val + '%',
    },
  ],
  legend: {
    position: 'bottom',
  },
  stack: true,
};
export default () => (
  <ConsoleComboChart data={data} config={config} height={300} />
);
