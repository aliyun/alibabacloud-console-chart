import {
  g2Tooltip,
  g2Guide,
  g2Label,
  g2Style,
  g2Factory,
  g2Legend,
  g2Size,
  getConsoleConfig,
  Utils,
  Constants,
  dataAdapter,
  G2,
} from '@alicloud/console-shared-utils';

const COMPONENT_NAME = 'ConsolePieChart';

const Shape = G2.Shape;

function transformCoord(coord, transform: any = {}) {
  const { type, param } = transform;
  if (coord[type] && Array.isArray(param)) {
    coord[type](...param);
  }
}

function selectGeom(geom, selectKey) {
  if (!geom) {
    return;
  }

  // 清除选中效果
  geom.clearSelected();

  // 如果selectKey为假值，则只清空选中效果。
  if (!selectKey) {
    return;
  }

  // 使用内部方法直接选中，fix: 数据同时被更新时无法选中的问题
  geom.getShapes().forEach(shape => {
    const origin = shape.get('origin');
    if (Utils.get(origin, '_origin.x') === selectKey) {
      geom.setShapeSelected(shape);
    }
  });
}

const cfg: any = {
  getUnifiedProps(props) {
    const { config } = props;
    const defaultConfig = getConsoleConfig()[COMPONENT_NAME];

    const newConfig: any = Utils.merge({}, defaultConfig, config);

    const unionProps = Object.assign({}, props, {
      padding: props.padding || config.padding,
      config: newConfig,
    });

    return unionProps;
  },

  changeSize(chart, config, w, h) {
    chart.changeSize(w, h);
    selectGeom(this.geom, config.selectData);
  },

  changeCustomConfig(objValue, othValue, key) {
    if (key === 'selectData' && objValue !== othValue) {
      selectGeom(this.geom, objValue);
      return true;
    }
  },

  drawChart(chart, config, data) {
    const defs = {
      type: {
        type: 'cat',
      },
    };

    const adaptData = dataAdapter(data, config);

    if (config.autoSort) {
      adaptData.sort((a, b) => b.y - a.y);
    }
    chart.source(adaptData, defs);

    const hasSliceGap: boolean = config.cycle && (config.sliceGap >= 0 && config.sliceGap <= 1);
    if (hasSliceGap) {
      const sliceNumber: number = config.sliceGap;
      Shape.registerShape('interval', 'sliceShape', {
        draw(cfg, container) {
          const points = cfg.points;
          let path = [];
          path.push([ 'M', points[0].x, points[0].y ]);
          path.push([ 'L', points[1].x, points[1].y - sliceNumber ]);
          path.push([ 'L', points[2].x, points[2].y - sliceNumber ]);
          path.push([ 'L', points[3].x, points[3].y ]);
          path.push('Z');
          path = this.parsePath(path);
          return container.addShape('path', {
            attrs: {
              fill: cfg.color,
              path
            }
          });
        }
      });
    }

    // 重要：绘制饼图时，必须声明 theta 坐标系
    const thetaConfig: any = {
      radius: 1, // 设置饼图的为100% 大小，具体大小改变在 beforeInit 中diameter的值，目前为0.8
    };
    if (config.cycle) {
      const innerRadius = config.innerRadius || 0.75;
      thetaConfig.innerRadius = Math.min(innerRadius, 1);
    }
    const coord = chart.coord('theta', thetaConfig);

    if (config.coord) {
      const transform = config.coord && config.coord.transform;

      if (Array.isArray(transform)) {
        transform.forEach(t => {
          transformCoord(coord, t);
        });
      } else if (transform && typeof transform === 'object') {
        transformCoord(coord, transform);
      }
    }

    // 计算得总数据
    let totalData = 0;
    adaptData.forEach(d => {
      totalData += d.y;
    });

    // position若直接使用value导致图例点击某项隐藏，余下展示不为值和不为1
    const colors =
      config.colors || Utils.get(this, 'consoleTheme.colors_24') || Constants.COLORS_24;
    if (hasSliceGap) {
      this.geom = chart
      .intervalStack()
      .position('y')
      .color('x', colors)
      .shape('sliceShape')
      .select(config.select);
    } else {
      this.geom = chart
      .intervalStack()
      .position('y')
      .color('x', colors)
      .select(config.select);
    }

    g2Tooltip(chart, config, config.tooltip, { showTitle: false });
    g2Legend(chart, config, config.legend);
    g2Guide(chart, config, config.guide);
    g2Label(this.geom, config, config.label, 'y', 'y', { total: totalData });
    g2Style(this.geom, config, config.style);
    g2Size(this.geom, config, config.size, 'x');

    chart.render();
  },

  afterRender(chart, config) {
    // 这里主要是为了实现 selectData 特性，保证在1s内只调用一次selectGeom，并且是在节流结束之后触发, 保证最后一次的正确显示
    if (!this.throttleSelect) {
      this.throttleSelect = Utils.throttle(
        config => {
          selectGeom(this.geom, config.selectData);
        },
        1000,
        { trailing: true }
      );
    }
    this.throttleSelect(config);
  },

  destroy() {
    this.geom = null;
  },
};

const ConsolePieChart = g2Factory(COMPONENT_NAME, cfg);
export default ConsolePieChart;
