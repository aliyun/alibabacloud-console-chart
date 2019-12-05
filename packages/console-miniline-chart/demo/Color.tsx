import React from 'react';
import { ConsoleMinilineChart } from '@alicloud/console-chart';

const data = [
  {
    name: '奇怪的数据量',
    color: '#ff0000',
    data: [
      ['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40]
    ],
  },
];

const config = {};

export default () => (
  <ConsoleMinilineChart data={data} config={config} height={300} />
);
