import { get, isFunction } from '../common/utils';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

function label(
  geom: any,
  config: any,
  labelConfig,
  yField = 'y',
  callbackYField = 'x*y*type*facet',
  extras = {}
) {
  if (!labelConfig || get(labelConfig, 'visible') === false) {
    return;
  }

  if (isString(labelConfig)) {
    geom.label(labelConfig);
  } else if (isPlainObject(labelConfig)) {
    const newLabelConfig = Object.assign({}, labelConfig);
    const formatter = newLabelConfig.formatter;
    if (formatter) {
      newLabelConfig.formatter = (...args) => formatter(...args, extras);
    }
    geom.label(yField, newLabelConfig);
  } else if (isFunction(labelConfig)) {
    const newFunc = function(...args) {
      return labelConfig(...args, extras);
    };
    geom.label(callbackYField, newFunc);
  } else if (Array.isArray(labelConfig)) {
    let finalField = null;
    let finalCallback = null;
    let finalCfg = null;
    labelConfig.forEach(v => {
      if (isString(v)) {
        finalField = v;
      } else if (isPlainObject(v)) {
        finalCfg = Object.assign({}, v);
      } else if (isFunction(v)) {
        finalCallback = v;
      }
    });
    finalField = finalField ? finalField : callbackYField;
    if (finalCallback) {
      geom.label(finalField, (...args) => finalCallback(...args, extras), finalCfg);
    } else {
      if (finalCfg && finalCfg.formatter) {
        const formatter = finalCfg.formatter;
        finalCfg.formatter = (...args) => formatter(...args, extras);
      }

      geom.label(finalField, finalCfg);
    }
  }
}

export default label;
