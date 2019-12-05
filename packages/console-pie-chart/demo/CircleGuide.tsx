import React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '时长',
    data: [['1年', 45], ['2年', 26], ['3年', 12], ['4年', 8], ['5年', 10], ['6年以上', 27]],
  },
];

let config = {
  cycle: true,
  guide: {
    html: {
      position: ['50%', '50%'],
      htmlContent:
        '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">1年<br><span style="color:#8c8c8c;font-size:20px">45</span></div>',
      alignX: 'middle',
      alignY: 'middle',
    },
  },
};

export default () => (
  <ConsolePieChart data={data} config={config} height={300} />
);
