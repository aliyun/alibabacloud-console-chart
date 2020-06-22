import g2Label from './label';
import g2Size from './size';
import g2Style from './style';

function drawLine(chart: any, config: any, yAxisKey = 'y') {
  let lineGeom = null;

  const lineShape = config.smooth ? 'smooth' : 'line';
  const areaShape = config.smooth ? 'smooth' : 'area';

  let clrsOne = [];
  let clrsTwo = [];
  (config.colors || []).forEach((x: string | [string, string]) => {
    if (Array.isArray(x)) {
      clrsOne.push(x[0]);
      clrsTwo.push(x[1]);
    } else if (typeof x === 'string') {
      clrsOne.push(x);
      clrsTwo.push(x);
    }
  });

  if (config.area && config.stack) {
    chart
      .areaStack()
      .position(['x', yAxisKey])
      .color('type', clrsTwo)
      .shape(areaShape)
      .active(false);
    lineGeom = chart
      .lineStack()
      .position(['x', yAxisKey])
      .color('type', clrsOne)
      .shape(lineShape)
      .active(false);
  } else if (config.area && !config.stack) {
    console.log(config);
    chart
      .area()
      .position(['x', yAxisKey])
      .color('type', clrsTwo)
      .shape(areaShape)
      .active(false);
    lineGeom = chart
      .line()
      .position(['x', yAxisKey])
      .color('type', clrsOne)
      .shape(lineShape)
      .active(false);
  } else {
    lineGeom = chart
      .line()
      .position(['x', yAxisKey])
      .color('type', clrsOne)
      .shape(lineShape)
      .active(false);
  }

  g2Size(lineGeom, config, config.lineSize || config.size);
  g2Label(lineGeom, config, config.label, yAxisKey);
  g2Style(lineGeom, config, config.style);

  // 曲线默认点
  let pointGeom = null;
  if (config.symbol) {
    if (config.area && config.stack) {
      pointGeom = chart
        .point()
        .adjust('stack')
        .position(['x', yAxisKey])
        .color('type', config.colors)
        .shape('circle')
        .active(false);
    } else {
      pointGeom = chart
        .point()
        .position(['x', yAxisKey])
        .color('type', config.colors)
        .shape('circle')
        .active(false);
    }

    g2Size(pointGeom, config, config.symbolSize || config.size, 'type', 'x*y*type*extra');
    g2Label(pointGeom, config, config.symbolLabel);
    g2Style(pointGeom, config, config.symbolStyle);
  }
}

export default drawLine;
