import React from 'react';
import { ConsoleBarChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'Students of course',
    data: [['Chinese', 20], ['English', 10], ['Math', 15]],
  },
];
const config = {
  padding: 20,
};

class Basic extends React.Component {
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
    return <ConsoleBarChart data={data} config={this.state.config} height={300} />;
  }
}

export default Basic;
