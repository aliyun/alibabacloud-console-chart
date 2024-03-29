import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Label from './Label';
import Tooltip from './Tooltip';
import Legend from './Legend';
import LegendRight from './LegendRight';
import LegendTip from './LegendTip';
import Circle from './Circle';
import CircleGuide from './CircleGuide';
import Select from './Select';
import SelectCircleGuide from './SelectCircleGuide';
import ComplexTooltip from './ComplexTooltip';
import SingleColors from './SingleColors';
import MultiColors from './MultiColors';
import CircleSlice from './CircleSlice';

storiesOf('ConsolePieChart', module)
  .add('基本用法', () => <Basic />)
  .add('带label指标', () => <Label />)
  .add('自定义tooltip', () => <Tooltip />)
  .add('配置legend', () => <Legend />)
  .add('legend在右边', () => <LegendRight />)
  .add('legend tip', () => <LegendTip />)
  .add('单色', () => <SingleColors />)
  .add('指定颜色', () => <MultiColors />)
  .add('基础环状图', () => <Circle />)
  .add('环间距', () => <CircleSlice />)
  .add('环状带Guide', () => <CircleGuide />)
  .add('选中状态', () => <Select />)
  .add('根据选中状态更新环内Guide', () => <SelectCircleGuide />)
  .add('复杂Tooltip', () => <ComplexTooltip />);
