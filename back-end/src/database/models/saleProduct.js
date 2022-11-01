const saleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleProduct', {
      sale_id: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      product_id: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: DataTypes.INTEGER,
    },
    { 
      timestamps: false,
    },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      through: models.saleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
      as: 'products',
    });

    models.product.belongsToMany(models.sale, {
      through: models.saleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
      as: 'sales',
    });
  };

  return saleProduct;
};

module.exports = saleProduct;
