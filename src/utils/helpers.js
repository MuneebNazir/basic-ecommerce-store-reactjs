const createProductsListForDataLayer = (products, single = false) => {
  return single
    ? { ...products, id: products.skuId, position: products.id }
    : products.map((item) => {
        return { ...item, id: item.skuId, position: item.id };
      });
};

const createCartProducts = (products) => {
  return products.map((item) => {
    return { ...item, id: item.skuId, quantity: item.count };
  });
};

export const createImpressionDataLayerObject = (
  event = "impressions",
  currencyCode = "USD",
  products
) => {
  return {
    event: event,
    ecommerce: {
      currencyCode: currencyCode,
      impressions: createProductsListForDataLayer(products),
    },
  };
};

export const createProductClickObject = (
  event = "productClick",
  id,
  products
) => {
  let product = products.find((item) => item.id === id);
  return {
    event: event,
    ecommerce: {
      click: {
        actionField: {
          list: "",
          products: [createProductsListForDataLayer(product, true)],
        },
      },
    },
  };
};

export const createProductDetailObject = (event = "detail", product) => {
  return {
    event: event,
    ecommerce: {
      detail: {
        products: [createProductDetailObject(product, true)],
      },
    },
  };
};

export const createAddToCartDataLayerObject = (
  event = "addToCart",
  currencyCode = "USD",
  product
) => {
  return {
    event: event,
    ecommerce: {
      currencyCode: currencyCode,
      add: {
        products: [createProductDetailObject(product, true)],
      },
    },
  };
};

export const checkoutDataLayerObject = (
  event = "addToCart",
  currencyCode = "USD",
  products
) => {
  return {
    event: event,
    ecommerce: {
      currencyCode: currencyCode,
      checkout: {
        actionField: {
          step: 1,
          option: "CartPage",
          products: createCartProducts(products),
        },
      },
    },
  };
};
