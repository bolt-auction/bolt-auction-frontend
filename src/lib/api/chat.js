import client from './client';

/**
 * 채팅방 생성
 * @param {string} chatRoomName - 생성될 채팅방 이름
 * @param {number} itemId - 상품 id
 * @param {number} recvMemberId - 상대방 Member id
 */
export const postChatroom = ({ chatRoomName, itemId, recvMemberId }) => {
  return client.post(`/api/chat/room`, { chatRoomName, itemId, recvMemberId });
};

/**
 * 채팅방 목록 가져오기
 */
export const getChatrooms = () => client.get(`/api/chat/room`);

/**
 * 채팅방 대화 기록 가져오기
 * @param {number} chatRoomId - 채팅방 id
 * @param {number} page
 * @param {number} size
 */
export const getChatRecords = ({ chatRoomId, page, size }) =>
  client.get(
    `/api/chat/message?chatRoomId=${chatRoomId}&page=${page}&size=${size}&sort=createDt,desc`,
  );

// // 채팅 보내기
// export const postChat = (socket, msg) =>
//   socket.sendMessage('/app/chat.sendMessage', JSON.stringify(msg), {
//     Authorization: `Bearer ${localStorage.token}`,
//   });
