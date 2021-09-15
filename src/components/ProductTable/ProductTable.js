import React,{ Component } from "react";
import ProductRow from "../ProductRow/ProductRow";
import "./ProductTable.css";

export default class ProductTable extends Component {
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((item) => (
                        <ProductRow key={item.id} name={item.name} price={item.price} stocked={item.stocked} />
                        )
                    )}
                </tbody>
            </table>
        )
    }
}

// why class component?