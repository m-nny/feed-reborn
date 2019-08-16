import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Feed from './Feed';
import { posters } from '../../assets/index';

export const content = Object.values(posters);

storiesOf('Feed', module)
  .add('default', () => <Feed data={content} />)
