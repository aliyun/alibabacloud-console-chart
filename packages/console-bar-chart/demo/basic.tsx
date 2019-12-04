import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

const data = [
  {
    name: '阿里云Nat网关价格',
    data: [
      ['Small', 306], ['Middle', 586.5], ['Large', 1147.5], ['XLarge.1', 2040]
    ],
  },
];
const config = {
  padding: 20,
};

const Basic = () => (
  <ConsoleBarChart data={data} config={config} height={300} />
);

export default Basic;
