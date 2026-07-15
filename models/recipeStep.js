"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeStep = sequelize.define("RecipeStep", {
    stepNumber: DataTypes.INTEGER,
    text: DataTypes.TEXT,
  });

  RecipeStep.associate = (models) => {
    RecipeStep.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };

  return RecipeStep;
};
