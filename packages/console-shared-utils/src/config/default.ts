export default {
  ConsoleLineChart: {},
  ConsoleBarChart: {},
  ConsoleComboChart: {},
  ConsolePieChart: {},
  ConsoleMinilineChart: {
    padding: [0, 0, 0, 0],
    xAxis: {},
    yAxis: {},
    tooltip: false,
    area: false,
    smooth: false,
    symbol: false,
    label: false,
  },
  ConsoleRadarChart: {
    xAxis: {
      label: {},
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null,
        },
      },
    },
    yAxis: {
      label: {
        offset: 8,
        textStyle: {
          textAlign: 'right',
        },
      },
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null,
        },
      },
    },
  },
  ConsoleFunnelChart: {},
  ConsoleDotChart: {},
  ConsoleRoseChart: {},
};
