"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipePhotos", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      recipeId: {
        type: Sequelize.STRING,
        references: { model: "Recipes", key: "id" },
        onDelete: "CASCADE",
      },
      path: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("RecipePhotos");
  },
};
