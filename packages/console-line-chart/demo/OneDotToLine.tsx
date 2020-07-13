import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [
      ['2015', 20]
    ],
  },
];

const config: any = {};

export default () => {
  const dataLength = data[0].data.length;
  if (dataLength === 1) {
    config.guide = {
      line: {
        start: ['0%', '0'],
        end: ['100%', '0'],
        lineStyle: {
          stroke: '#2196F3',
          lineWidth: 2,
          lineDash: [ 0, 0 ]
        },
      }
    };
  }
  return (
    <ConsoleLineChart data={data} config={config} height={300} />
  );
};
