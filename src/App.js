import CategoryList from './components/category-list';
import './App.css';
import { Products } from './data/products-list';
import React, { Component } from 'react';
import { currency_options } from './data/static-content';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currency: "\u0024",
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log("Event: ", e.target.dataset);
    // this.setState({currency: e});
  }

  render(){
    return (
      <div className="body">
        <p>Options: </p>
        <ul>
          {
            currency_options.map((item)=>{
              return <li onClick={this.handleClick} key={item.id}>{item.val}</li>
            })
          }
        </ul>
        <CategoryList products={Products} />
      </div>
    );
  }
}

