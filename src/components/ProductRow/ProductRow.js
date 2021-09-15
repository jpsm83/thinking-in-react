import React from 'react';
import './ProductRow.css';

export default function ProductRow({ stocked, name, price }) {
  return (
    <tr className="product-row">
      <td className={!stocked ? 'no-stocked' : 'stocked'}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}