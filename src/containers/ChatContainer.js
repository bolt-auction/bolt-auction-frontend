import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import ChatList from '../components/ChatList';
import { enter, leave, send, loadList } from '../modules/chat';

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
}) => {
  return activeRoom ? (
    <ChatRoom
      roomId={activeRoom}
      leaveRoom={leave}
      roomRecord={roomRecord}
      postChat={send}
      myId={user?.id}
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

export default connect(
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
  },
)(ChatContainer);
