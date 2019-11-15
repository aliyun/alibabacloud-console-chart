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
  dataAdapter,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleRoseChart';
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
    const adaptData = dataAdapter(data, config);
    chart.source(adaptData);
    chart.coord('polar');

    g2Legend(chart, config, config.legend);

    g2Tooltip(chart, config, config.tooltip, { showTitle: false });

    if (config.axis) {
      chart.axis('x', {
        grid: {
          align: 'center',
          hideFirstLine: false,
          hideLastLine: false,
        },
        label: {
          offset: 10,
          autoRotate: true,
          textStyle: {
            textAlign: 'center',
          },
        },
      });

      chart.axis('y', {
        tickLine: null,
        label: null,
        line: null,
      });
    } else {
      chart.axis(false);
    }

    const colors = config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;

    const geom = chart
      .interval()
      .position('x*y')
      .color('x', colors);

    g2Size(geom, config, config.size);
    g2Style(geom, config, config.style);
    g2Label(geom, config, config.label);
    chart.render();
  },
};

const ConsoleRoseChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRoseChart;
