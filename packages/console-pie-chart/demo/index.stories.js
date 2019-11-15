import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: '清华',
    data: [['Chinese', 20], ['English', 10], ['Math', 15]],
  },
];

const config = {};
storiesOf('ConsolePieChart', module).add('基本用法', () => (
  <Chart data={data} config={config} height={300} />
));
