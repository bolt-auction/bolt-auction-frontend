export default function createWebSocketConnection() {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket('/ws-stomp');

    socket.onopen = function() {
      resolve(socket);
    };

    socket.onerror = function(evt) {
      reject(evt);
    };
  });
}
