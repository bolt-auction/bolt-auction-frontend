import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import ChatList from '../components/ChatList';
import { enter, leave, post, loadList } from '../modules/chat';

const ChatContainer = ({
  user,
  list,
  activeRoom,
  roomRecord,
  enter,
  leave,
  close,
  post,
  loadList,
}) => {
  return activeRoom ? (
    <ChatRoom
      roomId={activeRoom}
      leaveRoom={leave}
      roomRecord={roomRecord}
      postChat={post}
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
    post,
    loadList,
  },
)(ChatContainer);
