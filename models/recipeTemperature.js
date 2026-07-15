"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeTemperature = sequelize.define("RecipeTemperature", {
    recipeId: { type: DataTypes.STRING, primaryKey: true },
    value: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    appliance: DataTypes.STRING,
  });

  RecipeTemperature.associate = (models) => {
    RecipeTemperature.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };

  return RecipeTemperature;
};
