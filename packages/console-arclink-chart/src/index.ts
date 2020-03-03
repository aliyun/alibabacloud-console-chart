import {
  g2Tooltip,
  g2Factory,
  g2Legend,
  getFinalGeomColors,
  getConsoleConfig,
  Utils,
  g2Style,
  g2Size,
  g2Label,
} from '@alicloud/console-shared-utils';

import source from './source';
import transform from './transform';

const COMPONENT_NAME = 'ConsoleArclinkChart';

const cfg = {
  // 初始化前对props的预处理函数
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({
      legend: false,
      polar: false,
      tooltip: {
        showTitle: false
      }
    }, defaultConfig, config);
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

    const colors = getFinalGeomColors(data, this.consoleTheme);

    const dv = source(adaptData);
    transform(dv, {
      type: 'diagram.arc',
      marginRatio: 0.5
    });

    const { polar = false } = config;

    const edgeView = chart.view();
    if (polar) {
      edgeView.coord('polar').reflect('y');
    }
    edgeView.source(dv.edges);
    edgeView.axis(false);
    const edgeGeom = edgeView.edge()
      .position('x*y')
      .shape('arc')
      .color('source', colors)
      .tooltip('source*target');

    g2Style(edgeGeom, config, { opacity: 0.5 });

    const nodeView = chart.view();
    if (polar) {
      nodeView.coord('polar').reflect('y');
    }
    nodeView.source(dv.nodes);
    nodeView.axis(false);
    let nodeGeom = null;
    if (polar) {
      nodeGeom = nodeView.point()
      .position('x*y')
      .shape('circle')
      .color('id', colors);

      g2Label(nodeGeom, config, ['name', {
        labelEmit: true
      }]);
    } else {
      nodeGeom = nodeView.point()
      .position('x*y')
      .shape('circle')
      .color('id', colors);

      g2Label(nodeGeom, config, ['name', {
        offset: -60,
        style: {
          textAlign: 'left',
        },
        rotate: Math.PI / 2,
      }]);
    }
    g2Style(nodeGeom, config, { stroke: 'grey', opacity: 0.5 });
    g2Size(nodeGeom, config, 'value');

    g2Legend(chart, config, config.legend);
    g2Tooltip(chart, config, config.tooltip);

    chart.render();
  },
};

const ConsoleRadarChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRadarChart;
