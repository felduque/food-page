import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { TypeDiet } from './typediet.model.js';

export const Recipe = sequelize.define('Recipes', {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  summary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  healthscore: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.TEXT,
    defaultValue:'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
  },
  steps: {
    type: DataTypes.ARRAY(DataTypes.TEXT)
  },
  dishtypes: {
    type: DataTypes.ARRAY(DataTypes.TEXT)
  }   
}, {
  timestamps: false,
});
TypeDiet.hasMany(Recipe, { foreignKey: 'typeDiet', sourceKey: 'id' });
Recipe.belongsTo(TypeDiet, { foreignKey: 'typeDiet', targetId: 'id' });