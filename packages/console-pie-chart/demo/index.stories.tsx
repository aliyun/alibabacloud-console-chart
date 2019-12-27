import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Label from './Label';
import Tooltip from './Tooltip';
import Legend from './Legend';
import Circle from './Circle';
import CircleGuide from './CircleGuide';
import Select from './Select';
import SelectCircleGuide from './SelectCircleGuide';
import ComplexTooltip from './ComplexTooltip';

storiesOf('ConsolePieChart', module)
  .add('基本用法', () => <Basic />)
  .add('带label指标', () => <Label />)
  .add('自定义tooltip', () => <Tooltip />)
  .add('配置legend', () => <Legend />)
  .add('基础环状图', () => <Circle />)
  .add('环状带Guide', () => <CircleGuide />)
  .add('选中状态', () => <Select />)
  .add('根据选中状态更新环内Guide', () => <SelectCircleGuide />)
  .add('复杂Tooltip', () => <ComplexTooltip />);
