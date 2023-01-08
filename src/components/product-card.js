import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { createProductClickObject } from "../utils/helpers";

export default class ProductCard extends Component {
  render() {
    const { id, name, img, price } = this.props;
    return (
      <div>
        <ProductConsumer>
          {(value) => (
            <div>
              <div
                onClick={() => {
                  value.handleDetail(id);
                  console.log("ProductClick", createProductClickObject(null, id, value.products))
                }}
              >
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
