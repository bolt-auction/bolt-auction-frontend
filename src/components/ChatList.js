import React from 'react';
import styled from 'styled-components';

import * as Styled from '../styles/Styled';

const ChatNav = styled.nav`
  width: 100%;
  height: 50px;
`;

const List = styled.ul``;

const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  & img {
    height: 32px;
    border-radius: 50%;
    display: inline-block;
  }
`;

const ChatList = ({ list, enterRoom, closeList }) => {
  return (
    <Styled.PopUp style={{ background: 'pink' }}>
      <ChatNav>
        <h4>채팅리스트</h4>
        <button onClick={closeList}>X</button>
      </ChatNav>
      <List>
        {list.map(chat => (
          <ListItem
            debug
            key={`chat-${chat.id}`}
            onClick={() => enterRoom(chat.id)}
          >
            <img
              src="https://img.icons8.com/cotton/2x/person-male--v2.png"
              alt={chat.id}
            />
            {chat.id}: {chat.lastText}
          </ListItem>
        ))}
      </List>
    </Styled.PopUp>
  );
};

export default ChatList;
