import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const { id, name, img, price, price_unit } = this.props;
    <>
      <img src={img}></img>
      <span>{name}</span>
      <span>{price}</span>
      <span>{price_unit}</span>
    </>;
  }
}
