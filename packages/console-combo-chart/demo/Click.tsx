import * as React from 'react';
import { ConsoleComboChart } from '@alicloud/console-chart';

const { useState } = React;

const data = [
  {
    name: 'ECS使用量',
    type: 'bar',
    yAxis: 0,
    color: '#0093EE',
    data: [['2015', 5], ['2016', 10], ['2017', 15], ['2018', 30], ['2019', 36]],
  },
  {
    name: 'ECS同比增长',
    type: 'line',
    yAxis: 1,
    color: '#EE6DD2',
    data: [['2015', 0.3], ['2016', 0.1], ['2017', 0.5], ['2018', 1], ['2019', 0.2]],
  },
];

const config = {
  yAxis: [
    {
      formatter: val => val + '万',
    },
    {
      formatter: val => val * 100 + '%',
    },
  ],
};

export default () => {

  const [hasClick, setClick] = useState(false);

  // 不要像下面这样修改属性，否则不会触发更新，需要生成一个新的对象引用
  // data[0].color = hasClick ? '#EE6DD2' : '#0093EE';
  const list = data.map(x => Object.assign({}, x, {
    color: hasClick ? '#EE6DD2' : '#0093EE',
  }))

  const onClick = evt => {
    console.log(evt);
    setClick(preState => !preState);
  }

  return (
    <ConsoleComboChart
      data={list}
      config={config}
      height={300}
      event={{
        'interval:click': onClick,
      }}
    />
  );
}
