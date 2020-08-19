import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['shohag', 'nawaz', 'Shohan', 'sujon', 'banna']
  const products = [
    { name: 'PhotoShop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' }
  ]
  const productName = products.map(product => product.price);
  console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map(names => <li>{names}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

        <Person name="Md. Shah Nawaz"></Person>
        <Person name="Md. Shah Shohag"></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([])
  return (
    <div>
      <h2>Dynamic User</h2>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
    </div>
  );
}

export default App;
