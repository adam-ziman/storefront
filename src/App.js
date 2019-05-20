import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Storefront Assignment</h1>
        </header>

        <header>
            <Link to='/'>Products</Link> | <Link to='/cart'>My Cart</Link>
        </header>

        <Route exact path='/' component={Category} />
        <Route path='/cart' component={Cart} aztest='azadam'/>
        <Route path='/product/:id' component={Product}/>
      </div>
    );
  }
}

export default App;
