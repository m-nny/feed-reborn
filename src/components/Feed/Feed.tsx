import * as React from 'react';
import { block } from 'bem-cn';

import StackGrid from 'react-stack-grid';

import './Feed.css';
import PosterCard from './PosterCard/PosterCard';

type Props = {
  images: string[]
};

const b = block('feed');

const Feed: React.FC<Props> = ({ images }) => (
  <StackGrid className={b()} columnWidth={300} gutterWidth={0}>
    {images.map((image_url) => (
      <PosterCard src={image_url} />
    ))}
  </StackGrid>
);

export default Feed;