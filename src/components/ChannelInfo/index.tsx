import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './style';

interface Props {
  ChannelName: string;
  description: string
}
const ChannelInfo: React.FC<Props> = ({ChannelName, description}) => {
  return (
    <Container> 
      <HashtagIcon />
      <Title>{ChannelName}</Title>
      <Separator />

      <Description>{description}</Description>
    </Container>
  );
};

export default ChannelInfo;