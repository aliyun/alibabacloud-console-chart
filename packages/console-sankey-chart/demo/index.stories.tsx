import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';

storiesOf('ConsoleSankeyChart', module)
  .add('基本桑基图', () => <Basic />);
