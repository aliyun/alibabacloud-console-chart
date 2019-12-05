import React from 'react';
import { ConsoleRadarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ecs',
    data: [['specification', 20], ['feature', 10], ['doc', 15]],
    color: '#0093EE',
  },
  {
    name: 'oss',
    data: [['specification', 25], ['feature', 15], ['doc', 31]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      formatter: val => val + '~'
    }
  },
};

export default () => (
  <ConsoleRadarChart data={data} config={config} height={300} />
);
