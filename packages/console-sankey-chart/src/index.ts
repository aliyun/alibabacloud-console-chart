import {
  Utils,
  getConsoleConfig,
  g2Factory,
  // g2Tooltip,
  // g2Legend,
  // g2Label,
  // g2Size,
  // g2Style,
  // Constants,
  // dataAdapter,
} from '@alicloud/console-shared-utils';
import DataSet from '@antv/data-set';

const COMPONENT_NAME = 'ConsoleSankeyChart';
const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];

    const newConfig = Utils.merge({}, defaultConfig, config);

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
    const dataMap = {
      nodes: nodesData.data || [],
      edges: linksData.data || [],
    };
    const ds = new DataSet();
    const adaptData = ds.createView().source(dataMap, {
      type: 'graph',
    });
    adaptData.transform({
      type: 'diagram.sankey'
    });
    // const adaptData = dataAdapter(data, config);
    // chart.source(adaptData);

    // g2Legend(chart, config, config.legend);

    // g2Tooltip(chart, config, config.tooltip, { showTitle: false });

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
      .color('#bbb')
      .opacity(0.6)
      .tooltip('target*source*value', (target, source, value) => {
        return {
          name: source.name + ' to ' + target.name + '</span>',
          value
        };
      });

    // node view
    const nodeView = chart.view();
    nodeView.source(adaptData.nodes);
    nodeView.polygon()
      .position('x*y') // nodes数据的x、y由layout方法计算得出
      .color('name')
      .label('name', {
        textStyle: {
          fill: '#545454',
          textAlign: 'start'
        },
        offset: 0,
        formatter: val => {
          return '  ' + val;
        }
      })
      .tooltip(false)
      .style({
        stroke: '#ccc'
      });
    chart.render();

    // const colors = config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;

    // const geom = chart
    //   .interval()
    //   .position('x*y')
    //   .color('x', colors);

    // g2Size(geom, config, config.size);
    // g2Style(geom, config, config.style);
    // g2Label(geom, config, config.label);
    // chart.render();
  },
};

const ConsoleRoseChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRoseChart;
