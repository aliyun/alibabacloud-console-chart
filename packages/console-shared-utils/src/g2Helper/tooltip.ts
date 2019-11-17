import { get, isFunction } from "../common/utils";

const sortFun = {
  // 升序
  asc(a: any, b: any) {
    return a.value - b.value;
  },
  // 降序
  desc(a: any, b: any) {
    return b.value - a.value;
  }
};

function tooltip(chart: any, config: any, configTooltip, specConfig = null) {
  if (configTooltip === false || get(configTooltip, "visible") === false) {
    chart.tooltip(false);
    return;
  }
  const finalConfigTooltip = Object.assign({}, configTooltip, specConfig);

  chart.tooltip(finalConfigTooltip);

  const sort = get(finalConfigTooltip, "sort");
  if (sort) {
    chart.on("tooltip:change", (ev: any) => {
      // 如果设置了合法的排序关键字，则开始排序
      if (isFunction(sort)) {
        ev.items.sort(sort);
      } else if (sortFun[sort]) {
        ev.items.sort(sortFun[sort]);
      }
    });
  }
}

export default tooltip;
