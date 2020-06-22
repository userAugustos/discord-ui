import React from 'react';

import { Container, Avatar, Message, Header, Content, Mention } from './style';
export { Mention } from './style'; 

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  mentioned: string;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  mentioned
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{hasMention ? <> <Mention>{mentioned}</Mention> {content} </> : <> {content} </> }</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;