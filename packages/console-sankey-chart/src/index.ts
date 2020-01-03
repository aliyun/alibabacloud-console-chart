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
import ConfigTypes from './types';

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

    const {
      direction = 'horizontal',
      linkType = 'arc',
      linkColor = '#ECECEC',
      linkOpacity = 0.6,
      nodeAlign = 'justify',
      nodeWidth = 0.02,
      nodePadding = 0.02,
      topology = false,
    } = config;

    const d3SankeyConfig = {
      nodeAlign,
      nodeWidth,
      nodePadding,
    };

    const customOptions = {
      topology,
    };

    transform(adaptData, d3SankeyConfig, customOptions);

    g2Legend(chart, config, config.legend);

    let tooltip = {
      showTitle: false,
    };
    if (config.tooltip) {
      tooltip = config.tooltip;
    }

    g2Tooltip(chart, config, tooltip);

    chart.axis(false);
    chart.scale({
      x: { sync: true },
      y: { sync: true }
    });

    let position = 'x*y';
    if (direction === 'vertical') {
      position = 'y*x';
    }

    const edgeView = chart.view();
    edgeView.source(adaptData.edges);
    edgeView.edge()
      .position(position)
      .shape(linkType)
      .color(linkColor)
      .opacity(linkOpacity)
      .tooltip('source*target', (source, target) => {
        let name = source.index;
        let value = target.index;
        if (source.name !== undefined && target.name !== undefined) {
          name = source.name;
          value = target.name;
        }
        return {
          name,
          value,
        };
      })

    g2Size(edgeView, config, config.size);
    g2Style(edgeView, config, config.style);
    g2Label(edgeView, config, config.label);

    // node view
    const nodeView = chart.view();

    const colors = config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;

    nodeView.source(adaptData.nodes);
    nodeView.polygon()
      .position(position) // nodes数据的x、y由layout方法计算得出
      .color('name', colors)
      .style({
        stroke: '#ccc'
      })
      .tooltip('name', name => ({
        name,
      }))

    g2Size(nodeView, config, config.size);
    g2Style(nodeView, config, config.style);
    g2Label(nodeView, config, config.label);

    chart.render();
  },
};

const ConsoleRoseChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRoseChart;
