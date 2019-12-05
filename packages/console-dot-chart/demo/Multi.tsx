import React from 'react';
import { ConsoleDotChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS数据',
    data: [
      ['2018-04-01', 1892],
      ['2018-04-02', 7292],
      ['2018-04-03', 5714],
      ['2018-04-04', 5354],
      ['2018-04-05', 2014],
      ['2018-04-06', 22],
      ['2018-04-07', 1023],
      ['2018-04-08', 5218],
      ['2018-04-09', 8759],
      ['2018-04-10', 5981],
      ['2018-04-11', 4533],
      ['2018-04-12', 1398],
    ],
  },
  {
    name: 'OSS数据',
    data: [
      ['2018-04-01', 2892],
      ['2018-04-02', 6292],
      ['2018-04-03', 3714],
      ['2018-04-04', 4354],
      ['2018-04-05', 8014],
      ['2018-04-06', 2200],
      ['2018-04-07', 1023],
      ['2018-04-08', 2218],
      ['2018-04-09', 6759],
      ['2018-04-10', 3981],
      ['2018-04-11', 2533],
      ['2018-04-12', 1398],
    ],
  },
];

const config = {
  padding: [40, 24, 24, 44],
  xAxis: {
    type: 'cat',
    tickCount: 10,
  },
};

export default () => (
  <ConsoleDotChart data={data} config={config} height={300} />
);