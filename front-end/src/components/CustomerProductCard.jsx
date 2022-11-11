import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';
import dataTestId from '../utils/dataTestIds';

export default function CustomerProductCard({ id, name, price, urlImage }) {
  const [quantyProduct, setquantyProduct] = useState(0);
  const { productsCarShop, setProductsCarShop } = useContext(DeliveryContext);

  useEffect(() => {
    const handleCarShop = () => {
      if (quantyProduct > 0) {
        const verificaProduct = productsCarShop.some((ev) => ev.productId === id);
        if (verificaProduct) {
          setProductsCarShop(productsCarShop.map((ev) => {
            if (ev.productId === id) {
              ev.quantity = quantyProduct;
              ev.totalPrice = quantyProduct * ev.unitPrice;
            }
            return ev;
          }));
        } else {
          setProductsCarShop([...productsCarShop, {
            productId: id,
            nameProduct: name,
            unitPrice: price,
            quantity: quantyProduct,
            totalPrice: quantyProduct * Number(price),
          }]);
        }
      } else {
        const verificaProduct = productsCarShop.some((ev) => ev.productId === id);
        if (verificaProduct) {
          setProductsCarShop(productsCarShop.filter((ev) => ev.productId !== id));
        }
      }
    };
    handleCarShop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantyProduct]);

  const removeItem = () => {
    if (quantyProduct > 0) {
      setquantyProduct(quantyProduct - 1);
    }
  };

  const addItem = () => {
    setquantyProduct(quantyProduct + 1);
  };

  const setQuantity = ({ target }) => {
    setquantyProduct(Number(target.value));
  };

  return (
    <div>
      <div>
        <p data-testid={ dataTestId[16](id) }>
          { `R$ ${price.toFixed(2).replace('.', ',')}` }
        </p>
        <img
          width="120px"
          src={ urlImage }
          alt={ name }
          data-testid={ dataTestId[17](id) }
        />
      </div>
      <div>
        <p data-testid={ dataTestId[15](id) }>
          { name }
        </p>
        <div>
          <button
            type="button"
            onClick={ removeItem }
            data-testid={ dataTestId[19](id) }
          >
            -
          </button>
          <input
            value={ quantyProduct }
            onChange={ setQuantity }
            data-testid={ dataTestId[20](id) }
          />
          <button
            type="button"
            onClick={ addItem }
            data-testid={ dataTestId[18](id) }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

CustomerProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;
