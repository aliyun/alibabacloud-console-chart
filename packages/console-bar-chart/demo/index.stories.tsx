import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './basic';
import Stack from './stack';

storiesOf('ConsoleBarChart', module)
  .add('基本用法', () => <Basic />)
  .add('面积图', () => <Stack />);
