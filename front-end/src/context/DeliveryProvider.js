import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';

function RecipesProvider({ children }) {
  const [productsCarShop, setProductsCarShop] = useState([]);

  const contextValue = {
    productsCarShop,
    setProductsCarShop,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValueUse = useMemo(() => (contextValue), []);

  return (
    <DeliveryContext.Provider value={ contextValueUse }>
      { children }
    </DeliveryContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
