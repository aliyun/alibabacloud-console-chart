import React from 'react';
import { ConsoleSankeyChart } from '@alicloud/console-chart';

const config = {
  nodeAlign: 'center',
}

export default () => (
  <ConsoleSankeyChart config={config} data={data} height={300} />
);

const data = [
  {
    name: '节点数据',
    type: 'node',
    data: [
      {
        "name": "Brazil"
      },
      {
        "name": "Portugal"
      },
      {
        "name": "France"
      },
      {
        "name": "Spain"
      },
      {
        "name": "England"
      },
      {
        "name": "Canada"
      },
      {
        "name": "Mexico"
      },
      {
        "name": "USA"
      },
      {
        "name": "Angola"
      },
      {
        "name": "Senegal"
      },
      {
        "name": "Morocco"
      },
      {
        "name": "South Africa"
      },
      {
        "name": "Mali"
      },
      {
        "name": "China"
      },
      {
        "name": "India"
      },
      {
        "name": "Japan"
      }
    ]
  },
  {
    name: '边数据',
    type: 'link',
    data: [
      {
        "source": 0,
        "target": 1,
        "value": 5
      },
      {
        "source": 0,
        "target": 2,
        "value": 1
      },
      {
        "source": 0,
        "target": 3,
        "value": 1
      },
      {
        "source": 0,
        "target": 4,
        "value": 1
      },
      {
        "source": 5,
        "target": 1,
        "value": 1
      },
      {
        "source": 5,
        "target": 2,
        "value": 5
      },
      {
        "source": 5,
        "target": 4,
        "value": 1
      },
      {
        "source": 6,
        "target": 1,
        "value": 1
      },
      {
        "source": 6,
        "target": 2,
        "value": 1
      },
      {
        "source": 6,
        "target": 3,
        "value": 5
      },
      {
        "source": 6,
        "target": 4,
        "value": 1
      },
      {
        "source": 7,
        "target": 1,
        "value": 1
      },
      {
        "source": 7,
        "target": 2,
        "value": 1
      },
      {
        "source": 7,
        "target": 3,
        "value": 1
      },
      {
        "source": 7,
        "target": 4,
        "value": 5
      },
      {
        "source": 1,
        "target": 8,
        "value": 2
      },
      {
        "source": 1,
        "target": 9,
        "value": 1
      },
      {
        "source": 1,
        "target": 10,
        "value": 1
      },
      {
        "source": 1,
        "target": 11,
        "value": 3
      },
      {
        "source": 2,
        "target": 8,
        "value": 1
      },
      {
        "source": 2,
        "target": 9,
        "value": 3
      },
      {
        "source": 2,
        "target": 12,
        "value": 3
      },
      {
        "source": 2,
        "target": 10,
        "value": 3
      },
      {
        "source": 2,
        "target": 11,
        "value": 1
      },
      {
        "source": 3,
        "target": 9,
        "value": 1
      },
      {
        "source": 3,
        "target": 10,
        "value": 3
      },
      {
        "source": 3,
        "target": 11,
        "value": 1
      },
      {
        "source": 4,
        "target": 8,
        "value": 1
      },
      {
        "source": 4,
        "target": 9,
        "value": 1
      },
      {
        "source": 4,
        "target": 10,
        "value": 2
      },
      {
        "source": 4,
        "target": 11,
        "value": 7
      },
      {
        "source": 11,
        "target": 13,
        "value": 5
      },
      {
        "source": 11,
        "target": 15,
        "value": 3
      },
      {
        "source": 8,
        "target": 13,
        "value": 5
      },
      {
        "source": 8,
        "target": 14,
        "value": 1
      },
    ]
  }
];

