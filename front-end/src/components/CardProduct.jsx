import React from 'react';
import PropTypes from 'prop-types';

export default function CardProducts({ id, name, price, urlImage }) {
  return (
    <div>
      <section data-testid={ `customer_products__element-card-price-${id}` }>
        {/* referencia site https://www.devmedia.com.br/forum/trocar-ponto-por-virgula-javascript/551468#:~:text=Para%20isso%2C%20altere%20utilize%20o,toString(). */}
        { price.toString().replace('.', ',') }
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
        >
          -
        </button>
        <input
          defaultValue="0"
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
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
