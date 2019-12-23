import React from 'react';
import ConsoleTreeGraph from '@alicloud/console-tree-graph';
// import ConsoleTreeGraph from '../src';

export default () => {
  const config = {
    height: 800,
    width: 600,
    fitView: true,
  };
  return (
    <ConsoleTreeGraph data={data} config={config} />
  )
};

const data = {
  name: '根节点',
  id: '1',
  children: [
    {
      name: '一级节点-1',
      id: '11',
      children: [
        {
          name: '二级节点-1',
          id: '111',
          children: [
            {
              name: '三级节点-1',
              id: '111211',
            },
            {
              name: '三级节点-2',
              id: '111212',
            },
            {
              name: '三级节点-3',
              id: '11213',
            },
            {
              name: '三级节点-4',
              id: '112114',
            },
          ],
        },
        {
          name: '二级节点-2',
          id: '1112',
          children: [
            {
              name: '三级节点-41',
              id: '11121',
            },
            {
              name: '三级节点-42',
              id: '11122',
            },
            {
              name: '三级节点-43',
              id: '11123',
            },
            {
              name: '三级节点-44',
              id: '11124',
            },
          ],
        },
      ],
    },
    {
      name: '一级节点-2',
      id: '12',
      children: [
        {
          name: '二级节点-21',
          id: '121',
          children: [
            {
              name: '三级节点-11',
               id: '1211',
            },
            {
              name: '三级节点-12',
              id: '1212',
            },
            {
              name: '三级节点-13',
              id: '1213',
            },
            {
              name: '三级节点-14',
              id: '1214',
            },
          ],
        },
        {
          name: '二级节点-22',
          id: '122',
          children: [
            {
              name: '三级节点-21',
              id: '1221',
            },
            {
              name: '三级节点-22',
              id: '1222',
            },
            {
              name: '三级节点-23',
              id: '1223',
            },
            {
              name: '三级节点-24',
              id: '1224',
            },
          ],
        },
      ],
    },
  ],
};

