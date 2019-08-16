import * as React from 'react';
import block from 'bem-cn';

import './InfoCard.css';
import PosterCard from '../PosterCard/PosterCard';
import IEventInfo from '../../models/EventInfo';
import InfoHeader from './InfoHeader/InfoHeader';

type Props = {
  data: IEventInfo
};

const b = block('info-card');

const InfoCard: React.FC<Props> = ({ data }) => (
  <div className={b()}>
    <div className={b('poster')}>
      <PosterCard src={data.poster_url} />
    </div>
    <div className={b('info')}>
      <InfoHeader
        logo={data.author.logo_url}
        title={data.author.name}
        subtitle={`${data.location}, ${data.date}`}
      />
      <div className={b('description')}>{data.description}</div>
    </div>
  </div>
);

export default InfoCard;