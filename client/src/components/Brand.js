import React from 'react';
import { Link } from 'react-router-dom';

export const Brand = ({
  brand: {
    results: { name, brand_id },
  },
}) => {
  return (
    <div>
      <Link to={`/${brand_id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};
