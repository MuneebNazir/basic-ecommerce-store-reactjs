import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  render() {
    const { id, name, img, price, price_unit } = this.props;
    return (
      <>
        <div onClick={handleClick}>
          <Link to="/detail">
            <img src={img}></img>
            <span>{name}</span>
            <span>{price}</span>
            <span>{price_unit}</span>
          </Link>
        </div>
      </>
    );
  }
}
