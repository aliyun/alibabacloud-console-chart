import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '各类云产品占比',
    data: [['计算类', 45], ['资源类', 26], ['服务类', 12], ['工具类', 8]],
  },
];

const config = {
  select: true,
  selectData: '计算类',
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
