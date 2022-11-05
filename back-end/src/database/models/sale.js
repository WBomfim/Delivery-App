const sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      sallerId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING(50),
    }, 
    { 
      timestamps: false,
      underscored: true,
    },
  );

  sale.associate = (models) => {
    sale.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user',
    });

    sale.belongsTo(models.user, {
      foreignKey: 'sellerId',
      as: 'seller',
    });

    sale.hasMany(models.saleProduct, {
      foreignKey: 'saleId',
      as: 'saleProducts',
    });
  };

  return sale;
};

module.exports = sale;
