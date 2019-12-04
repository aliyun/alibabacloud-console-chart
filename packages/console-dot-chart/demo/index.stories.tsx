import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './basic';

storiesOf('ConsoleDotChart', module)
  .add('基本用法', () => <Basic />);
