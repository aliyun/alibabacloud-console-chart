import React from 'react';
import { ConsoleComboChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS',
    type: 'bar',
    yAxis: 0,
    data: [
      ['2018-04', 1892],
      ['2018-05', 7292],
      ['2018-06', 5714],
      ['2018-07', 5354],
      ['2018-08', 2014],
      ['2018-09', 22],
      ['2018-10', 11023],
      ['2018-11', 5218],
      ['2018-12', 8759],
    ],
  },
  {
    name: 'OSS',
    type: 'line',
    yAxis: 1,
    data: [
      ['2018-04', 11.751],
      ['2018-05', 40.78],
      ['2018-06', 21.75],
      ['2018-07', 12.048],
      ['2018-08', 17.48],
      ['2018-09', 10.494],
      ['2018-10', 95.97],
      ['2018-11', 47.88],
      ['2018-12', 20.85],
    ],
  },
];

const config = {
  padding: [40, 52, 44, 44],
  xAxis: {
    type: 'cat',
    tickCount: 5,
  },
  yAxis: [
    {},
    {
      labelFormatter: val => val + '%',
    },
  ],
  legend: {
    position: 'top',
  },
  tooltip: {},
  yAxisColor: true, // y轴是否使用标记颜色
};

export default () => (
  <ConsoleComboChart data={data} config={config} height={300} />
);
