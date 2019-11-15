import isPlainObjet from 'lodash/isPlainObject';
import intersection from 'lodash/intersection';

const allowedFunctions = [
  'line',
  'text',
  'image',
  'region',
  'html',
  'arc',
  'regionFilter',
  'dataMarker',
  'dataRegion',
];

export default function guide(chart, config, guideConfig) {
  if (!isPlainObjet(guideConfig)) {
    return;
  }

  // 横向的，不允许展示topUnit属性
  if (config.horizontal) {
    guideConfig.topUnit = false;
  }

  const { topUnit, ...other } = guideConfig;

  const configKeys = Object.keys(other || {});
  const intersectionKeys = intersection(configKeys, allowedFunctions);
  intersectionKeys.forEach(key => {
    if (Array.isArray(other[key])) {
      other[key].forEach(config => chart.guide()[key](config));
    } else {
      chart.guide()[key](other[key]);
    }
  });

  if (topUnit) {
    // 顶部单位
    const defaultUnitConfig = {
      top: true,
      position: ['-3%', '-10%'],
      style: {
        fill: '#8dabc4',
      },
      content: '单位',
      offsetX: 0,
      offsetY: 0,
    };
    if (Array.isArray(topUnit)) {
      const [firstText, secondText] = topUnit;
      chart
        .guide()
        .text(Object.assign(defaultUnitConfig, { content: firstText, position: ['-3%', '-10%'] }));
      chart
        .guide()
        .text(Object.assign(defaultUnitConfig, { content: secondText, position: ['97%', '-10%'] }));
    } else {
      chart.guide().text(Object.assign(defaultUnitConfig, { content: topUnit }));
    }
  }
}
