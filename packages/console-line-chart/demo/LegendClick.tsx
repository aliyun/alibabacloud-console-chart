// @ts-nocheck
import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS',
    data: [
      ['201804', 31],
      ['201805', 39],
      ['201806', 32],
      ['201807', 35],
      ['201808', 31],
      ['201809', 36],
      ['201810', 32],
      ['201811', 34],
    ],
  },
  {
    name: 'OSS',
    data: [
      ['201804', 12],
      ['201805', 12],
      ['201806', 12],
      ['201807', 11],
      ['201808', 10],
      ['201809', 14],
      ['201810', 12],
      ['201811', 11],
    ],
  },
  {
    name: 'RDS',
    data: [
      ['201804', 48],
      ['201805', 45],
      ['201806', 43],
      ['201807', 44],
      ['201808', 41],
      ['201809', 45],
      ['201810', 42],
      ['201811', 45],
    ],
  },
];

const ossConfig = {
  yAxis: {
    min: 30
  }
};

const defaultConfig = {
  yAxis: {
    min: 0
  }
}

interface State {
  keys: string[];
}

interface Props {}

class Demo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const defaultKeys = data.map(x => x.name);
    this.state = {
      keys: defaultKeys,
    }
  }

  handleClick = (ev: any) => {
    const { keys } = this.state;
    const val = ev.data.value;
    let newKeys = [];
    if (keys.includes(val)) {
      newKeys = keys.filter(x => x !== val);
    } else {
      newKeys = [...keys, val];
    }
    this.setState({ keys: newKeys });
  };

  render() {
    const { keys } = this.state;
    console.log(keys);

    const config = !keys.includes('OSS') ? ossConfig : defaultConfig;

    return (
      <ConsoleLineChart
        data={data}
        config={config}
        height={300}
        event={{
          'legend-item:click': this.handleClick,
        }}
      />
    );
  }
}

export default () => <Demo />;
