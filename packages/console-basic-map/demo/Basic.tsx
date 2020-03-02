import React from 'react';
// import ConsoleBoxChart from '@alicloud/console-box-chart';
import ConsoleBasicMap from '../src';

const config = {};

export default () => (
  <ConsoleBasicMap data={data} config={config} height={500} />
);

const userData = [
  { name: 'Russia', value: 86.8 },
  { name: 'China', value: 106.3 },
  { name: 'Japan', value: 94.7 },
  { name: 'Mongolia', value: 98 },
  { name: 'Canada', value: 98.4 },
  { name: 'United Kingdom', value: 97.2 },
  { name: 'United States of America', value: 98.3 },
  { name: 'Brazil', value: 96.7 },
  { name: 'Argentina', value: 95.8 },
  { name: 'Algeria', value: 101.3 },
  { name: 'France', value: 94.8 },
  { name: 'Germany', value: 96.6 },
  { name: 'Ukraine', value: 86.3 },
  { name: 'Egypt', value: 102.1 },
  { name: 'South Africa', value: 101.3 },
  { name: 'India', value: 107.6 },
  { name: 'Australia', value: 99.9 },
  { name: 'Saudi Arabia', value: 130.1 },
  { name: 'Afghanistan', value: 106.5 },
  { name: 'Kazakhstan', value: 93.4 },
  { name: 'Indonesia', value: 101.4 }
];

const data = [
  {
    name: 'oss',
    data: userData,
  }
];