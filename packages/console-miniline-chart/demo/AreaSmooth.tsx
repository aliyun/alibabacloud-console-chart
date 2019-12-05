import React from 'react';
import { ConsoleMinilineChart } from '@alicloud/console-chart';

const data = [
  {
    name: '奇怪的数据量',
    data: [
      [1483372800000, 1892],
      [1483459200000, 7292],
      [1483545600000, 5714],
      [1483632000000, 5354],
      [1483718400000, 2014],
      [1483804800000, 22],
      [1483891200000, 11023],
      [1483977600000, 5218],
      [1484064000000, 8759],
      [1484150400000, 9981],
      [1484236800000, 4533],
      [1484323200000, 11398],
      [1484409600000, 1064],
      [1484496000000, 6494],
    ],
  },
];

const config = {
  area: true,
  smooth: true,
};

export default () => (
  <ConsoleMinilineChart data={data} config={config} height={300} />
);
