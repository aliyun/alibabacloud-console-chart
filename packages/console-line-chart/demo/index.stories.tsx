import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Multi from './Multi';
import XLabel from './XLabel';
import XAxisTickInterval from './XAxisTickInterval';
import DoubleAxis from './DoubleAxis';
import Unit from './Unit';
import Smooth from './Smooth';
import Dot from './Dot';
import Stack from './Stack';
import XAxisAsync from './XAxisAsync';
import YAxisMin from './YAxisMin';
import GradualColor from './GradualColor';
import LegendClick from './LegendClick';

storiesOf('ConsoleLineChart', module)
  .add('基本折线图', () => <Basic />)
  .add('多组数据', () => <Multi />)
  .add('自定义X轴label', () => <XLabel />)
  .add('自定义x轴时间刻度间距', () => <XAxisTickInterval />)
  .add('X轴动态变化', XAxisAsync)
  .add('Y轴最小值与正整数', YAxisMin)
  .add('设置双轴', () => <DoubleAxis />)
  .add('配置顶部单位', () => <Unit />)
  .add('设置光滑曲线', () => <Smooth />)
  .add('线条带点', () => <Dot />)
  .add('面积堆栈图', () => <Stack />)
  .add('颜色渐变图', GradualColor)
  .add('图例点击控制', LegendClick)
