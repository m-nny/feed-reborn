import * as React from 'react';
import { block } from 'bem-cn';

import './PosterCard.css';

type Props = {
  src: string
};

const b = block('poster-card');

const PosterCard: React.FC<Props> = ({ src }) => (
  <figure className={b('')}>
    <img className={b('image')} src={src} />
  </figure>
);

export default PosterCard;