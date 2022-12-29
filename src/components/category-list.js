import React, { Component } from "react";
import ProductCard from "./product-card";

export default class CategoryList extends Component {
  render() {
    const { products, price_unit } = this.props;
    return (
      <>
        {products.map((product) => {
          return (
            <ProductCard
              style={{height: "200px", width: "200px"}}
              key={product.id}
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price[price_unit]}
              price_unit={price_unit}
            />
          );
        })}
      </>
    );
  }
}
