import * as React from 'react';
import { block } from 'bem-cn';
import StackGrid from 'react-stack-grid';

import './Feed.css';
import PosterCard from '../PosterCard/PosterCard';

type Props = {
  data: string[]
};

const b = block('feed');

const Feed: React.FC<Props> = ({ data }) => (
  <StackGrid className={b()}
    columnWidth={300}
    gutterWidth={20}
    gutterHeight={20}
    monitorImagesLoaded
  >
    {data.map((image_url) => (
      <PosterCard key={image_url} src={image_url} />
    ))}
  </StackGrid>
);

export default Feed;