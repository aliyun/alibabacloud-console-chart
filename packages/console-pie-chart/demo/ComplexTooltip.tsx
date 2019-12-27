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

const config = {};

const onTooltipChange = evt => {
  console.log(evt);
  const items = evt.items; // tooltip显示的项
  const origin = items[0]; // 将一条数据改成多条数据
  const range = origin.point._origin;
  console.log(range);
  items.splice(0); // 清空
  items.push(
    Object.assign(
      {},
      origin,
      {
        name: 'key',
        marker: true,
        value: range.x,
      },
    ),
  );
  items.push(
    Object.assign(
      {},
      origin,
      {
        name: 'value',
        marker: true,
        value: range.y,
      },
    ),
  );
}

export default () => (
  <ConsolePieChart
    data={data}
    config={config}
    height={300}
    event={{
      'tooltip:change': onTooltipChange,
    }}
  />
);
