import React from 'react';
import { ConsoleComboChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS使用量',
    type: 'bar',
    yAxis: 0,
    data: [['2015', 5], ['2016', 10], ['2017', 15], ['2018', 30], ['2019', 36]],
  },
  {
    name: 'ECS同比增长',
    type: 'line',
    yAxis: 1,
    data: [['2015', 0.3], ['2016', 0.1], ['2017', 0.5], ['2018', 1], ['2019', 0.2]],
  },
];

const config = {
  yAxis: [
    {
      formatter: val => val + '万',
    },
    {
      formatter: val => val * 100 + '%',
    },
  ],
};

export default () => (
  <ConsoleComboChart data={data} config={config} height={300} />
);
