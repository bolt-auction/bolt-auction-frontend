import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from '../components/chat/ChatRoom';
import ChatList from '../components/chat/ChatList';
import {
  enter,
  leave,
  send,
  loadList,
  loadRecords,
  receive,
} from '../modules/chat';

const ChatContainer = ({
  user,
  list,
  activeRoom,
  roomRecord,
  enter,
  leave,
  close,
  send,
  receive,
  loadList,
  loadRecords,
  isMore,
}) => {
  return activeRoom ? (
    <ChatRoom
      roomId={activeRoom.chatRoomId}
      leaveRoom={leave}
      roomRecord={roomRecord}
      postChat={send}
      receiveChat={receive}
      user={user}
      room={activeRoom}
      myId={user?.id}
      loadRecords={loadRecords}
      isMore={isMore}
    />
  ) : (
    <ChatList
      list={list}
      enterRoom={enter}
      closeList={close}
      loadList={loadList}
    />
  );
};

export default React.memo(
  connect(
    ({ auth, chat }) => ({
      user: auth.user,
      list: chat.list,
      activeRoom: chat.activeRoom,
      roomRecord: chat.roomRecord,
      isMore: chat.isMore,
    }),
    {
      enter,
      leave,
      send,
      receive,
      loadList,
      loadRecords,
    },
  )(ChatContainer),
);
