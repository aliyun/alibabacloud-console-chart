import React from 'react';
import { ConsoleComboChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS',
    type: 'bar',
    yAxis: 0,
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
  {
    name: 'RDS',
    type: 'line',
    yAxis: 1,
    data: [
      [1483372800000, 11751],
      [1483459200000, 4078],
      [1483545600000, 2175],
      [1483632000000, 12048],
      [1483718400000, 1748],
      [1483804800000, 10494],
      [1483891200000, 9597],
      [1483977600000, 4788],
      [1484064000000, 2085],
      [1484150400000, 492],
      [1484236800000, 2965],
      [1484323200000, 4246],
      [1484409600000, 2160],
      [1484496000000, 11877],
    ],
  },
];

const config = {
  padding: [40, 60, 44, 28],
  smooth: true,
  xAxis: {
    type: 'timeCat',
    mask: 'YYYY-MM-DD',
  },
  yAxis: [
    {
      labelFormatter: function(value) {
        if (value >= 1000) return parseInt(String(value / 1000)) + 'K';
        else return value;
      },
    },
    {
      labelFormatter: function(value) {
        return value + 'W';
      },
    },
  ],
};

export default () => (
  <ConsoleComboChart data={data} config={config} height={300} />
);
