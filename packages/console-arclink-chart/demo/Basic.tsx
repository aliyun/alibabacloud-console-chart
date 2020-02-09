import React from 'react';
// import { ConsoleArclinkChart } from '@alicloud/console-chart';
import ConsoleArclinkChart from '../src';

const config = {
};

export default () => (
  <ConsoleArclinkChart data={data} config={config} height={300} />
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
      {
        "name": "composer"
      },
      {
        "name": "rds"
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
      {
        "source": 0,
        "target": 4,
        "value": 5
      },
      {
        "source": 0,
        "target": 5,
        "value": 10
      },
    ]
  }
];
