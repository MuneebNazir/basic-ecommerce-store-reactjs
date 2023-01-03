const createProductsListForDataLayer = (products) => {
  return products.map((item) => {
    return { ...item, id: item.skuId, position: item.id };
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
