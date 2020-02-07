import React from 'react';
// import { ConsoleArclinkChart } from '@alicloud/console-chart';
import ConsoleArclinkChart from '../src';

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
      formatter: val => val + '~'
    }
  },
};

export default () => (
  <ConsoleArclinkChart data={data} config={config} height={300} />
);
