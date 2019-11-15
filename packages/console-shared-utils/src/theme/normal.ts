// import { G2 } from 'bizcharts';
//
// const dataVTheme = G2.Util.deepMix({
//   defaultColor: 'black',
// }, G2.Theme);
//
// G2.Global.setTheme('dataVTheme');

const DEFAULT_COLOR = '#2196F3';
export const COLOR_PLATE_8 = [
  '#2196F3',
  '#2FC25B',
  '#FACC14',
  '#223273',
  '#8543E0',
  '#13C2C2',
  '#3436C7',
  '#F04864',
];
export const COLOR_PLATE_16 = [
  '#2196F3',
  '#2FC25B',
  '#FACC14',
  '#41D9C7',
  '#E6965C',
  '#223273',
  '#7564CC',
  '#8543E0',
  '#5C8EE6',
  '#13C2C2',
  '#5CA3E6',
  '#3436C7',
  '#B381E6',
  '#F04864',
  '#D598D9',
];
export const COLOR_PLATE_24 = [
  '#2196F3',
  '#2FC25B',
  '#13C2C2',
  '#66B5FF',
  '#41D9C7',
  '#6EDB8F',
  '#9AE65C',
  '#FACC14',
  '#E6965C',
  '#57AD71',
  '#F44336',
  '#738AE6',
  '#7564CC',
  '#8543E0',
  '#A877ED',
  '#5C8EE6',
  '#70E0E0',
  '#5CA3E6',
  '#3436C7',
  '#8082FF',
  '#DD81E6',
  '#F04864',
  '#FA7D92',
  '#D598D9',
];
export const COLOR_PIE = [
  '#2196F3',
  '#13C2C2',
  '#2FC25B',
  '#FACC14',
  '#F04864',
  '#8543E0',
  '#3436C7',
  '#223273',
];
export const COLOR_PIE_16 = [
  '#2196F3',
  '#73C9E6',
  '#13C2C2',
  '#6CD9B3',
  '#2FC25B',
  '#9DD96C',
  '#FACC14',
  '#E6965C',
  '#F04864',
  '#D66BCA',
  '#8543E0',
  '#8E77ED',
  '#3436C7',
  '#737EE6',
  '#223273',
  '#7EA2E6',
];
export const COLOR_PLATE_10 = [
  '#2196F3',
  '#4CAF50',
  '#00BCD4',
  '#FFCE2C',
  '#F44336',
  '#FF9800',
  '#FF5722',
  '#9C27B0',
  '#03A9F4',
  '#E91E63',
];
export const COLOR_PLATE_10_GRADUAL = [
  'l (90) 0:#2196F3 1:#90CAF9',
  'l (90) 0:#00BCD4 1:#80DEEA',
  'l (90) 0:#4CAF50 1:#A5D6A7',
  'l (90) 0:#FFCE2C 1:#FFF59D',
  'l (90) 0:#F44336 1:#EF9A9A',
  'l (90) 0:#FF9800 1:#FFCC80',
  'l (90) 0:#FF5722 1:#FFAB91',
  'l (90) 0:#9C27B0 1:#CE93D8',
  'l (90) 0:#03A9F4 1:#81D4FA',
  'l (90) 0:#E91E63 1:#F48FB1',
];

export const COLOR_PLATE_1VIEW = ['#2196F3', '#4CAF50', '#FF9800', '#9E9E9E', '#9C27B0'];
export const COLOR_PLATE_2VIEW = ['#00BCD4', '#F44336', '#03A9F4', '#CDDC39', '#009688'];
export const COLOR_PLATE_3VIEW = ['#FFCE2C', '#FF5722', '#3F51B5', '#E91E63', '#FFC107'];

const FONT_FAMILY = 'Roboto, PingFangSC-Light';
// tooltip's dom element classname
const TOOLTIP_CONTAINER_CLASS = 'g2-tooltip';
const TOOLTIP_TITLE_CLASS = 'g2-tooltip-title';
const TOOLTIP_LIST_CLASS = 'g2-tooltip-list';
const TOOLTIP_LIST_ITEM_CLASS = 'g2-tooltip-list-item';
const TOOLTIP_MARKER_CLASS = 'g2-tooltip-marker';

