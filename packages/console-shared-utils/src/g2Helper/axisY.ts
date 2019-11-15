import { get } from '../common/utils';

/*
 * 常见直角坐标系的单个Y轴设置。
 * */
export default function(chart: any, config: any, yField?: string, componentConfig?: any) {
  yField = yField || 'y';
  if (config.yAxis === false || get(config, 'yAxis.visible') === false) {
    chart.axis(yField, false);
    return;
  } else {
    const { title = false, formatter = false, line, ...other } = config.yAxis || {};

    const yAxisConfig = other;

    // 关闭了X轴，需要显示第一条grid
    if (config.xAxis === false || get(config, 'xAxis.visible') === false) {
      yAxisConfig.grid = {
        hideFirstLine: false,
      };
    }

    // 开启坐标轴标题
    if (title) {
      if (title === true) {
        yAxisConfig.title = {
          position: 'center',
          // offset: 30,
          textStyle: {
            rotate: -90,
          },
        };
      } else {
        yAxisConfig.title = Object.assign({}, title);
      }
      // 如果存在右侧坐标轴，调整旋转方向
      if (yField === 'y1') {
        yAxisConfig.title.textStyle.rotate = 90;
      }
      yAxisConfig.label.textStyle = {
        rotate: 0,
      };
    }

    if (componentConfig) {
      Object.assign(yAxisConfig, componentConfig);
    }

    chart.axis(yField, yAxisConfig);
  }
}
