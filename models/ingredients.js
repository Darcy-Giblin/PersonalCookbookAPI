"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    rawText: DataTypes.TEXT,
    name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    unit: DataTypes.STRING,
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    Ingredient.hasOne(models.IngredientMacros, { foreignKey: "ingredientId" });
  };

  return Ingredient;
};
