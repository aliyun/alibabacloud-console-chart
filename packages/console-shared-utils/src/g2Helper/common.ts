import { get } from '../common/utils';
import highchartsDataToG2Data from './dataAdapter';
import { COLORS_24 } from '../constants/index';

export const requestAnimationFrame = window && window.requestAnimationFrame;

export const propertyMap = {
  xAxis: [
    'type',
    'alias',
    'range',
    'ticks',
    'tickCount',
    'tickInterval',
    'formatter',
    'min',
    'max',
    'minLimit',
    'maxLimit',
    'nice',
    'values',
    'mask',
    'base',
    'exponent',
    'sync',
  ],
  yAxis: [
    'type',
    'alias',
    'range',
    'ticks',
    'tickCount',
    'tickInterval',
    'formatter',
    'min',
    'max',
    'minLimit',
    'maxLimit',
    'nice',
    'values',
    'mask',
    'base',
    'exponent',
    'sync',
  ],
};

const keyType: any = {
  min: 'number',
  max: 'number',
  minLimit: 'number',
  maxLimit: 'number',
  tickCount: 'number',
};

export function propertyAssign(keys: any[], target: any, source: any) {
  if (!source) {
    return target;
  }
  keys.forEach((key: string) => {
    // 仅判断undefined的情况
    if (source[key] !== undefined) {
      // 将部分限制了类型的key属性转换为需要的类型
      if (keyType[key] !== 'number') {
        target[key] = source[key];
      } else if (source[key] === null) {
        // 设置null则直接赋值
        target[key] = null;
      } else if (!isInvalidNumber(source[key])) {
        // 是数字时才赋值，否则直接跳过
        target[key] = Number(source[key]);
      }
    }
  });

  return target;
}

/**
 * 找到对应元素的父元素的大小
 *
 * @param {element} element Html元素
 * @param {number} width props中传递的width属性
 * @param {number} height props中传递的height属性
 *
 * @return {array} 宽和高的数组
 * */
export function getParentSize(element: any, width?: any, height?: any) {
  let w = width || '';
  let h = height || '';

  const parent = element && element.parentElement;

  if (parent) {
    const parentStyle = window.getComputedStyle(parent);
    const paddingTop = pxToNumber(parentStyle.getPropertyValue('padding-top'));
    const paddingRight = pxToNumber(parentStyle.getPropertyValue('padding-right'));
    const paddingBottom = pxToNumber(parentStyle.getPropertyValue('padding-bottom'));
    const paddingLeft = pxToNumber(parentStyle.getPropertyValue('padding-left'));

    if (!width) {
      w = parent.clientWidth - paddingLeft - paddingRight;
    }
    if (!height) {
      h = parent.clientHeight - paddingTop - paddingBottom;
    }
  }
  return [w, h];
}

export function pxToNumber(px: string) {
  return Number(px.replace('px', ''));
}

export function getFinalGeomColors(rawData, consoleTheme, colorGroup = 'colors_24') {
  let colors: any = [];
  if (get(rawData, '0.color')) {
    colors = rawData.map(v => v.color);
  } else {
    const colors24 = get(consoleTheme, colorGroup);
    if (colors24) {
      colors = colors24;
    } else {
      colors = COLORS_24;
    }
  }

  return colors;
}

/**
 * 从Highcharts格式数据中找到对应index的颜色
 *
 * @param {array} colors 颜色数组
 * @param {array} rawData Highcharts 格式的数据
 * @param {number} dataIndex y轴对应的index
 * */
export function getDataIndexColor(colors: [], rawData: any[], dataIndex: number) {
  let colorIndex = null;
  // 找到第一个顺序值和数据中yAxis值匹配的index
  rawData.forEach((d, i) => {
    const dataYAxisIndex = d.yAxis;
    if (dataYAxisIndex === dataIndex) {
      colorIndex = i;
    }
  });

  if (colorIndex !== null) {
    return colors[colorIndex];
  }
}

const statusMap: any = {};

export function getStatusColor(status: string) {
  return statusMap[status] || status || statusMap.normal;
}

const statusColorMap: any = {
  error: 'red',
  warning: 'orange',
  normal: 'blue',
  success: 'green',
  none: 'gray',
};
export function getStatusColorName(status: string) {
  return statusColorMap[status] || status || statusColorMap.normal;
}

