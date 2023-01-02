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
              <div onClick={() => value.handleDetail(id)}>
                <Link to="/detail">
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
