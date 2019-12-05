import React from 'react';
import { ConsoleRoseChart } from '@alicloud/console-chart';

const data = [
  {
    name: '年份数据',
    data: [
      ['2013', 14],
      ['2014', 15],
      ['2015', 16],
      ['2016', 18],
      ['2017', 20],
      ['2018', 21],
      ['2019', 24.3],
      ['2020', 25],
    ],
  },
];

const config = {
  axis: true,
  label: false,
  padding: [50, 50, 50, 50],
  legend: false,
};

export default () => (
  <ConsoleRoseChart data={data} config={config} height={300} />
);
