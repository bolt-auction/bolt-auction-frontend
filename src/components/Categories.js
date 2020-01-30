import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['패션잡화', '여성의류', '남성의류'];
const Categories = () => {
  return (
    <div>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <Link to={`categories/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
