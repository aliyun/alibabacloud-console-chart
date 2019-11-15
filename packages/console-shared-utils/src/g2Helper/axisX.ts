// 通用坐标轴配置
export default function(chart: any, config: any, componentConfig?: any) {
  if (config.xAxis === false || (config.xAxis && config.xAxis.visible === false)) {
    chart.axis('x', false);
  } else {
    const { grid, title = false, autoRotate = false, rotate = false, ...other } =
      config.xAxis || {};

    const xAxisConfig = other;

    if (rotate) {
      xAxisConfig.label.textStyle = {
        textAlign: 'start',
        rotate,
      };
    }

    // 网格线
    if (grid) {
      if (grid === true) {
        xAxisConfig.grid = {
          lineStyle: {
            lineWidth: 1,
          },
        };
      } else {
        xAxisConfig.grid = Object.assign({}, grid);
      }
    }

    // 开启坐标轴标题
    if (title) {
      if (title === true) {
        xAxisConfig.title = {
          position: 'center',
          offset: 38,
          textStyle: {
            rotate: 0,
          },
        };
      } else {
        xAxisConfig.title = Object.assign({}, title);
      }
    }

    if (componentConfig) {
      Object.assign(xAxisConfig, componentConfig);
    }

    chart.axis('x', xAxisConfig);
  }
}
