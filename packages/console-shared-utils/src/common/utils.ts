import _get from 'lodash/get';
import _merge from 'lodash/merge';
import _isEmpty from 'lodash/isEmpty';
import _isNumber from 'lodash/isNumber';
import _isFunction from 'lodash/isFunction';
import throttle from 'lodash/throttle';

// @ts-ignore
import G2 from '@antv/g2';

export { G2, throttle };

const Util = G2.Util;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y; //  NaN == NaN
}

function length(obj) {
  if (Util.isArray(obj)) {
    return obj.length;
  } else if (Util.isObject(obj)) {
    return Object.keys(obj).length;
  }

  return 0;
}

export function get(object, path) {
  return _get(object, path);
}

export function merge(object: any, ...otherArgs: any[]): any {
  return _merge(object, ...otherArgs);
}

export function isEmpty(obj: any) {
  return _isEmpty(obj);
}

export function isNumber(obj: any) {
  return _isNumber(obj);
}

export function isFunction(obj: any) {
  return _isFunction(obj);
}

export function isNumeric(obj) {
  var realStringObj = obj && obj.toString();
  return !Array.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
}

// 只比较第一层的属性是否全等， 深层的对象不再继续比较
export function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  if (Util.isArray(objA) !== Util.isArray(objB)) {
    return false;
  }

  if (length(objA) !== length(objB)) {
    return false;
  }

  let ret = true;

  Util.each(objA, (v, k) => {
    if (!is(v, objB[k])) {
      ret = false;
      return ret;
    }
    return true;
  });

  return ret;
}
