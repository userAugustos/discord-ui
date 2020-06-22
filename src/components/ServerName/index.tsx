import React from 'react';

import { Container, Title, ExpandIcon } from './style';

interface Props {
  name: string
}
const ServerName: React.FC<Props> = ({name}) => {
  return (
    <Container> 
      <Title>{name}</Title>

      <ExpandIcon />
    </Container>
  );
};

export default ServerName;