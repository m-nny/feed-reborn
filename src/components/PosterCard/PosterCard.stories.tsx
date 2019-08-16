import * as React from 'react';
import { storiesOf } from '@storybook/react';

import PosterCard from './PosterCard';
import { posters } from '../../assets/index';

const style = {
  width: 400
}

storiesOf('PosterCard', module)
  .addDecorator((story) => <div style={{ ...style }}>{story()}</div>)
  .add('portait', () => <PosterCard src={posters.portrait} />)
  .add('square', () => <PosterCard src={posters.square} />)
  .add('album', () => <PosterCard src={posters.album} />)