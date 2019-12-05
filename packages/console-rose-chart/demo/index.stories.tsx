import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Axis from './Axis';
import SingleColor from './SingleColor';

storiesOf('ConsoleRoseChart', module)
  .add('基本玫瑰图', () => <Basic />)
  .add('带坐标轴', () => <Axis />)
  .add('单色玫瑰图', () => <SingleColor />);
