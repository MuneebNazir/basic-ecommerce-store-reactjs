import React, { Component } from "react";
import ProductCard from "./product-card";
import { ProductConsumer } from "../context";
import { createImpressionDataLayerObject } from "../utils/helpers";
import { fireGTMEvent } from "../utils/gtm-helper";
export default class CategoryList extends Component {
  render() {
    return (
      <>
        <h1>Products</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          <ProductConsumer>
            {(value) => {
              fireGTMEvent(createImpressionDataLayerObject("impression", value.products))
              return value.products.map((product) => {
                return (
                  <>
                  <ProductCard
                    style={{ height: "100px", width: "100px" }}
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
