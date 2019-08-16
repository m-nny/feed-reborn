import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Feed from './Feed';
import { images } from './PosterCard/PosterCard.stories';

const content = Object.values(images);

storiesOf('Feed', module)
  .add('default', () => <Feed images={content} />)
