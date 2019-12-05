import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

let data = [
  {
    name: 'RDS',
    facet: '2019',
    data: [],
  },
  {
    name: 'RDS',
    facet: '2018',
    data: [],
  },
  {
    name: 'OSS',
    facet: '2019',
    data: [],
  },
  {
    name: 'OSS',
    facet: '2018',
    data: [],
  },
  {
    name: 'ECS',
    facet: '2019',
    data: [],
  },
  {
    name: 'ECS',
    facet: '2018',
    data: [],
  },
];

for (let i = 0; i < 10; i++) {
  const name = i + '月';
  data[0].data.push([name, Math.random() * 100 + 500]);
  data[1].data.push([name, Math.random() * 100 + 100]);
  data[2].data.push([name, Math.random() * 100 + 500]);
  data[3].data.push([name, Math.random() * 100 + 100]);
  data[4].data.push([name, Math.random() * 100 + 500]);
  data[5].data.push([name, Math.random() * 100 + 100]);
}

export default () => {
  const config = {
    padding: [40, 24, 20, 44],
    colors: ['#001122', '#004455', '#008899', '#00eeff'],
    marginRatio: 0.05,
    facet: true,
  };
  return (
    <ConsoleBarChart data={data} config={config} height={300} />
  );
}
