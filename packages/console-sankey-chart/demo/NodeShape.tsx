import React from 'react';
// import { ConsoleSankeyChart } from '@alicloud/console-chart';
import ConsoleSankeyChart from '../src';

const config = {
  topology: true,
  direction: 'vertical',
}

export default () => (
  <ConsoleSankeyChart
    config={config}
    data={data}
    height={600}
    width={600}
    padding={[100, 0, 100, 0]}
  />
);

const data = [
  {
    name: '节点数据',
    type: 'node',
    data: [
      {
        "name": "ecs"
      },
      {
        "name": "oss"
      },
      {
        "name": "oos"
      },
      {
        "name": "cdn"
      },
    ]
  },
  {
    name: '边数据',
    type: 'link',
    data: [
      {
        "source": 3,
        "target": 0,
        "value": 5
      },
      {
        "source": 2,
        "target": 0,
        "value": 5
      },
      {
        "source": 1,
        "target": 0,
        "value": 5
      },
    ]
  }
];

