import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import StoreProducts from './StoreProducts';
import StoreReviews from './StoreReviews';

const data = [{ name: '수빈' }, { name: '지섭' }];

const StoreTo = ({ match }) => {
  return <Redirect to={`${match.path}/products`} />;
};

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
      <Link to={`/store/${id}/products`}>상품</Link>
      <Link to={`/store/${id}/reviews`}>리뷰</Link>
      <Switch>
        <Route path={`/store/${id}`} exact component={StoreTo} />
        <Route path={`/store/${id}/products`} component={StoreProducts} />
        <Route path={`/store/${id}/reviews`} component={StoreReviews} />
      </Switch>
    </div>
  );
};

export default Store;
