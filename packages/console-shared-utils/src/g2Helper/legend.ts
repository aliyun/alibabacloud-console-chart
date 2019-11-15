import { get } from '../common/utils';

export default function(chart, config, legendConfig, yField?: any) {
  let finalYField = yField || true;
  let finalLegendConfig = legendConfig;
  if (Array.isArray(legendConfig)) {
    finalYField = legendConfig[0];
    finalLegendConfig = legendConfig[1];
  }

  if (finalLegendConfig === false || get(finalLegendConfig, 'visible') === false) {
    if (Array.isArray(legendConfig)) {
      chart.legend(finalYField, false);
    } else {
      chart.legend(false);
    }
    return;
  }

  finalLegendConfig = Object.assign({}, { position: 'bottom-center' }, finalLegendConfig);

  chart.legend(yField, finalLegendConfig);
}
