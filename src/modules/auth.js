const users = [
  { email: 'subin', password: '1234', name: '수빈' },
  { email: 'jisop', password: '1234', name: '지섭' },
];

export function signIn({ email, password }) {
  const user = users.find(
    user => user.email === email && user.password === password,
  );
  if (user === undefined) throw new Error();
  return user;
}
