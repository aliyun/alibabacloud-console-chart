import * as React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'NAT',
    data: [
      [1522512000000, 302335],
      [1525104000000, 402335],
      [1527782400000, 202335],
      [1530374400000, 502335],
      [1533052800000, 102335],
      [1535731200000, 602335],
      [1538323200000, 202335],
      [1541001600000, 402335],
    ],
  },
  {
    name: 'SLB',
    data: [
      [1522512000000, 33412],
      [1525104000000, 43412],
      [1527782400000, 23412],
      [1530374400000, 53412],
      [1533052800000, 13412],
      [1535731200000, 63412],
      [1538323200000, 23412],
      [1541001600000, 43412],
    ],
  },
  {
    name: 'VPN',
    data: [
      [1522512000000, 200001],
      [1525104000000, 600001],
      [1527782400000, 100001],
      [1530374400000, 500001],
      [1533052800000, 100001],
      [1535731200000, 900001],
      [1538323200000, 300001],
      [1541001600000, 900001],
    ],
  },
];

const config = {
  legend: {
    position: 'bottom',
  },
  xAxis: {
    type: 'time',
    mask: 'YYYY-MM-DD',
    tickInterval: 1525104000000 - 1522512000000, // 1个月的时间戳差值，这里只能传入时间戳
  },
  yAxis: {
    labelFormatter: val => (val > 10000 ? parseInt(String(val / 10000)) + 'W' : val),
  },
  tooltip: {
    valueFormatter: (val, rawData) => {
      return val > 10000 ? parseInt(String(val / 10000)) + 'W' : val;
    },
  },
};

export default () => (
  <ConsoleLineChart data={data} config={config} height={300} />
);
