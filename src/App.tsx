import { useEffect, useState } from 'react';
import './App.css'
import PageCheckout from './page/_checkout'
import listProducts from './products.json'
export default function App() {
 

  return(
    <div id="App">
    <PageCheckout products={listProducts}/>
    </div>
  )
}
