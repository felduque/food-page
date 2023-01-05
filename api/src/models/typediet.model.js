import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const TypeDiet = sequelize.define('TypeDiets', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})