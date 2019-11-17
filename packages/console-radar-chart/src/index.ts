import {
  propertyAssign,
  propertyMap,
  g2Tooltip,
  drawLine,
  g2Factory,
  g2Legend,
  g2Guide,
  getFinalGeomColors,
  getConsoleConfig,
  Utils,
  dataAdapter,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleRadarChart';

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
    const defs: any = {
      x: propertyAssign(propertyMap.xAxis, {}, config.xAxis),
      type: {
        type: 'cat',
      },
    };

    defs.y = propertyAssign(
      propertyMap.yAxis,
      {
        type: 'linear',
        tickCount: 5,
      },
      config.yAxis
    );

    const adaptData = dataAdapter(data, config);
    chart.source(adaptData, defs);

    const radius = config.radius < 0 ? 1 : config.radius;
    chart.coord('polar', {
      radius: Math.min(radius, 1),
    });

    const xLabelFormatter = Utils.get(config, 'xAxis.label.formatter');

    chart.axis('x', {
      label: {
        formatter: xLabelFormatter,
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null,
        },
      },
    });
    const yLabelFormatter = Utils.get(config, 'yAxis.label.formatter');
    chart.axis('y', {
      label: {
        offset: 8,
        textStyle: {
          // fill: '#ff0000',
          textAlign: 'right', // 文本右对齐
        },
        formatter: yLabelFormatter,
      },
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null,
        },
      },
    });

    g2Tooltip(chart, config, config.tooltip, {
      crosshairs: null,
    });

    const colors = getFinalGeomColors(data, this.consoleTheme);
    config.colors = colors;

    drawLine(chart, config);

    g2Legend(chart, config, config.legend);
    g2Guide(chart, config, config.guide);

    chart.render();
  },
};

const ConsoleRadarChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleRadarChart;
