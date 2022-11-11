import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

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
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          { `R$ ${price.toFixed(2).replace('.', ',')}` }
        </p>
        <img
          width="120px"
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </p>
        <div>
          <button
            type="button"
            onClick={ removeItem }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input
            value={ quantyProduct }
            onChange={ setQuantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <button
            type="button"
            onClick={ addItem }
            data-testid={ `customer_products__button-card-add-item-${id}` }
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
