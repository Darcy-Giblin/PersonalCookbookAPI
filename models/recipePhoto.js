"use strict";
module.exports = (sequelize, DataTypes) => {
  const RecipePhoto = sequelize.define("RecipePhoto", {
    path: DataTypes.STRING,
  });

  RecipePhoto.associate = (models) => {
    RecipePhoto.belongsTo(models.Recipe, { foreignKey: "recipeId" });
  };

  return RecipePhoto;
};
