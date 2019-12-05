import React from 'react';
import { ConsoleRadarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'oss',
    data: [['specification', 25], ['feature', 24], ['doc', 26]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      formatter: val => val + '~'
    }
  },
  guide: {
    line: [
      {
        start: ['specification', 25.5],
        end: ['feature', 25.5],
      },
      {
        start: ['specification', 25.5],
        end: ['doc', 25.5],
      },
      {
        start: ['feature', 25.5],
        end: ['doc', 25.5],
      }
    ],
  },
  area: true,
};

export default () => (
  <ConsoleRadarChart data={data} config={config} height={300} />
);
