"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeSteps", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      recipeId: {
        type: Sequelize.STRING,
        references: { model: "Recipes", key: "id" },
        onDelete: "CASCADE",
      },
      stepNumber: Sequelize.INTEGER,
      text: Sequelize.TEXT,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("RecipeSteps");
  },
};
