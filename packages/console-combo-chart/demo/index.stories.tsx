import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import YAxisColor from './YAxisColor';
import SingleYAxis from './SingleYAxis';
import Smooth from './Smooth';
import Stack from './Stack';
import Color from './Color';
import Click from './Click';

storiesOf('ConsoleComboChart', module)
  .add('基础混合图', () => <Basic />)
  .add('纵坐标设置颜色', () => <YAxisColor />)
  .add('单个纵坐标', () => <SingleYAxis />)
  .add('光滑曲线', () => <Smooth />)
  .add('堆叠图', () => <Stack />)
  .add('自定义颜色', () => <Color />)
  .add('点击事件', () => <Click />);
