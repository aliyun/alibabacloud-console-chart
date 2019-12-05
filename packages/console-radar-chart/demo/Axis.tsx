import React from 'react';
import { ConsoleRadarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'oss',
    data: [['specification', 29], ['feature', 28], ['doc', 31]],
    color: '#E288CE',
  }
];

const config = {
  xAxis: {
    label: {
      htmlTemplate: (val, item, index) => {
        return `
          <div>
            <div style="text-align: center;">${val}</div>
            <div style="text-align: center;">${index}</div>
          </div>
        `;
      }
    }
  },
};

export default () => (
  <ConsoleRadarChart data={data} config={config} height={300} />
);
