import React from 'react';
import styled from 'styled-components';

import * as Styled from '../styles/Styled';
import Colors from '../styles/Colors';
import { useEffect } from 'react';

const List = styled.ul``;

const ListItem = styled.li`
  width: 100%;
  cursor: pointer;

  padding: 4px 8px;
  display: flex;
  align-items: center;

  height: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  & img {
    height: 32px;
    border-radius: 50%;
    display: inline-block;
  }

  &:nth-child(even) {
    background-color: ${Colors.primaryPressed};
  }
`;

const ChatList = ({ list, enterRoom, closeList, loadList }) => {
  useEffect(() => {
    loadList();
  }, [loadList]);

  return (
    <Styled.PopUp>
      <Styled.ChatNav style={{ borderBottom: `1.2px solid ${Colors.gray[1]}` }}>
        <h4>채팅리스트</h4>
        <button className="close-btn" onClick={closeList}>
          X
        </button>
      </Styled.ChatNav>
      <List>
        {list?.map(chat => (
          <ListItem
            debug
            key={`chat-${chat.chatRoomId}`}
            onClick={() => enterRoom(chat)}
          >
            <img
              src="https://img.icons8.com/cotton/2x/person-male--v2.png"
              alt={chat.chatRoomId}
            />
            <span>
              {chat.chatRoomId}: {chat.chatRoomName}
            </span>
          </ListItem>
        ))}
      </List>
    </Styled.PopUp>
  );
};

export default ChatList;
