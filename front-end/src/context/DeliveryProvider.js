import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function DeliveryProvider({ children }) {
  const [productsCarShop, setProductsCarShop] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    let total = 0;
    productsCarShop.forEach((ev) => {
      total += ev.totalPrice;
    });
    setTotalValue(total);
  }, [productsCarShop]);

  const removeProductFromCart = (id) => {
    setProductsCarShop(productsCarShop.filter((ev) => ev.idProduct !== id));
  };

  const contextValue = useMemo(() => ({
    productsCarShop,
    setProductsCarShop,
    totalValue,
    setTotalValue,
    removeProductFromCart,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [productsCarShop, totalValue]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
