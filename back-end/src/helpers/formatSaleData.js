const formatSalesData = (sale) => {
  const { dataValues: { products, saleDate, user, seller, status, ...rest } } = sale;

    const newProducts = products.map(({ dataValues: { productQuantity, ...restValues } }) => (
      { ...restValues, quantity: productQuantity.quantity }
    ));
    
    return {
      ...rest,
      saleDate: new Date(saleDate).toLocaleDateString('pt-BR'),
      status,
      userName: user.name,
      sellerName: seller.name,
      products: newProducts,
    };
};

module.exports = formatSalesData;
