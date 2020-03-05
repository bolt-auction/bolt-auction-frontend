import { eventChannel, END } from 'redux-saga';

export default function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = event => {
      emit(event.data);
    };

    socket.onclose = () => {
      emit(END);
    };

    const unsubscribe = () => {
      socket.onmessage = null;
    };

    return unsubscribe;
  });
}
