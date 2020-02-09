import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

const data = [
  {
    name: '阿里云Nat网关价格/月',
    data: [
      ['Small', 306], ['Middle', 586.5], ['Large', 1147.5], ['XLarge.1', 2040]
    ],
  },
];

const config = {
  padding: [50, 50, 100, 100],
}

export default () => (
  <ConsoleBarChart data={data} height={300} config={config} />
);
