import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Left from './Left';
import Horizontal from './Horizontal';
import Pyramid from './Pyramid';
import PyramidHor from './PyramidHor';

storiesOf('ConsoleFunnelChart', module)
  .add('基本用法', () => <Basic />)
  .add('居左', () => <Left />)
  .add('横向居中', () => <Horizontal />)
  .add('金字塔', () => <Pyramid />)
  .add('横向金字塔', () => <PyramidHor />);
