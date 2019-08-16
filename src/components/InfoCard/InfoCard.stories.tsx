import * as React from 'react';
import { storiesOf } from "@storybook/react";

import InfoCard from "./InfoCard";
import IEventInfo from '../../models/EventInfo';
import { posters, logos } from '../../assets/index';

const anInfo: IEventInfo = {
  author: {
    name: 'Acoustic Night',
    logo_url: logos.acoustic_night,
  },
  description:
    'Всем привет! Как ваши выходные? Готовы к новой неделе?\n\n' +
    'Ведь уже в среду, 31 октября, состоится наш Acoustic Night😍\n\n' +
    'Готовьте свои пледы для уютной и теплой атмосферы в Ballroom Right в 19:00 вечера!\n\n' +
    'Вас ждет приятный вечер музыки, где вы услышите различные каверы,но самое главное, на концерте, вы станете первыми слушателями авторских песен😱 \n' +
    'Приходите и поддержите своих друзей, знакомых и просто талантливых студентов!\n\n' +
    'Не забывайте ставить лайки,\n' +
    'репосты так же приветствуются😉\n' +
    'Подписывайтесь так же на нас во всех соц сетях!\n',
  date: '19:00 31 Oct 2019',
  location: 'Ballroom Right',
  poster_url: posters.acoustic_night,
}

storiesOf('InfoCard', module)
  .addDecorator(story => <div style={{backgroundColor: '#E5E5E5', padding: 20}}>{story()}</div>)
  .add('Acoustic Night', () => <InfoCard data={anInfo} />)
