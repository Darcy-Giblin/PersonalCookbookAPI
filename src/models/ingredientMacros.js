"use strict";
module.exports = (sequelize, DataTypes) => {
  const IngredientMacros = sequelize.define("IngredientMacros", {
    caloriesKcal: DataTypes.INTEGER,
    proteinG: DataTypes.INTEGER,
    carbsG: DataTypes.INTEGER,
    fatG: DataTypes.INTEGER,
  });

  IngredientMacros.associate = (models) => {
    IngredientMacros.belongsTo(models.Ingredient, {
      foreignKey: "ingredientId",
    });
  };

  return IngredientMacros;
};
