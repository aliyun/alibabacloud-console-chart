import { get, isFunction } from '../common/utils';

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
  if (get(finalLegendConfig, 'tip')) {
    const dom = get(chart, '_attrs.canvas._cfg.canvasDOM');
    dom.title = null;
    const onHover = event => {
      const value: string = get(event, 'item.value');
      let text: string = value;
      if (get(config, 'legend.tipFormatter') && isFunction(config.legend.tipFormatter)) {
        text = config.legend.tipFormatter(get(event, 'item.value'));
      } else if (get(config, 'legend.itemFormatter') && isFunction(config.legend.itemFormatter)) {
        text = config.legend.itemFormatter(get(event, 'item.value'));
      }
      dom.title = text;
    };
    if (Array.isArray(legendConfig)) {
      chart.legend(finalYField, { onHover });
    } else {
      chart.legend({ onHover });
    }
  }

  finalLegendConfig = Object.assign({}, { position: 'bottom-center' }, finalLegendConfig);

  chart.legend(yField, finalLegendConfig);
}
