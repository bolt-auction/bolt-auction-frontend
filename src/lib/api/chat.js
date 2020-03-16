import client from './client';

// 채팅방 생성
export const postChatroom = ({ chatRoomName, itemId, recvMemberId }) => {
  console.log({ chatRoomName, itemId, recvMemberId });
  return client.post(`/api/chat/room`, { chatRoomName, itemId, recvMemberId });
};

// 채팅방 목록 가져오기
export const getChatrooms = () => client.get(`/api/chat/room`);

// 채팅 기록 가져오기
export const getChatRecords = ({ chatRoomId, page, size }) =>
  client.get(
    `/api/chat/message?chatRoomId=${chatRoomId}&page=${page}&size=${size}&sort=createDt,desc`,
  );

// // 채팅 보내기
// export const postChat = (socket, msg) =>
//   socket.sendMessage('/app/chat.sendMessage', JSON.stringify(msg), {
//     Authorization: `Bearer ${localStorage.token}`,
//   });
