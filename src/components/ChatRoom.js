import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as Styled from '../styles/Styled';
import Colors from '../styles/Colors';
import { MdArrowBack } from 'react-icons/md';
// import socket from '../lib/socket';
import SockJsClient from 'react-stomp';
import Infinite from 'react-infinite';

const OppMessageBlock = styled.div`
  display: flex;
  width: 100%;
  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    font-size: 11px;

    span {
      text-align: left;
    }
    .message {
      padding: 4px 8px;
      height: 30px;
      background-color: #fff;
      border-radius: 4px;
    }

    .message-wrapper {
      position: relative;

      .message-box.first::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -2px;
        left: -3px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        transform: rotate(-90deg);
        border-right: 6px solid white;
        border-radius: 1px;
      }
    }
  }
  margin-bottom: 3px;
`;

const MyMessageBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  .profile-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    font-size: 11px;
    span {
      text-align: right;
    }
    .message {
      padding: 4px 8px;
      height: 30px;
      background-color: ${Colors.kakao[0]};
      border-radius: 4px;
    }

    .message-wrapper {
      position: relative;

      .message-box.first::after {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -2px;
        right: -3px;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        transform: rotate(90deg);
        border-left: 6px solid ${Colors.kakao[0]};
        border-radius: 1px;
      }
    }
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
      position: relative;
      background-color: ${Colors.primaryPressed};

      .item-wrapper {
        width: 220px;
        position: absolute;
        /* right: -240px;  */

          .item-link {
          position: fixed;
          top: calc(50% - 195px);

          right: 8px;
          opacity: 0.7;
          z-index: 10;

          img {
            width: 40px;
            height: 40px;
            border-radius: 5px;
          }
        }
      }

      .chat-records {
          width: 100%;
          height: 380px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0 8px;

          &>div {
            width: 100%;
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
  room,
  roomRecord,
  postChat,
  receiveChat,
  loadRecords,
}) => {
  const $input = useRef(null);
  const $client = useRef(null);
  const $records = useRef(null);
  const [message, setMessage] = useState('');
  const page = 0;
  const [size, setSize] = useState(12);
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

  const onMessage = msg => {
    receiveChat(msg, $records.current);
  };

  useEffect(() => {
    // const socket = $client.current;
    loadRecords(roomId, page, size);
  }, [loadRecords, page, roomId, size]);

  const loadMoreRecords = () => {
    setSize(size + 12); // 12개씩 채팅 기록 load
    loadRecords(roomId, page, size);
  };

  return (
    <Styled.PopUp>
      <Styled.ChatNav style={{ backgroundColor: Colors.primaryFocused }}>
        <button className="back-btn" onClick={() => leaveRoom($client.current)}>
          <MdArrowBack style={{ width: 30, height: 20, marginLeft: -10 }} />
        </button>
        <h4>{roomId}번 채팅룸</h4>
      </Styled.ChatNav>
      <ChatRoomBlock>
        <div className="scroll-blind">
          <div className="item-wrapper">
            <Link className="item-link" to={`/products/${room.item?.itemId}`}>
              <img src={room.item?.itemImagePath} alt="아이템" />
            </Link>
          </div>

          <Infinite
            className="chat-records"
            ref={$records}
            containerHeight={380}
            elementHeight={40}
            infiniteLoadBeginEdgeOffset={10}
            onInfiniteLoad={loadMoreRecords}
            displayBottomUpwards
          >
            {roomRecord?.map((rec, idx, recs) => {
              let isFirst = false;
              if (
                idx === 0 ||
                (idx > 0 &&
                  recs[idx - 1].sender.memberId !== rec.sender.memberId)
              ) {
                isFirst = true;
              }
              return rec.sender?.memberId === myId ? (
                <MyMessageBlock key={`me-${rec.chatMessageId}`}>
                  <div className="text-box">
                    {/* {isFirst ? <span>{rec.sender?.MemberName}</span> : null} */}
                    <div className="message-wrapper">
                      <div
                        className={`message-box ${isFirst ? 'first' : null}`}
                      >
                        <div className="message">{rec.chatMessageContent}</div>
                      </div>
                    </div>
                  </div>
                </MyMessageBlock>
              ) : (
                <OppMessageBlock key={`opp-${rec.chatMessageId}`}>
                  {isFirst ? (
                    <img
                      className="profile-image"
                      src={room?.item?.itemImagePath}
                      alt="me"
                    />
                  ) : (
                    <div className="profile-image" />
                  )}
                  <div className="text-box">
                    {isFirst ? <span>{rec.sender?.memberName}</span> : null}
                    <div className="message-wrapper">
                      <div
                        className={`message-box ${isFirst ? 'first' : null}`}
                      >
                        <div className="message">{rec.chatMessageContent}</div>
                      </div>
                    </div>
                  </div>
                </OppMessageBlock>
              );
            })}
          </Infinite>
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
        topics={[`/topic/chatRoom.${roomId}`]}
        onConnect={() => {
          console.log('Socket Connected!');
        }}
        onDisconnect={() => {
          console.log('Socket Disconnected!');
        }}
        onMessage={msg => onMessage(msg)}
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
