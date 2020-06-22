import React, { useState, Fragment } from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'NAT',
    data: [
      [1522512000000, 302335],
      [1525104000000, 402335],
      [1527782400000, 202335],
      [1530374400000, 502335],
      [1533052800000, 102335],
      [1535731200000, 602335],
      [1538323200000, 202335],
      [1541001600000, 402335],
    ],
  },
];

const configDefault = {
  xAxis: {
    type: 'time',
    mask: 'YYYY-MM-DD'
  },
};

const configInnner = {
  xAxis: {
    type: 'time',
    mask: 'YYYY-MM-DD HH:mm:ss'
  },
}

export default () => {
  const [flag, setFlag] = useState(false);

  const onClick = () => {
    setFlag(!flag);
  }

  return (
    <Fragment>
      <button onClick={onClick}>点击事件</button>
      <ConsoleLineChart
        data={data}
        config={flag ? configDefault : configInnner}
        height={300}
      />
    </Fragment>
  );
}