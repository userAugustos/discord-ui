import React, {useState, ChangeEvent, FormEvent} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './style';
import ChannelMessage from '../ChannelMessage';

interface message{
  id: number;
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  mentioned: string;
}

const ChannelData: React.FC = () => {
  const [messages, setMessages] = useState<message[]>([
    {id: 1, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: true, isBot: false, mentioned: '@Marco'},
    {id: 2, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: false, isBot: true, mentioned: ''},
    {id: 3, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: true, isBot: false, mentioned: '@Marco'},
    {id: 4, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: true, isBot: false, mentioned: '@Marco'},
    {id: 5, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: true, isBot: false, mentioned: '@Marco'},
    {id: 6, author: 'Felipe Augustos', date: 'algo', content: 'minha mensagem teste', hasMention: true, isBot: false, mentioned: '@Marco'},
  ]);
  const [messageContent, setMessageContent] = useState({
    userName: '',
    content: ''
  });

  function handleMessages(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setMessageContent({
      userName: name,
      content: value
    });
  }

  function submitMessage(event: FormEvent) {
    event.preventDefault();

    setMessages([...messages, { id: Math.random(), author: messageContent.userName, date: '23/23/2009', content: messageContent.content, hasMention: false, isBot: false, mentioned: '' }]);

    setMessageContent({
      userName: messageContent.userName,
      content: ''
    });
  }

  return(
    <Container>
      <Messages>
        {messages.map(message => (
          <ChannelMessage key={message.id}
            author={message.author} date={message.date} 
            content={message.content} hasMention={message.hasMention} 
            isBot={message.isBot} mentioned={message.mentioned}
          />
        ))}
      </Messages>
      
      <InputWrapper>
        <form onSubmit={submitMessage} id="formMessage">
          <Input type="text" placeholder={`Conversando em $nomecanal`} onChange={handleMessages} name="userAugustos" value={messageContent.content}/>
          <InputIcon />
        </form>
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;