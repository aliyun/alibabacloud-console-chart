import {
  propertyAssign,
  propertyMap,
  g2Guide,
  axisX,
  axisY,
  rectAutoTickCount,
  dataAdapter,
  g2Tooltip,
  g2Label,
  g2Legend,
  g2Size,
  g2Style,
  g2Factory,
  getFinalGeomColors,
  getConsoleConfig,
  Utils,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleBarChart';

const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);

    const unionConfig = Object.assign({}, props, {
      padding: props.padding || newConfig.padding || 'auto',
      config: newConfig,
    });

    return unionConfig;
  },

  drawChart(chart, config, data) {
    // 设置数据度量
    const defs = {
      x: propertyAssign(
        propertyMap.xAxis,
        {
          type: 'cat',
        },
        config.xAxis
      ),
      y: propertyAssign(
        propertyMap.yAxis,
        {
          type: 'linear',
          tickCount: 5,
        },
        config.yAxis
      ),
      type: {
        type: 'cat',
        sync: true,
      },
      facet: {
        sync: true,
      },
    };

    const adaptData = dataAdapter(data, config);

    rectAutoTickCount(chart, config, defs, config.horizontal);

    chart.source(adaptData, defs);

    // 设置单个Y轴
    if (!config.facet) {
      if (Array.isArray(config.yAxis)) {
        console.error(`${COMPONENT_NAME}不支持数组形式的yAxis配置`);
        return;
      }
      axisY(chart, config);
    }

    // 设置X轴
    axisX(chart, config);

    g2Legend(chart, config, config.legend, 'type');
    g2Guide(chart, config, config.guide);

    g2Tooltip(chart, config, config.tooltip);

    // 横向柱状图
    if (config.horizontal) {
      chart
        .coord()
        .transpose()
        .reflect('y');
      // 由于y轴在上面，展示可能不会很好看
      chart.axis('y', false);
    }

    const colors = getFinalGeomColors(data, this.consoleTheme);

    if (config.facet) {
      const facetConfig =
        typeof config.facet === 'object'
          ? config.facet
          : {
              type: 'mirror',
              transpose: false,
              padding: [20, 0, 20, 0],
            };
      chart.facet(facetConfig.type, {
        fields: ['facet'],
        transpose: facetConfig.transpose,
        padding: facetConfig.padding,
        rowTitle: {
          offsetX: 15,
          style: {
            fontSize: '12px',
            textAlign: 'center',
            rotate: 90,
          },
        },
        eachView(view, facet) {
          let yAxisCustomConfig = null;

          // 为 labelFormatter 的第二个参数添加分面信息
          if (config.yAxis && config.yAxis.visible !== false) {
            const { formatter = false } = config.yAxis || {};
            if (formatter) {
              yAxisCustomConfig = {
                label: {
                  formatter: (...args) => {
                    args[1] = Object.assign(
                      {
                        facet: facet.colValue || facet.rowValue,
                      },
                      args[1]
                    );
                    return formatter(...args);
                  },
                },
              };
            }
          }

          axisY(view, config, 'y', yAxisCustomConfig);

          drawBar(view, config, colors, 'type*facet');
        },
      });
    } else {
      drawBar(chart, config, colors);
    }

    chart.render();
  },
};

function drawBar(chart, config, colors, field = 'type') {
  const { stack, stackReverse, marginRatio, dodgeStack } = config;
  let geom = null;
  if (dodgeStack) {
    geom = chart
      .interval()
      .position(['x', 'y'])
      .color(field, colors)
      .adjust([
        {
          type: 'dodge',
          marginRatio: marginRatio || 0, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
          dodgeBy: 'dodge',
        },
        {
          type: 'stack',
          reverseOrder: !stackReverse, // 层叠顺序倒序
        },
      ]);
  } else if (stack) {
    // 堆叠
    geom = chart
      .interval()
      .position(['x', 'y'])
      .color(field, colors)
      .adjust([
        {
          type: 'stack',
          reverseOrder: !stackReverse, // 层叠顺序倒序
        },
      ]);
  } else {
    // 分组
    geom = chart
      .interval()
      .position(['x', 'y'])
      .color(field, colors)
      .adjust([
        {
          type: 'dodge',
          marginRatio: marginRatio || 0, // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
        },
      ]);
  }

  g2Size(geom, config, config.size, 'y', 'x*y*type*facet');
  g2Label(geom, config, config.label, 'y');
  g2Style(geom, config, config.style);
}

const Chart: any = g2Factory(COMPONENT_NAME, cfg);
export default Chart;
