"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("IngredientMacros", {
      ingredientId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "Ingredients", key: "id" },
        onDelete: "CASCADE",
      },
      caloriesKcal: Sequelize.INTEGER,
      proteinG: Sequelize.INTEGER,
      carbsG: Sequelize.INTEGER,
      fatG: Sequelize.INTEGER,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("IngredientMacros");
  },
};
