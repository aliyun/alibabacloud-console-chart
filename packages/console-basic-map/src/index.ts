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

import mapData from './world.geo.json';
import source from './source';
import transform from './transform';

const COMPONENT_NAME = 'ConsoleBasicMap';

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

    const res = data[0].data || [];

    chart.tooltip({
      showTitle: false
    });
    // 同步度量
    chart.scale({
      longitude: {
        sync: true
      },
      latitude: {
        sync: true
      }
    });
    chart.axis(false);
    chart.legend('trend', {
      position: 'left'
    });

    // 绘制世界地图背景

    const worldMap = source(mapData);

    const worldMapView = chart.view();
    worldMapView.source(worldMap);
    worldMapView.tooltip(false);
    worldMapView.polygon().position('longitude*latitude').style({
      fill: '#fff',
      stroke: '#ccc',
      lineWidth: 1
    });

    transform(res, {
      geoDataView: worldMap,
      field: 'name',
      as: [ 'longitude', 'latitude' ]
    })

    const userDv = res.map(obj => {
      obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
      return obj;
    });

    const userView = chart.view();
    userView.source(userDv, {
      trend: {
        alias: '每100位女性对应的男性数量'
      }
    });
    userView.polygon()
      .position('longitude*latitude')
      .color('trend', [ '#F51D27', '#0A61D7' ])
      .opacity('value')
      .tooltip('name*trend')
      .animate({
        leave: {
          animation: 'fadeOut'
        }
      });
    chart.render();
  },
};

const ConsoleBasicMap: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleBasicMap;
