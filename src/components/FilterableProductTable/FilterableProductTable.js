import React, { Component } from 'react';
import App from '../../App';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import './FilterableProductTable.css';

export default class FilterableProductTable extends Component {
  state = {
    // data recived as props (products) from App.js
    productsList: this.props.products,
  };

  // inputSearch comes from SearchBar.js
  filteredProducts = (inputSearch) => {
    // if no filter (inputSearch) render all products
    if (inputSearch === '') {
      this.setState({
        productsList: this.props.products,
      });
      return;
    }
    // if filter (inputSearch) render what is desired
    const newProductsList = this.props.products.filter((product) => {
      return product.name.toLowerCase().includes(inputSearch.toLowerCase());
    });

    this.setState({
      productsList: newProductsList,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <div className="search-bar-div">
        {/* send the filteredProducts method to be use in the child SearchBar */}
          <SearchBar filteredProducts={this.filteredProducts} />
        </div>
        <div className="product-table">
          {/* pass the products data to be use and render in the child ProductTable */}
          <ProductTable products={this.state.productsList} />
        </div>
      </div>
    );
  }
}