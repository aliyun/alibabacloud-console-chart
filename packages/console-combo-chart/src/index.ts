import {
  propertyAssign,
  getDataIndexColor,
  propertyMap,
  dataAdapter,
  axisX,
  axisY,
  rectAutoTickCount,
  g2Tooltip,
  g2Guide,
  g2Label,
  g2Legend,
  g2Style,
  g2Factory,
  getConsoleConfig,
  Utils,
  Constants,
  g2Size,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleComboChart';

const cfg = {
  // 获取统一的props
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];

    const newConfig = Utils.merge({}, defaultConfig, config);

    return Object.assign({}, props, {
      padding: props.padding || config.padding || 'auto',
      config: newConfig,
    });
  },

  drawChart(chart, userConfig, data) {
    const config: any = userConfig;

    const rawLineData: any = [];
    this.rawLineData = rawLineData;
    const rawBarData: any = [];
    this.rawBarData = rawBarData;

    let maxDataLength = 0;
    if (config.autoSmoothNumber) {
      data.forEach(d => {
        const length = Utils.get(d, 'data.length');
        maxDataLength = maxDataLength < length ? length : maxDataLength;
      });
    }

    // 当数据量超过设定的最大值时， 将柱状图转为线图
    const autoSmooth = config.autoSmoothNumber < maxDataLength;

    if (autoSmooth) {
      data.forEach(d => {
        d.type = 'line';
      });
    }

    (data || []).forEach(d => {
      if (d.type === 'line') {
        rawLineData.push(d);
      } else if (d.type === 'bar') {
        rawBarData.push(d);
      }
    });

    const lineData = dataAdapter(rawLineData, config);
    const barData = dataAdapter(rawBarData, config);

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
          // 单轴时，必须同步度量，否则会两个度量叠加在一起
          sync: true,
        },
        config.yAxis
      );
    }

    rectAutoTickCount(chart, config, defs, false);

    chart.scale(defs);

    // 设置X轴
    axisX(chart, config);

    const lineColors = getColors(rawLineData);
    const barColors = getColors(rawBarData);

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((axis, yIndex: number) => {
        const yAxisConfig: any = {};
        if (config.yAxisColor) {
          const axisColor =
            getDataIndexColor(lineColors, rawLineData, yIndex) ||
            getDataIndexColor(barColors, rawBarData, yIndex);
          yAxisConfig.line = {
            stroke: axisColor,
          };
        }
        if (yIndex !== 0) {
          yAxisConfig.grid = null;
          // 因为是多个view组成的图表，所以这里需要移动位置
          yAxisConfig.position = 'right';
        }

        axisY(chart, { ...config, yAxis: axis }, `y${yIndex}`, yAxisConfig);
      });
    } else {
      // 设置单个Y轴
      axisY(chart, config);
    }

    g2Legend(chart, config, config.legend);

    g2Tooltip(chart, config, config.tooltip);

    // 正式开始绘图，创建两个不同的view
    const barView = chart.view();
    barView.source(barData);
    this.barView = barView;

    const lineView = chart.view();
    lineView.source(lineData);
    this.lineView = lineView;

    if (Array.isArray(config.yAxis)) {
      config.yAxis.forEach((asix, yIndex) => {
        if (getDataIndexColor(barColors, rawBarData, yIndex)) {
          drawBar(barView, barData, config, `y${yIndex}`, barColors);
        }
        if (getDataIndexColor(lineColors, rawLineData, yIndex)) {
          drawLine(lineView, lineData, config, `y${yIndex}`, lineColors, autoSmooth);
        }
      });
    } else {
      drawBar(barView, barData, config, 'y', barColors);
      drawLine(lineView, lineData, config, 'y', lineColors);
    }
    g2Guide(barView, config, config.barGuide || config.guide);
    g2Guide(lineView, config, config.lineGuide || config.guide);

    chart.render();
  },
};

function drawBar(chart, data, config, yAxisKey = 'y', colors) {
  if (!data || !data.length) return;
  let intervalGeom = null;
  if (config.stack) {
    intervalGeom = chart
      .interval()
      .position(['x', yAxisKey])
      .color('type', colors)
      .adjust([
        {
          type: 'stack',
          reverseOrder: !config.stackReverse, // 层叠顺序倒序
        },
      ]);
  } else {
    intervalGeom = chart
      .interval()
      .position(['x', yAxisKey])
      .color('type', colors)
      .adjust([
        {
          type: 'dodge',
          marginRatio: 0, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
        },
      ]);
  }

  g2Size(intervalGeom, config, config.barSize || config.size);
  g2Style(intervalGeom, config, config.barStyle || config.style);
  g2Label(intervalGeom, config, config.barLabel || config.label, yAxisKey);
}

function drawLine(chart, data, config, yAxisKey = 'y', colors, autoSmooth = false) {
  if (!data || !data.length) return;
  const lineShape = config.smooth ? 'smooth' : 'line';
  const areaShape = config.smooth ? 'smooth' : 'area';
  let lineGeom = null;

  if (config.area && config.stack) {
    chart
      .areaStack()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape(areaShape)
      .active(false);
    lineGeom = chart
      .lineStack()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape(lineShape);
  } else if (config.area && !config.stack) {
    chart
      .area()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape(areaShape)
      .active(false);
    lineGeom = chart
      .line()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape(lineShape);
  } else {
    lineGeom = chart
      .line()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape(lineShape);
  }

  g2Size(lineGeom, config, config.lineSize || config.size);
  g2Style(lineGeom, config, config.lineStyle || config.style);
  g2Label(lineGeom, config, config.lineLabel || config.label, yAxisKey);

  if (autoSmooth) {
    return;
  }
  let symbolGeom = null;
  // 曲线默认点
  if (config.symbol && config.area && config.stack) {
    symbolGeom = chart
      .point()
      .adjust('stack')
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape('circle')
      .active(false);
  } else if (config.symbol) {
    symbolGeom = chart
      .point()
      .position(['x', yAxisKey])
      .color('type', colors)
      .shape('circle')
      .active(false);
  }
  if (symbolGeom) {
    g2Size(symbolGeom, config, config.symbolSize || config.size);
  }
  if (symbolGeom) {
    g2Style(symbolGeom, config, config.symbolStyle || config.style);
  }
}

/**
 * 检测原始数据是否存在 color，获取geom所需的颜色
 * @param data 原始数据格式
 * @param type line | bar
 */
function getColors(data): [] {
  const type = Utils.get(data, '0.type');
  let colors;
  if (data[0] && data[0].color) {
    colors = data.map(v => v.color);
  } else {
    const colors24 = Utils.get(this, 'consoleTheme.colors_24');
    if (colors24) {
      colors = colors24;
    } else {
      colors = Constants.COLORS_24;
    }
    colors = colors.filter((v, index) => (type === 'bar' ? index % 2 === 0 : index % 2 !== 0));
  }
  return colors;
}

const ConsoleComboChart: any = g2Factory(COMPONENT_NAME, cfg);
export default ConsoleComboChart;
