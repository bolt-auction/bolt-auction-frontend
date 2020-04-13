import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../styles/Colors';
import ChatContainer from '../../containers/ChatContainer';

const ChatButton = styled.button`
  position: fixed;
  top: 75%;
  right: 5%;
  /* transform: translateY(-50%); */
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

  & .chat-wrapper {
    min-width: 320px;
    max-width: 320px;
    background: #fff;
    color: #000;
    transition: all 0.3s;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
      0 4px 5px 0 rgba(0, 0, 0, 0.14);
  }

  & .chat-wrapper.active {
    margin-right: -320px;
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
        <div className={`chat-wrapper ${chatOpen ? '' : 'active'}`}>
          <ChatContainer close={toggleChat} />
        </div>
      </ChatSidebar>
    </>
  );
};

export default SideBar;
