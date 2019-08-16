import * as React from 'react';
import { storiesOf } from '@storybook/react';
import PosterCard from './PosterCard';


export const images = {
  portrait: require('../../../../assets/posters/moldanazar.jpg'),
  square: require('../../../../assets/posters/golden.middle.jpg'),
  album: require('../../../../assets/posters/equality.jpg'),
};

const style = {
  width: 400
}

storiesOf('Feed/PosterCard', module)
  .addDecorator((story) => <div style={{ ...style }}>{story()}</div>)
  .add('portait', () => <PosterCard src={images.portrait} />)
  .add('square', () => <PosterCard src={images.square} />)
  .add('album', () => <PosterCard src={images.album} />)