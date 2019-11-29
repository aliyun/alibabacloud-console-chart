import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '清华',
    data: [['Chinese', 20], ['English', 10], ['Math', 15]],
  },
];

const config = {};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
