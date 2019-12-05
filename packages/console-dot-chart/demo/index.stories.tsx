import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Multi from './Multi';
import Size from './Size';
import Disturbance from './Disturbance';

storiesOf('ConsoleDotChart', module)
  .add('基本散点图', () => <Basic />)
  .add('多组数据', () => <Multi />)
  .add('自定义点大小', () => <Size />)
  .add('扰动图', () => <Disturbance />);
