const saleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('saleProduct', {
      saleId: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        primaryKey: true,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: DataTypes.INTEGER,
    },
    { 
      timestamps: false,
      underscored: true,
      tableName: 'saleProducts',
    },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      through: models.saleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });

    models.product.belongsToMany(models.sale, {
      through: models.saleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
    });
  };

  return saleProduct;
};

module.exports = saleProduct;
