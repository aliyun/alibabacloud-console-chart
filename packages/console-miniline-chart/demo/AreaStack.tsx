import React from 'react';
import { ConsoleMinilineChart } from '@alicloud/console-chart';

const data = [
  {
    name: '奇怪的数据量',
    data: [
      ['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40],
      ['2015', 12], ['2016', 15], ['2017', 35], ['2018', 20], ['2019', 40]
    ],
  },
];

const config = {
  area: true,
  stack: true,
};

export default () => (
  <ConsoleMinilineChart data={data} config={config} height={300} />
);
