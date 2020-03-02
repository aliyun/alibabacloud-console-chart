import React from 'react';
import ConsoleArclinkChart from '@alicloud/console-arclink-chart';

const config = {
  padding: 120,
  polar: true,
};

export default () => (
  <ConsoleArclinkChart data={data} config={config} height={600} width={600} />
);

const mock = {
  "nodes": [
    {
      "id": 0,
      "name": "analytics.cluster",
      "value": 21
    },
    {
      "id": 1,
      "name": "analytics.graph",
      "value": 34
    },
    {
      "id": 2,
      "name": "analytics.optimization",
      "value": 8
    },
    {
      "id": 3,
      "name": "animate",
      "value": 40
    },
    {
      "id": 4,
      "name": "animate.interpolate",
      "value": 18
    },
    {
      "id": 5,
      "name": "data.converters",
      "value": 25
    },
    {
      "id": 6,
      "name": "data",
      "value": 10
    },
    {
      "id": 7,
      "name": "display",
      "value": 4
    },
    {
      "id": 8,
      "name": "flex",
      "value": 6
    },
    {
      "id": 9,
      "name": "physics",
      "value": 22
    },
    {
      "id": 10,
      "name": "query",
      "value": 67
    },
    {
      "id": 11,
      "name": "query.methods",
      "value": 71
    },
    {
      "id": 12,
      "name": "scale",
      "value": 33
    },
    {
      "id": 13,
      "name": "util",
      "value": 23
    },
    {
      "id": 14,
      "name": "util.heap",
      "value": 2
    },
    {
      "id": 15,
      "name": "util.math",
      "value": 2
    },
    {
      "id": 16,
      "name": "util.palette",
      "value": 5
    },
    {
      "id": 17,
      "name": "vis.axis",
      "value": 24
    },
    {
      "id": 18,
      "name": "vis.controls",
      "value": 28
    },
    {
      "id": 19,
      "name": "vis.data",
      "value": 70
    },
    {
      "id": 20,
      "name": "vis.data.render",
      "value": 11
    },
    {
      "id": 21,
      "name": "vis.events",
      "value": 8
    },
    {
      "id": 22,
      "name": "vis.legend",
      "value": 27
    },
    {
      "id": 23,
      "name": "vis.operator.distortion",
      "value": 9
    },
    {
      "id": 24,
      "name": "vis.operator.encoder",
      "value": 30
    },
    {
      "id": 25,
      "name": "vis.operator.filter",
      "value": 17
    },
    {
      "id": 26,
      "name": "vis.operator",
      "value": 27
    },
    {
      "id": 27,
      "name": "vis.operator.label",
      "value": 18
    },
    {
      "id": 28,
      "name": "vis.operator.layout",
      "value": 91
    },
    {
      "id": 29,
      "name": "vis",
      "value": 13
    }
  ],
  "links": [
    {
      "source": 10,
      "target": 10,
      "sourceWeight": 61,
      "targetWeight": 61
    },
    {
      "source": 11,
      "target": 11,
      "sourceWeight": 39,
      "targetWeight": 39
    },
    {
      "source": 3,
      "target": 3,
      "sourceWeight": 30,
      "targetWeight": 30
    },
    {
      "source": 19,
      "target": 19,
      "sourceWeight": 26,
      "targetWeight": 26
    },
    {
      "source": 13,
      "target": 13,
      "sourceWeight": 23,
      "targetWeight": 23
    },
    {
      "source": 9,
      "target": 9,
      "sourceWeight": 22,
      "targetWeight": 22
    },
    {
      "source": 12,
      "target": 12,
      "sourceWeight": 19,
      "targetWeight": 19
    },
    {
      "source": 28,
      "target": 19,
      "sourceWeight": 34,
      "targetWeight": 0
    },
    {
      "source": 4,
      "target": 4,
      "sourceWeight": 16,
      "targetWeight": 16
    },
    {
      "source": 11,
      "target": 10,
      "sourceWeight": 32,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 28,
      "sourceWeight": 14,
      "targetWeight": 14
    },
    {
      "source": 18,
      "target": 18,
      "sourceWeight": 12,
      "targetWeight": 12
    },
    {
      "source": 26,
      "target": 26,
      "sourceWeight": 11,
      "targetWeight": 11
    },
    {
      "source": 28,
      "target": 13,
      "sourceWeight": 20,
      "targetWeight": 0
    },
    {
      "source": 5,
      "target": 6,
      "sourceWeight": 17,
      "targetWeight": 2
    },
    {
      "source": 19,
      "target": 13,
      "sourceWeight": 17,
      "targetWeight": 0
    },
    {
      "source": 17,
      "target": 17,
      "sourceWeight": 7,
      "targetWeight": 7
    },
    {
      "source": 6,
      "target": 6,
      "sourceWeight": 7,
      "targetWeight": 7
    },
    {
      "source": 12,
      "target": 13,
      "sourceWeight": 14,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 19,
      "sourceWeight": 14,
      "targetWeight": 0
    },
    {
      "source": 5,
      "target": 5,
      "sourceWeight": 7,
      "targetWeight": 7
    },
    {
      "source": 21,
      "target": 19,
      "sourceWeight": 6,
      "targetWeight": 4
    },
    {
      "source": 25,
      "target": 19,
      "sourceWeight": 10,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 0,
      "sourceWeight": 5,
      "targetWeight": 5
    },
    {
      "source": 3,
      "target": 13,
      "sourceWeight": 9,
      "targetWeight": 0
    },
    {
      "source": 20,
      "target": 19,
      "sourceWeight": 5,
      "targetWeight": 4
    },
    {
      "source": 19,
      "target": 12,
      "sourceWeight": 9,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 19,
      "sourceWeight": 8,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 19,
      "sourceWeight": 8,
      "targetWeight": 0
    },
    {
      "source": 22,
      "target": 22,
      "sourceWeight": 4,
      "targetWeight": 4
    },
    {
      "source": 24,
      "target": 24,
      "sourceWeight": 4,
      "targetWeight": 4
    },
    {
      "source": 26,
      "target": 3,
      "sourceWeight": 7,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 16,
      "sourceWeight": 7,
      "targetWeight": 0
    },
    {
      "source": 16,
      "target": 16,
      "sourceWeight": 3,
      "targetWeight": 3
    },
    {
      "source": 10,
      "target": 13,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 7,
      "target": 7,
      "sourceWeight": 3,
      "targetWeight": 3
    },
    {
      "source": 22,
      "target": 13,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 20,
      "target": 20,
      "sourceWeight": 3,
      "targetWeight": 3
    },
    {
      "source": 1,
      "target": 26,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 19,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 12,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 22,
      "target": 7,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 3,
      "sourceWeight": 6,
      "targetWeight": 0
    },
    {
      "source": 17,
      "target": 7,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 26,
      "target": 13,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 13,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 13,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 3,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 26,
      "target": 29,
      "sourceWeight": 3,
      "targetWeight": 2
    },
    {
      "source": 22,
      "target": 16,
      "sourceWeight": 5,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 21,
      "sourceWeight": 4,
      "targetWeight": 0
    },
    {
      "source": 22,
      "target": 12,
      "sourceWeight": 4,
      "targetWeight": 0
    },
    {
      "source": 23,
      "target": 23,
      "sourceWeight": 2,
      "targetWeight": 2
    },
    {
      "source": 17,
      "target": 29,
      "sourceWeight": 2,
      "targetWeight": 2
    },
    {
      "source": 28,
      "target": 17,
      "sourceWeight": 4,
      "targetWeight": 0
    },
    {
      "source": 15,
      "target": 15,
      "sourceWeight": 2,
      "targetWeight": 2
    },
    {
      "source": 17,
      "target": 12,
      "sourceWeight": 4,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 27,
      "sourceWeight": 2,
      "targetWeight": 2
    },
    {
      "source": 14,
      "target": 14,
      "sourceWeight": 2,
      "targetWeight": 2
    },
    {
      "source": 18,
      "target": 29,
      "sourceWeight": 3,
      "targetWeight": 1
    },
    {
      "source": 25,
      "target": 26,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 9,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 7,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 12,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 17,
      "target": 13,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 13,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 20,
      "target": 13,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 13,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 13,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 19,
      "target": 6,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 29,
      "target": 3,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 25,
      "target": 3,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 3,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 17,
      "target": 3,
      "sourceWeight": 3,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 15,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 26,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 24,
      "target": 26,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 16,
      "target": 13,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 14,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 29,
      "target": 21,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 21,
      "target": 21,
      "sourceWeight": 1,
      "targetWeight": 1
    },
    {
      "source": 29,
      "target": 19,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 19,
      "target": 14,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 4,
      "target": 13,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 19,
      "target": 15,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 8,
      "target": 17,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 13,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 19,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 1,
      "sourceWeight": 1,
      "targetWeight": 1
    },
    {
      "source": 23,
      "target": 17,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 23,
      "target": 19,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 3,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 3,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 19,
      "target": 3,
      "sourceWeight": 2,
      "targetWeight": 0
    },
    {
      "source": 29,
      "target": 13,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 8,
      "target": 29,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 21,
      "target": 3,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 22,
      "target": 3,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 3,
      "target": 4,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 29,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 22,
      "target": 19,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 23,
      "target": 3,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 26,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 19,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 26,
      "target": 19,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 17,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 3,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 5,
      "target": 13,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 12,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 20,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 28,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 23,
      "target": 21,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 8,
      "target": 6,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 2,
      "target": 3,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 1,
      "target": 29,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 23,
      "target": 28,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 6,
      "target": 13,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 25,
      "target": 13,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 8,
      "target": 7,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 7,
      "target": 13,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 27,
      "target": 26,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 18,
      "target": 7,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 0,
      "target": 26,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 19,
      "target": 7,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 8,
      "target": 19,
      "sourceWeight": 1,
      "targetWeight": 0
    },
    {
      "source": 28,
      "target": 29,
      "sourceWeight": 1,
      "targetWeight": 0
    }
  ]
}

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