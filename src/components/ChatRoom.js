import React from 'react';
import styled from 'styled-components';
import * as Styled from '../styles/Styled';

const ChatNav = styled.nav`
  width: 100%;
  height: 50px;
`;

/**
 *
 * @param {* number} roomId - 채팅방 id
 * @param {* ActionFunction} leaveRoom - chat module의 leave function. 채팅방을 떠나서 state.chat.activeRoom을 null로 만듦
 */
const ChatRoom = ({ roomId, leaveRoom }) => {
  return (
    <Styled.PopUp>
      <ChatNav>
        <button onClick={leaveRoom}>뒤로가기</button>
      </ChatNav>
      <h4>{roomId}번 채팅룸</h4>
      <form>
        <input type="text" />
        <button>보내기</button>
      </form>
    </Styled.PopUp>
  );
};

export default ChatRoom;
