import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { TypeDiet } from './typediet.model.js';

export const Recipe = sequelize.define('Recipes', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
    defaultValue:'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png'
  },
  steps: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  dishtypes: {
    type: DataTypes.STRING
    // type: DataTypes.ARRAY(DataTypes.STRING)
  }   
}, {
  timestamps: false,
});
TypeDiet.belongsToMany(Recipe, { through: 'recipe_diet', timestamps: false });