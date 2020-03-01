import {
  g2Tooltip,
  g2Factory,
  g2Legend,
  // getFinalGeomColors,
  getConsoleConfig,
  Utils,
} from '@alicloud/console-shared-utils';

import DataSet from '@antv/data-set';

const COMPONENT_NAME = 'ConsoleArclinkChart';

const cfg = {
  // 初始化前对props的预处理函数
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({
      legend: false,
      polar: false,
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

    const ds = new DataSet();
    const dv = ds.createView().source(adaptData, {
      type: 'graph'
    });
    dv.transform({
      type: 'diagram.arc',
      marginRatio: 0.5
    });

    const { polar = false } = config;

    chart.tooltip({
      showTitle: false,
      showMarkers: false
    });
    chart.scale({
      x: {
        nice: true,
        sync: true,
      },
      y: {
        nice: true,
        sync: true,
      },
    });

    const edgeView = chart.view();
    if (polar) {
      edgeView.coord('polar').reflect('y');
    }
    edgeView.source(dv.edges);
    edgeView.axis(false);
    edgeView.edge()
      .position('x*y')
      .shape('arc')
      .color('source')
      .opacity(0.5)
      .tooltip('source*target');

    const nodeView = chart.view();
    if (polar) {
      nodeView.coord('polar').reflect('y');
    }
    nodeView.source(dv.nodes);
    nodeView.axis(false);
    if (polar) {
      nodeView.point()
      .position('x*y')
      .shape('circle')
      .size('value')
      .color('id')
      .opacity(0.5)
      .style({
        stroke: 'grey'
      })
      .label('name', {
        labelEmit: true
      });
    } else {
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
        offset: -60,
        style: {
          textAlign: 'left',
        },
        rotate: Math.PI / 2,
      });
    }

    g2Legend(chart, config, config.legend);
    g2Tooltip(chart, config, config.tooltip);

    chart.render();
  },
};

const ConsoleRadarChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRadarChart;
