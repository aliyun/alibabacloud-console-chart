import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';
import Polar from './Polar';

storiesOf('ConsoleArclinkChart', module)
  .add('基本用法', () => <Basic />)
  .add('极坐标体系', () => <Polar />)