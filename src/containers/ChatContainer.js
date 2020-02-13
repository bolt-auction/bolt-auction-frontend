import React from 'react';
import { connect } from 'react-redux';
import ChatRoom from '../components/ChatRoom';
import ChatList from '../components/ChatList';
import { enter, leave } from '../modules/chat';

const ChatContainer = ({ user, list, activeRoom, enter, leave }) => {
  return activeRoom ? (
    <ChatRoom roomId={activeRoom} leaveRoom={leave} />
  ) : (
    <ChatList list={list} enterRoom={enter} />
  );
};

export default connect(
  ({ auth, chat }) => ({
    user: auth.user,
    list: chat.list,
    activeRoom: chat.activeRoom,
  }),
  {
    enter,
    leave,
  },
)(ChatContainer);
