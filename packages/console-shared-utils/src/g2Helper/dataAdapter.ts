import { isNumeric } from '../common/utils';

const yValue = val => (isNumeric(val) ? +val : null);

function dataAdapter(data: any, config: any) {
  if (!data) {
    return [];
  }
  if (!Array.isArray(data)) {
    data = [data];
  }
  const newData: any[] = [];
  if (Array.isArray(config.yAxis)) {
    data.forEach((oneData: any) => {
      if (!oneData || !Array.isArray(oneData.data)) {
        return;
      }

      const { name: dataName, yAxis: yIndex = 0, visible, ...groupExtra } = oneData;

      oneData.data.forEach((d: any, i: number) => {
        if (Array.isArray(d)) {
          const [x, y, ...extra] = d;
          newData.push({
            x,
            [`y${yIndex}`]: yValue(y),
            extra,
            groupExtra,
            visible,
            type: dataName,
          });
        } else if (config.xAxis && config.xAxis.categories && config.xAxis.categories[i]) {
          const x = config.xAxis.categories[i];
          const y = isNaN(d) ? d[0] : d;
          newData.push({
            x,
            [`y${yIndex}`]: yValue(y),
            extra: [],
            groupExtra,
            visible,
            type: dataName,
          });
        } else {
          const { x, y, ...extra } = d;
          newData.push({
            x,
            [`y${yIndex}`]: yValue(y),
            extra,
            groupExtra,
            visible,
            type: dataName,
          });
        }
      });
    });
  } else {
    data.forEach((oneData: any) => {
      if (!oneData || !Array.isArray(oneData.data)) {
        return;
      }

      const { name: dataName, facet, dodge, visible, ...groupExtra } = oneData;

      oneData.data.forEach((d: any, i: number) => {
        if (Array.isArray(d)) {
          const [x, y, ...extra] = d;
          newData.push({
            x,
            y: yValue(y),
            extra,
            groupExtra,
            facet,
            dodge,
            visible,
            type: dataName,
          });
        } else if (config.xAxis && config.xAxis.categories && config.xAxis.categories[i]) {
          const x = config.xAxis.categories[i];
          const y = isNaN(d) ? d[0] : d;
          newData.push({
            x,
            y: yValue(y),
            extra: [],
            groupExtra,
            facet,
            dodge,
            visible,
            type: dataName,
          });
        } else {
          const { x, y, ...extra } = d;
          newData.push({
            x,
            y: yValue(y),
            extra,
            groupExtra,
            facet,
            dodge,
            visible,
            type: dataName,
          });
        }
      });
    });
  }
  return newData;
}

export default dataAdapter;
