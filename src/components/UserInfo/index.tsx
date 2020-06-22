import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from './style';

interface Props{
  userName: string;
}

const UserInfo: React.FC<Props> = ({userName}) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{userName}</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;