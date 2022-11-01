const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.REAL
      },
      url_image: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  product.associate = (models) => {
    product.hasMany(models.saleProduct, {
      foreignKey: 'product_id',
      as: 'productsSale',
    });
  };

  return product;
};

module.exports = product;
