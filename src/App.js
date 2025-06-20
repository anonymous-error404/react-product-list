import React from 'react';
import './App.css'; // ✅ Import the CSS file
import ProductList from './ProductList';

function App() {
  return (
    <div className="app-container">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
