"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipeTag = sequelize.define("RecipeTag", {
    tag: DataTypes.STRING,
  });

  RecipeTag.associate = (models) => {
    RecipeTag.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };

  return RecipeTag;
};
