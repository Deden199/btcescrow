import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const CityPool = sequelize.define('CityPool', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  drawTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const LotteryResult = sequelize.define('LotteryResult', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  drawDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  numbers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CityPool.hasMany(LotteryResult, { foreignKey: 'city', sourceKey: 'name' });
LotteryResult.belongsTo(CityPool, { foreignKey: 'city', targetKey: 'name' });

export { CityPool, LotteryResult };
