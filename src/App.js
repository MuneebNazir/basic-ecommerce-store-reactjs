import CategoryList from "./components/category-list";
import "./App.css";
import { Products } from "./data/products-list";
import React, { Component } from "react";
import { currency_options } from "./data/static-content";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/detail";
import Default from "./components/default";
import Cart from "./components/Cart/cart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "\u0024",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("Event: ", e.target.dataset);
    // this.setState({currency: e});
  }

  render() {
    return (
      <div className="body">
        <p>Options: </p>
        <ul>
          {currency_options.map((item) => {
            return (
              <li onClick={this.handleClick} key={item.id}>
                {item.val}
              </li>
            );
          })}
        </ul>
        <Routes>
          <Route path="*" element={<Default />}></Route>
          <Route path="/" element={<CategoryList />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    );
  }
}
