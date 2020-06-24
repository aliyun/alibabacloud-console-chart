import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'A产品',
    data: [['2015', 20], ['2016', 5], ['2017', 15], ['2018', 30], ['2019', 40]],
    color: ['#0072ff', 'l (90) 0:#0072ff 1:#E3F2FD']
  },
];

const config = {
  area: true,
  smooth: true,
};

const onTooltipChange = evt => {
  let items = evt.items; // tooltip显示的项，不处理的话会有2项
  // 在这里 去掉你想去掉的item，这里选择只要纯色的（线的颜色）
  const newItems = items.filter(x => x.color === '#0072ff');
  items.splice(0); // 将原来的Tooltip Items清空
  items.push(newItems[0]); // 只展示你筛选后的结果
}

export default () => (
  <ConsoleLineChart
    data={data}
    config={config}
    height={300}
    event={{
      'tooltip:change': onTooltipChange,
    }}
  />
);
