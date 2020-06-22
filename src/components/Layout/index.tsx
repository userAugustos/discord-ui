import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName name='Felipe server'/>
      <ChannelInfo ChannelName='batepapo-geral' description='aqui vcs falam de tudo'/>
      <ChannelList />
      <UserInfo userName='userAugustos'/>
      <UserList />
      <ChannelData />
    </Grid>
  );
};

export default Layout;
