import React from 'react';
import { useParams } from 'react-router-dom';

const SlicePage: React.FC = () => {
    const { idCategory, strCategory, strCategoryThumb } = useParams<{ idCategory: string; strCategory: string; strCategoryThumb: string }>();

  return (
    <div className='app'>
      <h1>{strCategory}</h1>
      <img src={strCategoryThumb} alt="" />
      <p>ID: {idCategory}</p>
    </div>
  );
};

export default SlicePage;
