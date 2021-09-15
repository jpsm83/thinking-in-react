import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

// recive all the products data from FilterableProductTable.js as props
export default function ProductTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((item) => (
          // pass all the product data of each item to ProductRow
          <ProductRow
            key={item.id}
            name={item.name}
            price={item.price}
            stocked={item.stocked}
          />
        ))}
      </tbody>
    </table>
  );
}