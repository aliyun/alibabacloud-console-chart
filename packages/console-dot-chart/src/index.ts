import {
  propertyAssign,
  propertyMap,
  axisX,
  axisY,
  rectAutoTickCount,
  g2Tooltip,
  g2Factory,
  g2Guide,
  g2Label,
  g2Legend,
  g2Size,
  g2Style,
  getConsoleConfig,
  Utils,
  getFinalGeomColors,
  dataAdapter,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleDotChart';

const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);
    if (newConfig.jitter) {
      newConfig.xAxis = Object.assign({}, newConfig.xAxis, { type: 'cat' });
    }
    const unionProps = Object.assign({}, props, {
      config: newConfig,
      padding: props.padding || newConfig.padding || 'auto',
    });
    return unionProps;
  },

  drawChart(chart, userConfig, data) {
    const config = userConfig;
    const { jitter, geomStyle } = config;

    const colors = getFinalGeomColors(data, this.consoleTheme);

    const defs: any = {
      x: propertyAssign(
        propertyMap.xAxis,
        {
          type: 'cat',
        },
        config.xAxis
      ),
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

    rectAutoTickCount(chart, config, defs, false);

    const adaptData = dataAdapter(data, config);

    chart.source(adaptData, defs);

    // 设置X轴
    const xAxis: any = {};

    if (config.jitter) {
      xAxis.grid = {
        align: 'center', // 网格顶点从两个刻度中间开始
        lineStyle: {
          lineWidth: 1,
        },
      };
    }

    // 扰动点图不能打开垂直网格线
    if (config.grid && !config.jitter) {
      xAxis.grid = {
        lineStyle: {
          lineWidth: 1,
        },
      };
    }

    axisX(chart, config, xAxis);

    // 设置单个Y轴
    axisY(chart, config);

    g2Tooltip(chart, config, config.tooltip, { crosshair: false });

    g2Legend(chart, config, config.legend, 'type');
    g2Guide(chart, config, config.guide);

    const geom = chart
      .point()
      .color('type', colors)
      .position('x*y')
      .shape('circle')
      .style('x*y*type*extra', geomStyle || {})
      .active(false);

    if (jitter) {
      geom.adjust('jitter');
    }

    g2Label(geom, config, config.label);
    g2Size(geom, config, config.size, 'type', 'type');
    g2Style(geom, config, config.style);

    chart.render();
  },
};

const ConsolePointChart: any = g2Factory(COMPONENT_NAME, cfg);
export default ConsolePointChart;
