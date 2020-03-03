import React from 'react';
import ConsoleGagueChart from '@alicloud/console-gauge-chart';

const data = [
  {
    name: 'oss',
    data: [
      { value: 5.6 },
    ],
  }
];

const config = {};

export default () => (
  <ConsoleGagueChart data={data} config={config} height={300} />
);
