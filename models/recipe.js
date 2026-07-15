"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define("Recipe", {
    id: { type: DataTypes.STRING, primaryKey: true },
    title: DataTypes.STRING,
    sourceUrl: DataTypes.STRING,
    notes: DataTypes.TEXT,
    prepMinutes: DataTypes.INTEGER,
    cookMinutes: DataTypes.INTEGER,
  });

  Recipe.associate = (models) => {
    Recipe.hasOne(models.RecipeTemperature, { foreignKey: "recipeId" });
    Recipe.hasMany(models.Ingredient, { foreignKey: "recipeId" });
    Recipe.hasMany(models.RecipeStep, { foreignKey: "recipeId" });
    Recipe.hasMany(models.RecipeTag, { foreignKey: "recipeId" });
    Recipe.hasMany(models.RecipePhoto, { foreignKey: "recipeId" });
  };

  return Recipe;
};
