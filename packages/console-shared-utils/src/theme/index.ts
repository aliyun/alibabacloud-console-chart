import isPlainObject from 'lodash/isPlainObject';
import normalTheme from './normal';
import yunzhiTheme from './yunzhi';
import darkTheme from './dark';
import macaronsTheme from './macarons';
import { G2 } from '../common/utils';

const builtinG2Themes = {
  normal: normalTheme,
  yunzhi: yunzhiTheme,
  dark1: darkTheme,
  macarons: macaronsTheme,
};

export function setConsoleTheme(key?: string | object) {
  let theme = null;
  if (key) {
    if (typeof key === 'string') {
      theme = getConsoleTheme(key);
    } else {
      theme = key;
    }
  } else {
    theme = 'default';
  }
  if (!theme) {
    console.warn('主题设置错误');
    return;
  }

  // @ts-ignore
  G2.Global.setTheme(theme);
}

export function registerConsoleTheme(themeKey: string, obj: object) {
  if (!isPlainObject(obj)) {
    console.warn('主题包必须设置为普通javascript对象');
    return;
  }
  builtinG2Themes[themeKey] = obj;
  // @ts-ignore
  G2.Global.registerTheme(themeKey, obj);
}

export function getConsoleTheme(key?: string) {
  key = key || 'default';
  if (builtinG2Themes[key]) {
    return builtinG2Themes[key];
  } else if (['default', 'dark'].includes(key)) {
    return key;
  }
  return null;
}
