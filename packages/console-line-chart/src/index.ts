import {
  g2Factory,
  propertyAssign,
  getDataIndexColor,
  propertyMap,
  axisX,
  axisY,
  rectAutoTickCount,
  g2Tooltip,
  drawLine,
  getFinalGeomColors,
  g2Guide,
  g2Legend,
  getConsoleConfig,
  Utils,
  dataAdapter,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleLineChart';

const cfg: any = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);

    return Object.assign({}, props, {
      padding: props.padding || newConfig.padding || 'auto',
      config: newConfig,
    });
  },

  drawChart(chart: any, config: any, data: any) {
    const defs: any = {
      x: propertyAssign(
        propertyMap.xAxis,
        {
          type: 'cat',
          // 折线图X轴的范围默认覆盖全部区域，保证没有空余
          range: [0, 1],
        },
        config.xAxis
      ),
      type: {
        type: 'cat',
      },
    };

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((axis: any, yIndex: number) => {
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

    rectAutoTickCount(chart, config, defs, false);

    const adaptData = dataAdapter(data, config);
    chart.source(adaptData, defs);

    // 设置X轴
    axisX(chart, config);

    const colors = getFinalGeomColors(data, this.consoleTheme);
    config.colors = colors;

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((axis: any, yIndex: number) => {
        const yAxisConfig: any = {
          line: {
            stroke: getDataIndexColor(colors, data, yIndex),
          },
        };
        if (yIndex !== 0) {
          yAxisConfig.grid = null;
        }

        axisY(
          chart,
          { ...config, yAxis: axis },
          `y${yIndex}`,
          config.yAxisColor ? yAxisConfig : null
        );
      });
    } else {
      // 设置单个Y轴
      axisY(chart, config);
    }

    g2Legend(chart, config, config.legend);
    g2Guide(chart, config, config.guide);
    g2Tooltip(chart, config, config.tooltip);

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((asix: any, yIndex: number) => {
        drawLine(chart, config, `y${yIndex}`);
      });
    } else {
      drawLine(chart, config);
    }

    chart.render();
  },
};

const ConsoleLineChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleLineChart;
