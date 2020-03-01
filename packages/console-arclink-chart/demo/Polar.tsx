import React from 'react';
import ConsoleArclinkChart from '@alicloud/console-arclink-chart';
import mock from './data';

const config = {
  padding: 120,
  polar: true,
};

export default () => (
  <ConsoleArclinkChart data={data} config={config} height={600} width={600} />
);


const data = [
  {
    name: '节点数据',
    type: 'node',
    data: mock.nodes,
  },
  {
    name: '边数据',
    type: 'link',
    data: mock.links,
  }
];
