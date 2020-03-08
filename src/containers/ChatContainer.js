import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import ChatList from '../components/ChatList';
import { enter, leave, send, loadList, loadRecords } from '../modules/chat';

const ChatContainer = ({
  user,
  list,
  activeRoom,
  roomRecord,
  enter,
  leave,
  close,
  send,
  loadList,
  loadRecords,
}) => {
  return activeRoom ? (
    <ChatRoom
      roomId={activeRoom}
      leaveRoom={leave}
      roomRecord={roomRecord}
      postChat={send}
      myId={user?.id}
      loadRecords={loadRecords}
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
    }),
    {
      enter,
      leave,
      send,
      loadList,
      loadRecords,
    },
  )(ChatContainer),
);
