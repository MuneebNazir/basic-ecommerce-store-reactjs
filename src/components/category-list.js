import React, { Component } from "react";
import ProductCard from "./product-card";
import { ProductConsumer } from "../context";
import { createImpressionDataLayerObject } from "../utils/helpers";

export default class CategoryList extends Component {
  render() {
    return (
      <>
        <h1>Products</h1>
        <div>
          <ProductConsumer>
            {(value) => {
              console.log("Data Layer Impressions Object: ", createImpressionDataLayerObject("", "", value.products))
              return value.products.map((product) => {
                return (
                  <>
                  <ProductCard
                    style={{ height: "200px", width: "200px" }}
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price}
                  />
                  </>
                );
              });
            }}
          </ProductConsumer>
        </div>
      </>
    );
  }
}
