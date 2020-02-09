import React from 'react';
import { ConsoleMinilineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40]],
  },
];

export default () => (
  <ConsoleMinilineChart data={data} height={300} width={200} />
);
