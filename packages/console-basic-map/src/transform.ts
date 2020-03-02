import { isArray, isString } from '@antv/util';

import { getField } from './option-parser';

const DEFAULT_OPTIONS: Partial<Options> = {
  // field: 'name', // required
  // geoView: view, // required
  // geoDataView: view, // alias
  as: ['_x', '_y'],
};
export interface Options {
  field: string;
  geoDataView: any;
  as?: [string, string];
}

function geoFeatureByName(data: any, name: string): any {
  const rows = data;
  let result;
  rows.some((feature) => {
    if (feature.name === name) {
      result = feature;
      return true;
    }
    return false;
  });
  return result;
}

function transform(view: any, options: Options): void {
  options = Object.assign({} as Options, DEFAULT_OPTIONS, options);
  const field = getField(options);
  // @ts-ignore
  let geoView = options.geoView || options.geoDataView; // alias
  if (isString(geoView)) {
    geoView = view.dataSet.getView(geoView);
  }
  const as = options.as;
  if (!isArray(as) || as.length !== 2) {
    throw new TypeError('Invalid as: it must be an array with 2 strings (e.g. [ "x", "y" ])!');
  }
  const lonField = as[0];
  const latField = as[1];
  view.forEach((row) => {
    const feature = geoFeatureByName(geoView, row[field]);
    if (feature) {
      if (geoView._projectedAs) {
        row[lonField] = feature[geoView._projectedAs[0]];
        row[latField] = feature[geoView._projectedAs[1]];
      } else {
        row[lonField] = feature.longitude;
        row[latField] = feature.latitude;
      }
    }
  });
}

export default transform;
