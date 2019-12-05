import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'WAF使用',
    yAxis: 0,
    data: [
      ['2018-04', 200001],
      ['2018-05', 600001],
      ['2018-06', 100001],
      ['2018-07', 500001],
      ['2018-08', 100001],
      ['2018-09', 900001],
      ['2018-10', 300001],
      ['2018-11', 900001],
      ['2018-12', 1000000],
      ['2019-01', 1100000],
      ['2019-02', 1200000],
    ],
  },
  {
    name: '增长率',
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
      ['2019-01', 49.2],
      ['2019-02', 29.65],
    ],
  },
];

const config = {
  xAxis: {
    type: 'time',
    mask: 'YYYYMM',
  },
  yAxis: [
    {
      labelFormatter: val => (val > 10000 ? parseInt(String(val / 10000)) + 'W' : val),
    },
    {
      labelFormatter: val => val + '%',
    },
  ],
};

export default () => (
  <ConsoleLineChart data={data} config={config} height={300} />
);
