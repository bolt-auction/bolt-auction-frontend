import moment from 'moment';
/**
 * 현재 시간으로 부터 day의 값만큼 더한 날의 수를 반환
 * @param {number} day - 날의 수
 * @return {string} 'YYYY-MM-DD[T]HH:mm:ss'
 * @example calEndTime(3); // 2020-03-16T17:00:00
 */
export const calEndTime = day =>
  moment()
    .add(day, 'days')
    .format('YYYY-MM-DD[T]HH:mm:ss');

/**
 * 이메일과 비밀번호의 유효성 검사
 * @param {string} name - 'email' | 'password'
 * @param {string} value - 검사할 값
 * @return {boolean} boolean
 */
export const validation = (name, value) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  const passwdRegex = /^[A-Za-z0-9]{6,12}$/;
  const regex =
    name === 'email' ? emailRegex : name === 'password' ? passwdRegex : null;
  return !regex.test(value);
};
