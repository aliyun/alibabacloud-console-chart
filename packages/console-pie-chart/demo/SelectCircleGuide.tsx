import * as React from 'react';
import { ConsolePieChart } from '@alicloud/console-chart';

const data = [
  {
    name: '时长',
    data: [
      ['1年', 45], ['2年', 26], ['3年', 12], ['4年', 8], ['5年', 10], ['6年以上', 27]
    ],
  },
];

export default class extends React.Component {
  state = {
    selectKey: '',
  }

  onClick = evt => {
    const { selectKey } = this.state;
    console.log(evt.data._origin);
    console.log(selectKey);
    if (selectKey === evt.data._origin.x) {
      // 点击已被选择的，进行收起
      this.setState({ selectKey: '' });
    } else {
      this.setState({ selectKey: evt.data._origin.x });
    }
  }

  render() {
    const { selectKey } = this.state;

    const findItem = data[0].data.find(x => x[0] === selectKey) || [];
    const num = findItem && findItem.length ? findItem[1] : 0;

    const config = {
      cycle: true,
      guide: {
        html: {
          position: ['50%', '50%'],
          htmlContent:
            selectKey? `<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">
              ${selectKey}<br><span style="color:#8c8c8c;font-size:20px">${num}</span>
            </div>` : `<div></div>`,
          alignX: 'middle',
          alignY: 'middle',
        },
      },
      tooltip: {
        itemTpl: `<li data-index={index}>
          <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
          v{name}: {value}%
          </li>`,
      },
      select: true,
      selectData: selectKey || '',
    };
  
    return (
      <ConsolePieChart
        data={data}
        config={config}
        height={300}
        event={{
          'interval:click': this.onClick,
        }}
      />
    );
  }
}
