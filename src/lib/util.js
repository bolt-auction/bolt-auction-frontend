import moment from 'moment';

export const calLeftTime = endDt => {
  const diff = moment(endDt).diff(moment());
  const isoString = moment.duration(diff).toIsoString();
  const leftTime = isoString.replace(
    /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)(?:\.(\d+))?S)?)?$/,
    ($1, $2, $3, $4, $5, $6, $7) => {
      let res = [];
      if ($2) res.push($2 + '년');
      if ($3) res.push($3 + '달');
      if ($4) res.push($4 + '일');
      if ($5) res.push($5 + '시간');
      if ($6) res.push($6 + '분');
      if ($7) res.push($7 + '초');
      res.push($1 ? '지남' : '남음');
      return res.join(' ');
    },
  );
  return leftTime;
};

/**
 * 현재 시간으로 부터 day의 값만큼 더한 날의 수를 반환
 * @param {number} days - 날의 수
 * @return {string} 'YYYY-MM-DD[T]HH:mm:ss'
 * @example calEndTime(3); // 2020-03-16T17:00:00
 */
export const calEndTime = days =>
  moment()
    .add(days, 'days')
    .format('YYYY-MM-DD[T]HH:mm:ss');

// NOTE: 정규표현식 사용해서 변환해보자
/**
 * price로 전달받은 인자를 한국통화 포멧으로 반환
 * @param {number} price - 가격
 */
export const priceFormat = price =>
  new Intl.NumberFormat('ko-KR').format(price);

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