/**
 * 判断是否是有效数字
 *
 * @param v 输入值
 *
 * @return {boolean} 是否有效数字
 * */
export function isInvalidNumber(v: any) {
  return isNaN(v) || !isFinite(v) || v === '' || typeof v === 'object';
}

/**
 * 数字格式化小数位
 *
 * @param {number} num 输入数字
 * @param {number} decimal 小数位数，默认两位
 *
 * @return {string|number} 如果不是数字，返回横杠字符串。如果是数字，返回设定小数位的字符串。
 * */
export function numberDecimal(num: number, decimal = 2) {
  if (isInvalidNumber(num) || isInvalidNumber(decimal)) {
    return '-';
  }

  return Math.round(Number(num) * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

/**
 * 数字格式化千分位
 *
 * @param {number} num 输入数字
 * @param {number} char 分隔符，默认为逗号
 *
 * @return {string|number} 如果不是数字，返回横杠字符串。如果是数字，返回千分位的字符串。
 * */
export function beautifyNumber(num: number, char = ',') {
  if (isInvalidNumber(num)) {
    return '-';
  }
  const isNegative = num < 0;
  const numberArr = num.toString().split('.');
  let number = numberArr[0].replace('-', '');
  let result = '';
  while (number.length > 3) {
    result = char + number.slice(-3) + result;
    number = number.slice(0, number.length - 3);
  }
  if (number) {
    result = number + result;
  }
  // fix 保留了小数位数字
  if (numberArr[1]) {
    result = `${result}.${numberArr[1]}`;
  }
  // 处理负数
  if (isNegative) {
    result = `-${result}`;
  }
  return result;
}

// 规范化padding输出
export function formatPadding(val) {
  let output = null;
  const defaultOutput = [0, 0, 0, 0];
  if (Array.isArray(val) && val.length === 4) {
    const len: number = val.length;
    switch (len) {
      case 1:
        output = new Array(4).fill(val[0]);
        break;
      case 2:
        output = val.concat(val);
        break;
      case 4:
        output = val;
        break;
      default:
        output = defaultOutput;
        break;
    }
  } else if (!isInvalidNumber(val)) {
    output = new Array(4).fill(val);
  } else {
    output = defaultOutput;
  }
  return output;
}

export function stylePadding(val) {
  const formattedPadding = formatPadding(val);
  const stylePadding = { paddingTop: '', paddingRight: '', paddingBottom: '', paddingLeft: '' };
  stylePadding.paddingTop = `${formattedPadding[0]}px`;
  stylePadding.paddingRight = `${formattedPadding[1]}px`;
  stylePadding.paddingBottom = `${formattedPadding[2]}px`;
  stylePadding.paddingLeft = `${formattedPadding[3]}px`;

  return stylePadding;
}

/**
 * 空函数
 * */
export function noop() {}

/**
 * tooltip item 获取原始数据
 *
 * @param {object} config 图表配置项
 * @param {array} rawData 挂载于 this.rawData 上的原始数据
 * @param {number} item tooltip格式化函数的当前数据项
 *
 * @return {object} 寻找得到的原始数据，没有找到则返回空对象。
 * */
export function getRawData(config: any, rawData: any, item: any) {
  if (!rawData) {
    return {};
  }

  let originData = (item.point && item.point._origin) || {};
  if (config.dataType !== 'g2' && Array.isArray(rawData)) {
    rawData.some(r => {
      if (r.name === originData.type) {
        // 如果原数据中定义了 facet，需要额外判定 facet 字段
        if (r.facet && originData.facet !== r.facet) {
          return false;
        }
        originData = r;
        return true;
      }
      return false;
    });
  }

  return originData;
}

/**
 * 过滤对象中的key，常用于过滤传递给div的props，防止react invalid attribute warning
 *
 * @param {object} obj 过滤的对象
 * @param {array} keys 过滤的键列表
 *
 * @return {object} 过滤后的结果
 * */
export function filterKey(obj: any, keys: any[]) {
  const result: any = {};
  Object.keys(obj).forEach((key: any) => {
    if (keys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * 处理图表库中的默认padding值的通用函数
 *
 * @param {padding} padding 用户配置的padding值
 * @param {object} config 合并了默认配置后的最终配置项
 * 以下参数非必选
 * @param {number} [defaultTop] 默认top padding
 * @param {number} [defaultRight] 默认right padding
 * @param {number} [defaultBottom] 默认bottom padding
 * @param {number} [defaultLeft] 默认left padding
 *
 * @return
 * */
export function defaultPadding(
  padding: any,
  config: any,
  defaultTop: any,
  defaultRight: any,
  defaultBottom: any,
  defaultLeft: any
) {
  if (padding) {
    return padding;
  }

  // 取默认配置中的padding
  let top = defaultTop;
  let right = defaultRight;
  let bottom = defaultBottom;
  let left = defaultLeft;

  if (right !== 'auto' && Array.isArray(config.yAxis)) {
    right = 45;
  }
  if (top !== 'auto' && config.legend === false) {
    top = 16;
  }
  if (config.legend !== false) {
    const { position = 'top', attachLast = false } = config.legend || {};
    if (top !== 'auto' && position === 'bottom') {
      top = 10;
      if (config.topUnit) {
        top = 30;
      }
    }
    if (bottom !== 'auto' && position === 'bottom') {
      // 使用底部padding的位置放置 legend
      bottom = 60;
    }
    if (attachLast) {
      // 图例跟随
      right = 120;
    }
  }

  // X轴标题
  if (config.xAxis && config.xAxis.visible !== false && config.xAxis.alias && bottom !== 'auto') {
    bottom += 14;
  }

  // Y轴标题
  if (Array.isArray(config.yAxis)) {
    config.yAxis.forEach((axis: any, yIndex: number) => {
      if (yIndex === 0 && axis && axis.visible !== false && axis.alias && left !== 'auto') {
        left += 20;
      }
      if (yIndex !== 0 && axis && axis.visible !== false && axis.alias && right !== 'auto') {
        right += 20;
      }
    });
  } else if (
    config.yAxis &&
    config.yAxis.visible !== false &&
    config.yAxis.alias &&
    left !== 'auto'
  ) {
    left += 20;
  }

  return [top, right, bottom, left];
}

/**
 * 处理图表库中的默认padding值的通用函数
 *
 * @param {padding} padding 用户配置的padding值
 * @param {object} config 合并了默认配置后的最终配置项
 * @return
 * */
export function computePadding(padding: any, config: any) {
  if (padding) {
    return padding;
  }

  const configPadding = config.padding;
  // 取默认配置中的padding
  if (!Array.isArray(configPadding)) {
    console.error('Padding 必须为[paddingTop, paddingRight, paddingBottom, paddingLeft]格式');
  }
  let top = configPadding[0];
  let right = configPadding[1];
  let bottom = configPadding[2];
  let left = configPadding[3];

  if (right !== 'auto' && Array.isArray(config.yAxis)) {
    right = 45;
  }
  if (top !== 'auto' && config.legend === false) {
    top = 16;
  }
  if (config.legend !== false) {
    const { position = 'top', attachLast = false } = config.legend || {};
    if (top !== 'auto' && position === 'bottom') {
      top = 10;
      if (config.topUnit) {
        top = 30;
      }
    }
    if (bottom !== 'auto' && position === 'bottom') {
      // 使用底部padding的位置放置 legend
      bottom = 60;
    }
    if (attachLast) {
      // 图例跟随
      right = 120;
    }
  }

  // X轴标题
  if (config.xAxis && config.xAxis.visible !== false && config.xAxis.alias && bottom !== 'auto') {
    bottom += 14;
  }

  // Y轴标题
  if (Array.isArray(config.yAxis)) {
    config.yAxis.forEach((axis: any, yIndex: number) => {
      if (yIndex === 0 && axis && axis.visible !== false && axis.alias && left !== 'auto') {
        left += 20;
      }
      if (yIndex !== 0 && axis && axis.visible !== false && axis.alias && right !== 'auto') {
        right += 20;
      }
    });
  } else if (
    config.yAxis &&
    config.yAxis.visible !== false &&
    config.yAxis.alias &&
    left !== 'auto'
  ) {
    left += 20;
  }

  return [top, right, bottom, left];
}

export function adaptData(needAdapte = true, data, config) {
  const adaptData =
    needAdapte && config.dataType !== 'g2' ? highchartsDataToG2Data(data, config) : data;

  return adaptData;
}
