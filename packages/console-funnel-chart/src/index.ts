import {
  g2Tooltip,
  g2Factory,
  getConsoleConfig,
  Utils,
  Constants,
  dataAdapter,
  g2Style,
  g2Guide,
  g2Label,
  g2Size,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleFunnelChart';

const cfg = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];
    const newConfig = Utils.merge({}, defaultConfig, config);
    if (newConfig.pyramid) {
      newConfig.align = 'center';
    }
    const unionProps = Object.assign({}, props, {
      padding: props.padding || newConfig.padding || 'auto',
      config: newConfig,
    });
    return unionProps;
  },

  drawChart(chart, config, data) {
    // 设置数据度量
    const defs = {
      type: {
        type: 'cat',
      },
    };
    const adaptData = dataAdapter(data, config);
    chart.source(adaptData, defs);
    chart.axis(false);

    // 设置图例
    chart.legend(config.legend);

    g2Tooltip(chart, config, config.tooltip, {
      showTitle: false,
      crosshairs: null,
    });

    // 绘制辅助线，辅助背景区域
    g2Guide(chart, config, config.guide);

    const { direction = 'vertical', align = 'center' } = config;
    // 根据传入的 direction 和 align 设置坐标系，并绘制图形
    const drawType = `${direction}-${align}`;
    let geom = null;

    switch (drawType) {
      case 'vertical-left':
        chart
          .coord('rect')
          .transpose()
          .scale(1, -1);
        geom = chart.interval();
        break;
      case 'vertical-center':
        chart
          .coord('rect')
          .transpose()
          .scale(1, -1);
        geom = chart.intervalSymmetric();
        break;
      case 'vertical-right':
        chart
          .coord('rect')
          .transpose()
          .scale(-1, -1);
        geom = chart.interval();
        break;
      case 'horizontal-top':
        chart.coord('rect').reflect('y');
        geom = chart.interval();
        break;
      case 'horizontal-center':
        geom = chart.intervalSymmetric();
        break;
      default:
        geom = chart.interval();
    }

    const funnelShape = config.align === 'center' && config.pyramid ? 'pyramid' : 'funnel';

    const colors = config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;

    geom
      .position('x*y')
      .shape(funnelShape)
      .color('x', colors);

    g2Label(geom, config, config.label);
    g2Size(geom, config, config.size);
    g2Style(geom, config, config.style);
    chart.render();
  },
};

const ConsoleFunnelChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleFunnelChart;
