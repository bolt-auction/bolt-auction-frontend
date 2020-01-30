import React from 'react';
import Header from './Header';
import Categories from './Categories';
import ProductList from './ProductList';

const Main = () => {
  return (
    <div>
      <h1>메인 컴포넌트</h1>
      <Header />
      <Categories />
      <ProductList />
      <ProductList />
    </div>
  );
};

export default Main;
