const formatSalesData = (sale) => {
  const { dataValues: { products, saleDate, user, seller, status, ...rest } } = sale;

    const newProducts = products.map(({ dataValues: { productQuantity, ...restValues } }) => (
      { ...restValues, quantity: productQuantity.quantity }
    ));
    
    const newSaleDate = new Date(saleDate).toLocaleDateString('pt-BR');

    return {
      ...rest,
      saleDate: newSaleDate,
      status,
      user,
      seller,
      products: newProducts,
    };
};

module.exports = formatSalesData;
