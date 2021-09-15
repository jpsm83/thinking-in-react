import React from 'react';
import './ProductRow.css';

// recive stocked, name and price as props from product table
export default function ProductRow({ stocked, name, price }) {
  return (
    <tr className="product-row">
      <td className={!stocked ? 'no-stocked' : 'stocked'}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}