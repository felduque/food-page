import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const TypeDiet = sequelize.define('TypeDiet', {
  id: {
    type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})