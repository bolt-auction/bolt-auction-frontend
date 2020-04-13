import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
// const Stomp = require('@stomp/stompjs');

export default function socket(chatRoomId) {
  let socket;
  let stompClient;

  function connect() {
    socket = new SockJS('http://18.190.79.25:8060/ws-stomp');
    stompClient = Stomp.over(socket);
    stompClient.connect({ chatRoomId: chatRoomId }, stompSuccess, stompFailure);
  }

  function stompSuccess(putMessage) {
    console.log('Connection Success!');
    stompClient.subscribe(`/topic/chatroom/${chatRoomId}`, putMessage);
  }

  function stompFailure(error) {
    console.log('Lost connection to WebSocket! Reconnecting in 10 seconds...');
    setTimeout(connect, 10000);
  }

  function disconnect() {
    if (stompClient != null) {
      stompClient.disconnect();
    }
    window.location.href = '/chat';
  }

  function sendMessage(message) {
    stompClient.send('/chat.sendMessage', JSON.stringify(message));
  }

  return {
    connect,
    stompSuccess,
    stompFailure,
    disconnect,
    sendMessage,
  };
}
