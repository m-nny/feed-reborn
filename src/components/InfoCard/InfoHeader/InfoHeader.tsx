import * as React from 'react';
import block from 'bem-cn';

import './InfoHeader.css';

type Props = {
  logo: string,
  title: string,
  subtitle: string
}

const b = block('info-header');

const InfoHeader: React.FC<Props> = ({ logo, title, subtitle }) => (
  <div className={b()}>
    <div className={b('logo')}>
      <img src={logo} alt='' />
    </div>
    <div className={b('content')}>
      <div className={b('title')}>{title}</div>
      <div className={b('subtitle')}>{subtitle}</div>
    </div>
  </div>
);

export default InfoHeader;