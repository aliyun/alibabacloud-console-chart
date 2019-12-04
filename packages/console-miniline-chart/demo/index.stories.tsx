import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './basic';

storiesOf('ConsoleMinilineChart', module)
  .add('基本用法', () => <Basic />);
