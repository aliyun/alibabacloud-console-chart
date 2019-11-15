import { isNumber, isFunction } from '../common/utils';

export default function(
  geom,
  config,
  sizeConfig,
  yField = 'type',
  callbackYField = 'x*y*type*facet'
) {
  if (!sizeConfig) {
    return;
  }
  if (Array.isArray(sizeConfig)) {
    if (isNumber(sizeConfig[0] && isNumber(sizeConfig[1]))) {
      geom.size(yField, sizeConfig);
    } else {
      geom.size(...sizeConfig);
    }
  } else if (isFunction(sizeConfig)) {
    geom.size(callbackYField, sizeConfig);
  } else {
    geom.size(sizeConfig);
  }
}
