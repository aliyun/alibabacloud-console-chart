import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import YAxisColor from './YAxisColor';

storiesOf('ConsoleComboChart', module)
  .add('基础混合图', () => <Basic />)
  .add('纵坐标设置颜色', () => <YAxisColor />);
