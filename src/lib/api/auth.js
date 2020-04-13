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
export const check = () =>
  client.get('/api/member', {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    },
  });
/**
 * NOTE:
 * 처음 로그인할때 디폴트 헤더에 토큰이 없기 때문에 (localStorage.token === undefined)
 * 요청이 제대로 이루어지지 않는 문제를 해결하기 위해 check에서만 헤더를 삽입
 * FIXME:
 * check에 리덕스 스토어에 있는 accessToken을 전달해서 사용하도록 변경하거나
 * axios.defaults.headers.common['Authorization']을 여기서 선언해 전달 하도록 변경
 */
