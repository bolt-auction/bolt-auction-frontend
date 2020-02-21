import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import ChatContainer from '../containers/ChatContainer';

const ChatButton = styled.button`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: ${Colors.primary};
  padding: 16px 28px;
  cursor: pointer;
  border-radius: 50%;
  color: #ffffff;
  z-index: 20;

  &::after {
    content: '';
    width: 150px;
    height: 150px;
  }
`;

const ChatSidebar = styled.div`
  position: fixed;
  right: 0;
  z-index: 100;

  & .chat-list {
    min-width: 250px;
    max-width: 250px;
    background: #7386d5;
    color: #fff;
    transition: all 0.3s;
  }

  & .chat-list.active {
    margin-right: -250px;
  }
`;

const SideBar = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <>
      {chatOpen ? null : (
        <ChatButton onClick={toggleChat}>
          채팅
          <br />
          하기
        </ChatButton>
      )}
      <ChatSidebar>
        <div className={`chat-list ${chatOpen ? '' : 'active'}`}>
          <ChatContainer close={toggleChat} />
        </div>
      </ChatSidebar>
    </>
  );
};

export default SideBar;
