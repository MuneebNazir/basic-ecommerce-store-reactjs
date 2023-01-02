import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./common/button";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    const { id, name, img, price, price_unit } = this.props;
    return (
      <>
        <ProductConsumer>
          {({ detailProduct, addToCart }) => {
            const { id, img, name, price, inCart } = detailProduct;
            return (
              <>
                <img src={img}></img>
                <span>{name}</span>
                <span>{price}</span>
                <span>{price_unit}</span>
                <Link to="/cart">
                  <ButtonContainer>Go to Cart</ButtonContainer>
                </Link>
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
