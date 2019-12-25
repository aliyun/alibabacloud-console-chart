import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '等级',
    data: [
      ['11', 55.0],
      ['12', 26.8],
      ['13', 112.8],
      ['14', 81.5],
      ['15', 61.2],
      ['16', 7],
      ['17', 12],
    ],
  },
];

const config = {
  tooltip: {
    itemTpl: '<li data-index={index}>' +
      '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' +
      'v{name}: {value}%' +
      '</li>',
  }
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
