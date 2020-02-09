import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';

storiesOf('ConsoleArclinkChart', module)
  .add('基本用法', () => <Basic />)