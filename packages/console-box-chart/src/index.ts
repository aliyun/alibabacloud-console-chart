import {
  // propertyAssign,
  // propertyMap,
  // g2Tooltip,
  // drawLine,
  g2Factory,
  // g2Legend,
  // g2Guide,
  // getFinalGeomColors,
  getConsoleConfig,
  Utils,
  // dataAdapter,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsoleBoxChart';

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

    const dv = data[0].data || [];
    const res = dv.map(obj => {
      obj.range = [ obj.low, obj.q1, obj.median, obj.q3, obj.high ];
      return obj;
    });
    chart.source(res, {
      range: {
        max: 35
      }
    });
    chart.tooltip({
      showTitle: false,
      crosshairs: {
        type: 'rect'
      },
      itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
        + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
        + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
        + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
        + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
        + '</li>'
    });
    chart.schema().position('x*range')
      .shape('box')
      .tooltip('x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
        return {
          name: x,
          low,
          q1,
          median,
          q3,
          high
        };
      })
      .style({
        stroke: '#545454',
        fill: '#1890FF',
        fillOpacity: 0.3
      });
    chart.render();
  },
};

const ConsoleBoxChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleBoxChart;
