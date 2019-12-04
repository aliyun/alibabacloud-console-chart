import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'Nat网关',
    data: [['规格', 3], ['动态数', 4], ['SDK支持语言', 4]],
  },
  {
    name: 'Slb负载均衡',
    data: [['规格', 12], ['动态数', 11], ['SDK支持语言', 0]],
  },
];

export default () => {
  const config = {
    dodgeStack: true,
  };
  return (
    <ConsoleBarChart data={data} config={config} height={300} />
  );
}
