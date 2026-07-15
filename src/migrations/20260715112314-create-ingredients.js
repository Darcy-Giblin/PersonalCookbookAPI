"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ingredients", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      recipeId: {
        type: Sequelize.STRING,
        references: { model: "Recipes", key: "id" },
        onDelete: "CASCADE",
      },
      rawText: Sequelize.TEXT,
      name: Sequelize.STRING,
      amount: Sequelize.FLOAT,
      unit: Sequelize.STRING,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Ingredients");
  },
};
