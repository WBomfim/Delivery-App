const user = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      email: {
        unique: true,
        type: DataTypes.STRING,
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    }, 
    { 
      timestamps: false
    },
  );

  /* user.associate = (models) => {
    user.hasMany(models.Sale, {
      foreignKey: 'user_id',
      as: 'salesUser',
    });

    user.hasMany(models.Sale, {
      foreignKey: 'seller_id',
      as: 'salesSeller',
    });
  }; */

  return user;
};

module.exports = user;
