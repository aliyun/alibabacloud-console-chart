import {
  g2Tooltip,
  g2Factory,
  g2Legend,
  // getFinalGeomColors,
  getConsoleConfig,
  Utils,
} from '@alicloud/console-shared-utils';

import connector from './connector';
import transform from './transform';

const COMPONENT_NAME = 'ConsoleArclinkChart';

const cfg = {
  // 初始化前对props的预处理函数
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);
    // TODO 处理padding
    return Object.assign({}, props, {
      padding: props.padding || newConfig.padding || 'auto',
      config: newConfig,
    });
  },

  drawChart(chart, config, data) {
    const nodesData = data.find(x => x.type === 'node') || {};
    const linksData = data.find(x => x.type === 'link') || {};
    const adaptData = {
      nodes: nodesData.data || [],
      edges: linksData.data || [],
    };

    connector(adaptData);
    transform(adaptData, {
      marginRatio: 0.5
    });

    console.log(adaptData);

    const edgeView = chart.view();
    edgeView.source(adaptData.edges);
    edgeView.axis(false);
    edgeView.edge()
      .position('x*y')
      .shape('arc')
      .color('source')
      .opacity(0.5)
      .tooltip('source*target');

    const nodeView = chart.view();
    nodeView.source(adaptData.nodes);
    nodeView.axis(false);
    nodeView.point()
      .position('x*y')
      .shape('circle')
      .size('value')
      .color('id')
      .opacity(0.5)
      .style({
        stroke: 'grey'
      })
      .label('name', { // label configuration for non-polar coord
        offset: -10,
        textStyle: {
          textAlign: 'left',
          rotate: 90
        }
      });

    chart.render();

    g2Legend(chart, config, config.legend);
    g2Tooltip(chart, config, config.tooltip);

    chart.render();
  },
};

const ConsoleRadarChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRadarChart;
