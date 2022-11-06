import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

export default function CardProducts({ id, name, price, urlImage }) {
  const [quantyProduct, setquantyProduct] = useState(0);
  const { productsCarShop, setProductsCarShop } = useContext(DeliveryContext);

  useEffect(() => {
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

  const digitarQuanty = ({ target }) => {
    setquantyProduct(Number(target.value));
  };

  return (
    <div>
      <section data-testid={ `customer_products__element-card-price-${id}` }>
        {/* referencia site https://www.devmedia.com.br/forum/trocar-ponto-por-virgula-javascript/551468#:~:text=Para%20isso%2C%20altere%20utilize%20o,toString(). */}
        { price.toFixed(2).toString().replace('.', ',') }
      </section>
      <section>
        <img
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </section>
      <section data-testid={ `customer_products__element-card-title-${id}` }>
        { name }
      </section>
      <section>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ removeItem }
        >
          -
        </button>
        <input
          value={ quantyProduct }
          onChange={ digitarQuanty }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ addItem }
        >
          +
        </button>
      </section>
    </div>
  );
}

CardProducts.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
}.isRequired;
