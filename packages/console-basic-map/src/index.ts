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

import mapData from './world.geo.json';
import source from './source';
import transform from './transform';
import defaultSource from './sourceDefault';
import mapTransform from './mapTransform';

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

    chart.scale({
      x: { sync: true, nice: false },
      y: { sync: true, nice: false }
    });
    chart.coord().reflect();
    chart.legend(false);
    chart.axis(false);

    // style the tooltip
    chart.tooltip({
      showTitle: false,
      containerTpl: '<div class="g2-tooltip"><table class="g2-tooltip-list"></table></div>',
      itemTpl: '<tr data-index="{index}"><td style="padding:5px;background-color:#545454;">{name}</td><td style="padding:5px;background-color:#fff;color:#000;">{value}</td></tr>',
      'g2-tooltip': {
        borderRadius: '2px',
        backgroundColor: '#DDDDDD',
        padding: 0,
        border: '1px solid #333'
      }
    });
    // data set

    // draw the map
    const dv = source(mapData);
    transform(dv, {
      projection: 'geoMercator',
      as: [ 'x', 'y', 'centroidX', 'centroidY' ]
    });

    const bgView = chart.view();
    bgView.source(dv);
    bgView.tooltip(false);
    bgView.polygon()
      .position('x*y')
      .style({
        fill: '#DDDDDD',
        stroke: '#b1b1b1',
        lineWidth: 0.5,
        fillOpacity: 0.85
      });

    // draw the bubble plot
    const userData = defaultSource(data);
    mapTransform(userData, {
      callback: obj => {
        const projectedCoord = dv.geoProjectPosition([ obj.lng * 1, obj.lat * 1 ], 'geoMercator');
        obj.x = projectedCoord[0];
        obj.y = projectedCoord[1];
        obj.deaths = obj.deaths * 1;
        obj.magnitude = obj.magnitude * 1;
        return obj;
      }
    });
    const pointView = chart.view();
    pointView.source(userData);
    pointView.point()
      .position('x*y')
      .size('deaths', [ 2, 30 ])
      .shape('circle')
      .opacity(0.45)
      .color('#FF2F29')
      .tooltip('date*location*lat*lng*deaths*magnitude');

    chart.render();
  },
};

const ConsoleBasicMap: any = g2Factory(COMPONENT_NAME, cfg);

export default ConsoleBasicMap;
