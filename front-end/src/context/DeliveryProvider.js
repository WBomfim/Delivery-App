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

  const contextValue = useMemo(() => ({
    productsCarShop,
    setProductsCarShop,
    totalValue,
    setTotalValue,
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
