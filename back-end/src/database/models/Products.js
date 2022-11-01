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
  }, {
      timestamps: false,
  });

  return product;
};

module.exports = product;
