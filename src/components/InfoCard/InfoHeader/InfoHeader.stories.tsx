import * as React from 'react';
import { storiesOf } from '@storybook/react';
import InfoHeader from './InfoHeader';
import { logos } from '../../../assets/index';


const an_info = {
  logo: logos.acoustic_night,
  title: 'Acoustic Night',
  subtitle: 'Ballroom Right, 19:00 9 Oct 2019',
};

storiesOf('InfoCard/InfoHeader', module)
  .addDecorator((story) => <div style={{ padding: 20 }}>{story()}</div>)
  .add('Acoustic Night', () => <InfoHeader {...an_info} />)