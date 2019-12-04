import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'Nat网关数据',
    data: [['规格', 3], ['动态数', 4], ['SDK支持语言', 4]],
  },
  {
    name: 'Slb负载均衡',
    data: [['规格', 12], ['动态数', 11], ['SDK支持语言', 0]],
  },
];

const Stack = () => {
  const config = {
    stack: true,
  };
  return (
    <ConsoleBarChart data={data} config={config} height={300} />
  );
}

export default Stack;
