import React from 'react';
import { ConsoleFunnelChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [['毛利润', 20], ['净利润', 15], ['成本', 5]],
  },
];

const config = {
  direction: 'vertical',
  align: 'left',
};

export default () => (
  <ConsoleFunnelChart data={data} config={config} height={300} />
);
