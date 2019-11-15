import { get, isFunction } from '../common/utils';

const sortFun = {
  // 升序
  asc(a: any, b: any) {
    return a.value - b.value;
  },
  // 降序
  desc(a: any, b: any) {
    return b.value - a.value;
  },
};

function tooltip(chart: any, config: any, configTooltip, specConfig = null) {
  if (configTooltip === false || get(configTooltip, 'visible') === false) {
    chart.tooltip(false);
    return;
  }
  const finalConfigTooltip = Object.assign({}, configTooltip, specConfig);

  chart.tooltip(finalConfigTooltip);

  const sort = get(finalConfigTooltip, 'sort');
  if (sort) {
    chart.on('tooltip:change', (ev: any) => {
      // 如果设置了合法的排序关键字，则开始排序
      if (isFunction(sort)) {
        ev.items.sort(sort);
      } else if (sortFun[sort]) {
        ev.items.sort(sortFun[sort]);
      }

      // // 格式化标题
      // if (titleFormatter) {
      //   ev.items[0].title = titleFormatter(ev.items[0].title, ev.items);
      // }

      // 对每一项格式化 名字 和 值
      //   ev.items.forEach((item: any, index: number) => {
      //     const raw = getRawData(config, data, item);

      //     if (valueFormatter) {
      //       item.value = valueFormatter(item.value, raw, index, ev.items);
      //     }
      //     if (nameFormatter) {
      //       item.name = nameFormatter(item.name, raw, index, ev.items);
      //     }
      //   });
    });
  }
}

export default tooltip;
