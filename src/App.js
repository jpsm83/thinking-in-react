import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import jsondata from './data.json';

export default function App() {
  return (
    <div className="App">
    {/* send all the data as 'products' to the entire app */}
      <FilterableProductTable products={ jsondata.data } />
    </div>
  );
}