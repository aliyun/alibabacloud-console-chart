import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [['2015', 4.3], ['2016', 3], ['2017', 2], ['2018', 0], ['2019', 1]],
  },
];

const config = {
  yAxis: {
    min: 0,
    formatter: (num: number) => Math.round(num),
  }
};

export default () => (
  <ConsoleLineChart data={data} config={config} height={300} />
);
