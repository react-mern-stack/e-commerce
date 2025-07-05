import React from 'react';

import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <ItemProvider>
      <Header />
      <ProductList />
    </ItemProvider>
  );
}


export default App;
