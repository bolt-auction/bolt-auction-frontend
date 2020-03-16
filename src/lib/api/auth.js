import client from './client';

/**
 * uid와 passwd로 로그인 요청
 * @param {string} uid - 유저 이메일(유저 아이디)
 * @param {string} passwd - 비밀번호
 */
export const signin = ({ uid, passwd }) =>
  client.post('/api/auth/login', { uid, passwd });

/**
 * 회원가입
 * @param {string} uid - 이메일
 * @param {string} passwd - 비밀번호
 * @param {string} name - 닉네임
 */
export const signup = ({ uid, passwd, name }) =>
  client.post('/api/member', { uid, passwd, name });

/**
 * 회원정보 조회 (authorization)
 */
export const check = () => client.get('/api/member');
