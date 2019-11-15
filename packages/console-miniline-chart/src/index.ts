import {
  propertyAssign,
  propertyMap,
  g2Tooltip,
  drawLine,
  g2Factory,
  getConsoleConfig,
  g2Guide,
  Utils,
  dataAdapter,
  getFinalGeomColors,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleMinilineChart';

const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);

    const unionConfig = Object.assign({}, props, {
      config: newConfig,
      padding: props.padding || newConfig.padding || 'auto',
    });
    return unionConfig;
  },

  drawChart(chart, userConfig, data) {
    const config = userConfig;

    const defs: any = {
      x: propertyAssign(
        propertyMap.xAxis,
        {
          type: 'cat',
          range: [0, 1],
        },
        config.xAxis
      ),
      type: {
        type: 'cat',
      },
    };

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((axis, yIndex) => {
        defs[`y${yIndex}`] = propertyAssign(
          propertyMap.yAxis,
          {
            type: 'linear',
            tickCount: 5,
          },
          axis
        );
      });
    } else {
      defs.y = propertyAssign(
        propertyMap.yAxis,
        {
          type: 'linear',
          tickCount: 5,
        },
        config.yAxis
      );
    }

    const colors = getFinalGeomColors(data, this.consoleTheme);
    config.colors = colors;

    const adaptData = dataAdapter(data, config);
    chart.source(adaptData, defs);

    chart.axis(false);

    chart.legend(false);

    // tooltip, 迷你图默认关闭tooltip
    if (!config.tooltip) {
      config.tooltip = false;
    }
    g2Tooltip(chart, config, config.tooltip);

    // 绘制辅助线，辅助背景区域
    g2Guide(chart, config, config.guide);

    drawLine(chart, config);

    chart.render();
  },
};

const ConsoleMinilineChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleMinilineChart;
