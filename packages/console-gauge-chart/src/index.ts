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

import './registerShape';

const COMPONENT_NAME = 'ConsoleGagueChart';

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
    let res = [{ value: 0 }];
    if (Array.isArray(data) && data.length) {
      res = data[0].data;
    }
    chart.source(res);

    chart.coord('polar', {
      startAngle: -9 / 8 * Math.PI,
      endAngle: 1 / 8 * Math.PI,
      radius: 0.75
    });
    chart.scale('value', {
      min: 0,
      max: 9,
      tickInterval: 1,
      nice: false
    });

    chart.axis('1', false);
    chart.axis('value', {
      zIndex: 2,
      line: null,
      label: {
        offset: -16,
        textStyle: {
          fontSize: 18,
          textAlign: 'center',
          textBaseline: 'middle'
        }
      },
      subTickCount: 4,
      subTickLine: {
        length: -8,
        stroke: '#fff',
        strokeOpacity: 1
      },
      tickLine: {
        length: -17,
        stroke: '#fff',
        strokeOpacity: 1
      },
      grid: null
    });
    chart.legend(false);
    chart.point().position('value*1')
      .shape('pointer')
      .color('#1890FF')
      .active(false);

    // 绘制仪表盘背景
    chart.guide().arc({
      zIndex: 0,
      top: false,
      start: [ 0, 0.945 ],
      end: [ 9, 0.945 ],
      style: { // 底灰色
        stroke: '#CBCBCB',
        lineWidth: 18
      }
    });
    // 绘制指标
    chart.guide().arc({
      zIndex: 1,
      start: [ 0, 0.945 ],
      end: [ res[0].value, 0.945 ],
      style: {
        stroke: '#1890FF',
        lineWidth: 18
      }
    });
    // 绘制指标数字
    chart.guide().html({
      position: [ '50%', '95%' ],
      html: '<div style="width: 300px;text-align: center;">'
        + '<p style="font-size: 20px; color: #545454;margin: 0;">合格率</p>'
        + '<p style="font-size: 36px;color: #545454;margin: 0;">' + res[0].value * 10 + '%</p>'
        + '</div>'
    });

    chart.render();
  },
};

const ConsoleGagueChart: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleGagueChart;
