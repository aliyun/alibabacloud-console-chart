export interface MetaDataItem {
  key: string;
  alias: string;
  axis: string;
  tickCount?: number;
  showMax?: boolean;
}

export interface IntervalChartConfig {
  type: any;
  transpose: boolean;
}

export interface LineChartConfig {
  shape: string;
  showPoint: boolean;
}

export interface AreaChartConfig {
  showLine: boolean; // 展示线条
  showPoint: boolean; // 展示点
}

export interface AreaStackChartConfig {
  showPoint: boolean;
  showLine: boolean;
  attachLast: boolean; // 图例跟随（一般在右侧显示）
  type: 'value' | 'percent'; // value || percent
  showCount: true; // 当type为value时，展示“总计”
}

export interface ConsoleChartProps {
  data: any[];
  metaData?: MetaDataItem[];
  chartConfig?: IntervalChartConfig | LineChartConfig | AreaChartConfig;
}

export interface IProps {
  width?: number;
  height?: number;
  config?: any;
  data?: any;
  event?: object;
  forceFit?: boolean;
  customChartProcess?: any;
  padding?: any;
  changeConfig?: any;
  onGetG2Instance?: Function;
  className?: any;
  style?: any;
  children?: any;
  animate?: boolean;
  forceUpdate?: boolean;
}
