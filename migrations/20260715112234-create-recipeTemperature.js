"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeTemperatures", {
      recipeId: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: { model: "Recipes", key: "id" },
        onDelete: "CASCADE",
      },
      value: Sequelize.INTEGER,
      unit: Sequelize.STRING,
      appliance: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("RecipeTemperatures");
  },
};
