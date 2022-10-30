const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
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

  return Products;
};

module.exports = Products;