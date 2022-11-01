const products = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
      id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        url_image: {
          type: DataTypes.STRING,
        },
  }, {
      timestamps: false,
  });

  return products;
};

module.exports = products;