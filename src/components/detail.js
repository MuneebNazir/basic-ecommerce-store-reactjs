import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./common/button";

export default class Detail extends Component {
  render() {
    const { id, name, img, price, price_unit } = this.props;
    return (
      <>
        <ProductConsumer>
          {({ detailProduct, addToCart }) => {
            const { id, img, name, price } = detailProduct;
            return (
              <>
                <img src={img}></img>
                <span>{name}</span>
                <span>{price}</span>
                <span>{price_unit}</span>
                <ButtonContainer
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => addToCart(id)}
                >
                  {inCart ? "in cart" : "add to cart"}
                </ButtonContainer>
              </>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
