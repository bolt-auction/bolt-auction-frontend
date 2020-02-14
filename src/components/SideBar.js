import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import ChatContainer from '../containers/ChatContainer';
import { Container, Row, Col } from 'react-awesome-styled-grid';

const ChatButton = styled.button`
  background-color: ${Colors.primary};
  padding: 16px 28px;
  cursor: pointer;
  border-radius: 50%;
  color: #ffffff;
`;

const ChatSidebar = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  height: 500px;
  overflow: hidden;

  & .chat-list {
    position: absolute;
    top: 0;
    right: -100%;
    transition: all 0.5s;
  }

  & .chat-list.active {
    right: 0;
    width: 100%;
  }
`;

const SideBar = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => setChatOpen(!chatOpen);

  return (
    <ChatSidebar>
      <Container
        debug
        style={{ maxWidth: (window.innerWidth - 1024) / 2, minWidth: 200 }}
      >
        <Row style={{ height: 110 }}>
          <Col align="center" justify="center">
            {chatOpen ? null : (
              <ChatButton onClick={toggleChat}>
                채팅
                <br />
                하기
              </ChatButton>
            )}
          </Col>
        </Row>
        <Row>
          <Col
            debug
            xs={4}
            sm={8}
            md={12}
            lg={12}
            align="center"
            justify="center"
            noGutter
          >
            <div className={`chat-list ${chatOpen ? 'active' : ''}`}>
              <ChatContainer close={toggleChat} />
            </div>
          </Col>
        </Row>
      </Container>
    </ChatSidebar>
  );
};

export default SideBar;
