import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '时长',
    data: [['1年', 45], ['2年', 26], ['3年', 12], ['4年', 8], ['5年', 10], ['6年以上', 27]],
  },
];

let config = {
  cycle: true,
  legend: {
    position: 'bottom',
  },
  sliceGap: 0.01,
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