export default {
  background: {
    fill: '#ffffff',
  },
  defaultColor: DEFAULT_COLOR, // default theme color
  plotCfg: {
    padding: [20, 20, 95, 80],
  },
  fontFamily: FONT_FAMILY,
  defaultLegendPosition: 'bottom',
  colors: COLOR_PLATE_8,
  colors_16: COLOR_PLATE_16,
  colors_24: COLOR_PLATE_24,
  colors_pie: COLOR_PIE,
  colors_pie_16: COLOR_PIE_16,
  shapes: {
    point: [
      'hollowCircle',
      'hollowSquare',
      'hollowDiamond',
      'hollowBowtie',
      'hollowTriangle',
      'hollowHexagon',
      'cross',
      'tick',
      'plus',
      'hyphen',
      'line',
    ],
    line: ['line', 'dash', 'dot'],
    area: ['area'],
  },
  markerRadius: 4,
  sizes: [1, 10],
  opacities: [0.1, 0.9],
  axis: {
    top: {
      position: 'top',
      title: null,
      label: {
        offset: 14,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle',
        },
        autoRotate: true,
      },
      line: { stroke: '#c4d9e9', lineWidth: 1 },
      tickLine: { stroke: '#c4d9e9', lineWidth: 1, length: 3 },
    },
    bottom: {
      position: 'bottom',
      title: null,
      label: {
        offset: 15,
        autoRotate: true,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle',
        },
      },
      line: { stroke: '#c4d9e9', lineWidth: 1 },
      tickLine: { stroke: '#c4d9e9', lineWidth: 1, length: 3 },
    },
    left: {
      position: 'left',
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle',
        },
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: '#c4d9e9',
          lineWidth: 1,
          lineDash: [4, 4],
        },
        hideFirstLine: true,
      },
    },
    right: {
      position: 'right',
      title: null,
      label: {
        offset: 12,
        autoRotate: true,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          lineHeight: 20,
          textBaseline: 'middle',
        },
      },
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          stroke: '#c4d9e9',
          lineWidth: 1,
          lineDash: [4, 4],
        },
        hideFirstLine: true,
      },
    },
    circle: {
      zIndex: 1,
      title: null,
      label: {
        offset: 12,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          lineHeight: 20,
        },
      },
      line: {
        lineWidth: 1,
        stroke: '#c4d9e9',
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#c4d9e9',
        length: 3,
      },
      grid: {
        lineStyle: {
          stroke: '#c4d9e9',
          lineWidth: 1,
          lineDash: [4, 4],
        },
        hideFirstLine: true,
      },
    },
    radius: {
      zIndex: 0,
      label: {
        offset: 12,
        textStyle: {
          fill: '#3f536e',
          fontSize: 12,
          textBaseline: 'middle',
          lineHeight: 20,
        },
      },
      line: {
        lineWidth: 1,
        stroke: '#c4d9e9',
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#c4d9e9',
        length: 3,
      },
      grid: {
        lineStyle: {
          stroke: '#c4d9e9',
          lineWidth: 1,
          lineDash: [4, 4],
        },
        type: 'circle',
      },
    },
    helix: {
      grid: null,
      label: null,
      title: null,
      line: {
        lineWidth: 1,
        stroke: '#c4d9e9',
      },
      tickLine: {
        lineWidth: 1,
        length: 3,
        stroke: '#c4d9e9',
      },
    },
  },
  label: {
    offset: 20,
    textStyle: {
      fill: '#3f536e',
      fontSize: 12,
      textBaseline: 'middle',
    },
  },
  treemapLabels: {
    offset: 10,
    textStyle: {
      fill: '#fff',
      fontSize: 12,
      textBaseline: 'top',
      fontStyle: 'bold',
    },
  },
  innerLabels: {
    textStyle: {
      fill: '#fff',
      fontSize: 12,
      textBaseline: 'middle',
    },
  },
  // 在theta坐标系下的饼图文本内部的样式
  thetaLabels: {
    labelLine: {
      lineWidth: 1,
    },
    labelHeight: 14,
    offset: 30,
  },
  legend: {
    right: {
      position: 'right',
      layout: 'vertical',
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: '#3f536e',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: '#c4d9e9',
    },
    left: {
      position: 'left',
      layout: 'vertical',
      itemMarginBottom: 8,
      width: 16,
      height: 156,
      title: null,
      textStyle: {
        fill: '#3f536e',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: '#c4d9e9',
    },
    top: {
      position: 'top',
      offset: 6,
      layout: 'horizontal',
      title: null,
      itemGap: 10,
      width: 156,
      height: 16,
      textStyle: {
        fill: '#3f536e',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20,
      }, // 图例项文本的样式
      unCheckColor: '#c4d9e9',
    },
    bottom: {
      position: 'bottom',
      offset: 58,
      layout: 'horizontal',
      title: null,
      itemGap: 24,
      width: 156,
      height: 16,
      textStyle: {
        fill: '#3f536e',
        fontSize: 12,
        textAlign: 'start',
        textBaseline: 'middle',
        lineHeight: 20,
      },
      unCheckColor: '#c4d9e9',
    },
    html: {
      'g2-legend': {
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        overflow: 'auto',
        fontSize: '12px',
        fontFamily:
          '"-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, "sans-serif"',
        lineHeight: '20px',
        color: '#8C8C8C',
      },
      'g2-legend-title': {
        marginBottom: '4px',
      },
      'g2-legend-list': {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      },
      'g2-legend-list-item': {
        cursor: 'pointer',
        marginBottom: '5px',
        marginRight: '24px',
      },
      'g2-legend-marker': {
        width: '9px',
        height: '9px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '8px',
        verticalAlign: 'middle',
      },
    },
  },
  tooltip: {
    useHtml: true,
    crosshairs: false,
    offset: 24,
    // css style for tooltip
    [`${TOOLTIP_CONTAINER_CLASS}`]: {
      position: 'absolute',
      visibility: 'hidden',
      zIndex: 999,
      transition:
        'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      backgroundColor: 'white',
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.15)',
      borderRadius: 'none',
      color: '#777f84',
      fontSize: '12px',
      fontFamily: FONT_FAMILY,
      lineHeight: '20px',
      padding: '12px 15px',
    },
    [`${TOOLTIP_TITLE_CLASS}`]: {
      marginBottom: '10px',
      color: '#3f536e',
    },
    [`${TOOLTIP_LIST_CLASS}`]: {
      marginTop: '6px',
      listStyleType: 'none',
      padding: 0,
    },
    [`${TOOLTIP_LIST_ITEM_CLASS}`]: {
      marginBottom: '4px',
      color: '#3f536e',
    },
    [`${TOOLTIP_MARKER_CLASS}`]: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: '1px solid #fff',
      display: 'inline-block',
      marginRight: '8px',
    },
  },
  tooltipCrosshairsRect: {
    type: 'rect',
    style: {
      fill: '#CCD6EC',
      opacity: 0.3,
    },
  },
  tooltipCrosshairsLine: {
    style: {
      stroke: 'rgba(0, 0, 0, 0.25)',
      lineWidth: 1,
    },
  },
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4,
    },
    hollowPoint: {
      fill: '#fff',
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3,
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
    },
    pie: {
      lineWidth: 1,
      stroke: '#fff',
    },
    hollowInterval: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.3,
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1,
    },
    hollowPolygon: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    hollowArea: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1,
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 2,
      fill: null,
    },
  },
  guide: {
    line: {
      lineStyle: {
        stroke: DEFAULT_COLOR,
        lineDash: [0, 2, 2],
        lineWidth: 1,
      },
      text: {
        position: 'end',
        autoRotate: true,
        style: {
          fill: '#3f536e',
          fontSize: 12,
          textAlign: 'center',
        },
      },
    },
    text: {
      style: {
        fill: '#3f536e',
        fontSize: 12,
        textBaseline: 'middle',
        textAlign: 'start',
      },
    },
    region: {
      style: {
        lineWidth: 0,
        fill: '#000',
        fillOpacity: 0.04,
      },
    },
    html: {
      alignX: 'middle',
      alignY: 'middle',
    },
  },
  pixelRatio: null,
};
