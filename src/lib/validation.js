const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
const passwdRegex = /^[A-Za-z0-9]{6,12}$/;
const validation = (name, value) => {
  const regex =
    name === 'email' ? emailRegex : name === 'password' ? passwdRegex : null;
  return !regex.test(value);
};
export default validation;

// import { useState } from 'react';
// const useValidation = (name, value) => {
//   const [isValid, setIsValid] = useState(null);
//   const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
//   const passwdRegex = /^[A-Za-z0-9]{6,12}$/;
//   switch (name) {
//     case 'uid':
//       !value.match(emailRegex)
//         ? setIsValid('올바른 이메일 형식이 아닙니다.')
//         : setIsValid(null);
//       break;
//     case 'passwd':
//       !value.match(passwdRegex)
//         ? setIsValid('숫자와 문자 포함 형태의 6~12자리를 입력해주세요.')
//         : setIsValid(null);
//       break;
//     default:
//       break;
//   }
//   setIsValid(true);
//   return isValid;
// };
// export default useValidation;

// export const isEmail = value => {
//   const emailRegex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
//   // return emailRegex.test(value) ? null : 'uid';
//   return emailRegex.test(value);
// };

// export const isPasswd = value => {
//   const passwdRegex = /^[A-Za-z0-9]{6,12}$/;
//   // return passwdRegex.test(value) ? null : 'passwd';
//   return passwdRegex.test(value);
// };
