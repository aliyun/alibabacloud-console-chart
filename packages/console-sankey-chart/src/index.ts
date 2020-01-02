import {
  Utils,
  getConsoleConfig,
  g2Factory,
  g2Tooltip,
  g2Legend,
  g2Label,
  g2Size,
  g2Style,
  Constants,
} from '@alicloud/console-shared-utils';

import transform from './transform';
import ConfigTypes from './index.d';

const COMPONENT_NAME = 'ConsoleSankeyChart';

const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];

    const newConfig = Utils.merge({}, defaultConfig, config as ConfigTypes);

    const unionProps = Object.assign({}, props, {
      config: newConfig,
      padding: props.padding || newConfig.padding || 'auto',
    });

    return unionProps;
  },
  // 图表绘制主函数，必选
  drawChart(chart, config, data) {
    const nodesData = data.find(x => x.type === 'node') || {};
    const linksData = data.find(x => x.type === 'link') || {};
    const adaptData = {
      nodes: nodesData.data || [],
      edges: linksData.data || [],
    };

    transform(adaptData, {});

    g2Legend(chart, config, config.legend);

    g2Tooltip(chart, config, config.tooltip);

    chart.axis(false);
    chart.scale({
      x: { sync: true },
      y: { sync: true }
    });

    const edgeView = chart.view();
    edgeView.source(adaptData.edges);
    edgeView.edge()
      .position('x*y')
      .shape('arc')
      .color('#ECECEC')
      .opacity(0.6);

    g2Size(edgeView, config, config.size);
    g2Style(edgeView, config, config.style);
    g2Label(edgeView, config, config.label);

    // node view
    const nodeView = chart.view();

    const colors = config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;

    nodeView.source(adaptData.nodes);
    nodeView.polygon()
      .position('x*y') // nodes数据的x、y由layout方法计算得出
      .color('name', colors)
      .style({
        stroke: '#ccc'
      });

    g2Size(nodeView, config, config.size);
    g2Style(nodeView, config, config.style);
    g2Label(nodeView, config, config.label);

    chart.render();
  },
};

const ConsoleRoseChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRoseChart;
