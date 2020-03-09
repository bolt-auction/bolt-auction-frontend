import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Styled from '../styles/Styled';
import Colors from '../styles/Colors';
import { MdArrowBack } from 'react-icons/md';
// import socket from '../lib/socket';
import SockJsClient from 'react-stomp';

const OppMessageBlock = styled.li`
  display: flex;
  width: 100%;

  .message {
    padding: 4px 8px;
    height: 30px;
    background-color: #fff;
    border-radius: 4px;
  }
  margin-bottom: 3px;
`;

const MyMessageBlock = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;

  .message {
    padding: 4px 8px;
    height: 30px;
    background-color: ${Colors.kakao[0]};
    border-radius: 4px;
  }
  margin-bottom: 3px;
`;

const ChatRoomBlock = styled.div`
  width: 100%;
  height: 440px;
  /* -ms-overflow-style: none; 
  &::-webkit-scrollbar { 
    display: none !important; 
  } */

    .scroll-blind {
      width: 100%;
      overflow-y: auto;
      background-color: ${Colors.primaryPressed};

      .chat-records {
          width: 100%;
          height: 380px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0 8px;

        }

      
        /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: none;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${Colors.primaryMatte[1]};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background:${Colors.primaryMatte[2]};
      }

    }

  

  .chat-form {
    height: 70px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 4px;
    font-size: 11px;

    .chat-input {
      width: 100%;
      /* min-height: 42px;
      max-height: 100px; */
      border: none;
      word-break: break-all;
      overflow: visible;
      resize: none;
    }
    .chat-input:focus,
    .chat-input:active {
      border: none;
    }

    .send-btn {
      width: 50px;
      padding: 4px 10px;
      cursor: pointer;
    }
    .send-btn.active {
      /* color: ${Colors.kakao[1]}; */
      background: ${Colors.primary};
    }

    .send-btn:disabled {
      cursor: default;
    }
  }
`;

/**
 *
 * @param {* number} roomId - 채팅방 id
 * @param {* ActionFunction} leaveRoom - chat module의 leave function. 채팅방을 떠나서 state.chat.activeRoom을 null로 만듦
 */
const ChatRoom = ({
  myId,
  roomId,
  leaveRoom,
  roomRecord,
  postChat,
  loadRecords,
}) => {
  const $input = useRef(null);
  const $client = useRef(null);
  const [message, setMessage] = useState('');
  const wsURL = 'http://18.190.79.25:8080/ws-stomp';

  const onSubmit = e => {
    e.preventDefault();
    try {
      const socket = $client.current;
      const msg = { content: message, chatRoomId: roomId, senderId: myId };
      postChat(socket, msg);
      $input.current.value = '';
      setMessage('');
    } catch (e) {
      console.log('채팅보내기 에러: ', e);
    }
  };

  useEffect(() => {
    const socket = $client.current;
    console.log(socket);
    return () => {
      socket.disconnect();
    };
  }, [loadRecords, roomId]);

  return (
    <Styled.PopUp>
      <Styled.ChatNav style={{ backgroundColor: Colors.primaryFocused }}>
        <button className="back-btn" onClick={leaveRoom}>
          <MdArrowBack style={{ width: 30, height: 20, marginLeft: -10 }} />
        </button>
        <h4>{roomId}번 채팅룸</h4>
      </Styled.ChatNav>
      <ChatRoomBlock>
        <div className="scroll-blind">
          <ul className="chat-records">
            {roomRecord?.map(rec =>
              rec.memberId === myId ? (
                <MyMessageBlock key={rec.id}>
                  <span>{rec.memberId}</span>
                  <div className="message">{rec.text}</div>
                </MyMessageBlock>
              ) : (
                <OppMessageBlock key={rec.id}>
                  <span>{rec.memberId}</span>
                  <div className="message">{rec.text}</div>
                </OppMessageBlock>
              ),
            )}
          </ul>
        </div>
        <form className="chat-form" onSubmit={e => onSubmit(e)}>
          <textarea
            autoFocus
            wrap="hard"
            ref={$input}
            onChange={() => setMessage($input.current.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') onSubmit(e);
            }}
            className="chat-input"
          />
          <button
            className={`send-btn ${
              message?.trim('').length > 0 ? 'active' : null
            }`}
            disabled={message?.trim('').length <= 0}
          >
            전송
          </button>
        </form>
      </ChatRoomBlock>
      <SockJsClient
        url={wsURL}
        topics={[`/topic/chatroom.${roomId}`]}
        onConnect={() => {
          console.log('Socket Connected!');
        }}
        onDisconnect={() => {
          console.log('Socket Disconnected!');
        }}
        onMessage={(msg, topic) => {
          console.log('메시지왔다: ', msg, topic);
        }}
        onConnectFailure={e => {
          console.log(e, $client.current);
        }}
        ref={$client}
        debug={true}
      />
    </Styled.PopUp>
  );
};

export default ChatRoom;
