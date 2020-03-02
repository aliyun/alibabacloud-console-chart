import { isString, deepMix } from '@antv/util';

export default (data: any) => {
  let view: any;

  view = data;

  if (!view) {
    throw new TypeError('Invalid dataView');
  }
  return deepMix([], view.rows);
};
