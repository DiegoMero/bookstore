import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const alertMessage = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <h3>{alertMessage}</h3>
    </div>
  );
};

export default Categories;
