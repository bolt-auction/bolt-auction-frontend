import React from 'react';

const data = [{ name: '수빈' }, { name: '지섭' }];

const Store = ({ match }) => {
  const { id } = match.params;
  const name = data[id].name;
  if (!name) return <div>존재하지 않는 사용자.</div>;
  return (
    <div>
      <h1>상점 페이지</h1>
      <h2>
        {id}({name})
      </h2>
    </div>
  );
};

export default Store;
