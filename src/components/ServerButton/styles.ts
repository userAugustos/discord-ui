import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome ? '#f7f448' : 'var(--primary)'};

  position: relative;
  cursor: pointer;
  
  > img{
    width: 90%;
    height: 90%;
    border-radius: inherit;
  }

  &::before{
    width: 9px;
    height: 9px;

    position: absolute;

    left: -1rem;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline': 'none')};
  }
  &::after{
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom:-4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);
    
    text-align:center;
    font-size: 12px;
    font-weight: bold;
    color: var(--withe);

   content: '${(props) => props.mentions && props.mentions}';
   display: ${(props) => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius .3s, background-color .3s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${(props) => props.isHome ? '#f7f448' : 'var(--discord)'};
  }
`;
