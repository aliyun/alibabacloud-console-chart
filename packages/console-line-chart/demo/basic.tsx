import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40]],
  },
];

const config = {};

export default () => (
  <ConsoleLineChart data={data} config={config} height={300} />
);
