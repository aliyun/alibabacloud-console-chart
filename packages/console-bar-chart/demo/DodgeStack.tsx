import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

let data = [
  {
    name: 'ECS',
    dodge: '分组1',
    data: [],
  },
  {
    name: 'OSS',
    dodge: 'OSS',
    data: [],
  },
  {
    name: 'ACS',
    dodge: 'OSS',
    data: [],
  },
  {
    name: 'RDS',
    dodge: 'OSS',
    data: [],
  },
];

for (let i = 1; i < 11; i++) {
  const name = i + '月';
  data[0].data.push([name, Math.random() * 100 + 300]);
  data[1].data.push([name, Math.random() * 100 + 100]);
  data[2].data.push([name, Math.random() * 100 + 100]);
  data[3].data.push([name, Math.random() * 100 + 100]);
}

export default () => {
  const config = {
    dodgeStack: true,
  };
  return (
    <ConsoleBarChart data={data} config={config} height={300} />
  );
}
