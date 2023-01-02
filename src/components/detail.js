import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Detail extends Component {
  render() {
    const { id, name, img, price, price_unit } = this.props;
    return (
      <>
        <ProductConsumer>
          {({ detailProduct }) => {
            const {img, name, price} = detailProduct;
            return (
              <>
                <img src={img}></img>
                <span>{name}</span>
                <span>{price}</span>
                <span>{price_unit}</span>
              </>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
