import React from 'react';
import { storiesOf } from '@storybook/react';
import Chart from '../es/index.js';

const data = [
  {
    name: 'Students of course',
    data: [['Chinese', 20], ['English', 10], ['Math', 15]],
  },
];
const config = {
  padding: 20,
};

class A extends React.Component {
  state = {
    config,
  };

  componentDidMount() {
    setInterval(() => {
      const newConfig = { ...config, padding: Math.floor(Math.random() * 100) };
      this.setState({ config: newConfig });
    }, 2000);
  }
  render() {
    return <Chart data={data} config={this.state.config} height={300} />;
  }
}
storiesOf('ConsoleBarChart', module).add('基本用法', () => <A />);
