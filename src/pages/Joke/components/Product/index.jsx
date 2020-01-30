import React from 'react';

const Product = ({ data }) => {
    return (
        <div>
            <p>name: {data.name}</p>
            <p>price: {data.price}</p>
            <p>description: {data.description}</p>
        </div>
    );
};

export default Product;
