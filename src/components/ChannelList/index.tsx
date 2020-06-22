import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './style';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="batepapo-geral" />
      <ChannelButton channelName="CSzada" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="5 min de soco" />
      <ChannelButton channelName="LUL-games" />
    </Container>
  );
};

export default ChannelList;