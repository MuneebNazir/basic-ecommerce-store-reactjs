import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class ProductCard extends Component {
  render() {
    const { id, name, img, price } = this.props;
    return (
      <div>
        <ProductConsumer>
          {(value) => (
            <div>
              <h2>Card2</h2>
              <div onClick={() => value.handleDetail(id)}>
                <Link to="/detail">
                <h3>Card3</h3>
                <img src={img}></img>
                <span>{name}</span>
                <span>{price}</span>
                </Link>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
