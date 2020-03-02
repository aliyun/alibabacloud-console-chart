import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';

storiesOf('ConsoleGagueChart', module)
  .add('基本用法', () => <Basic />)
