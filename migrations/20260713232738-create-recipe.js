"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Recipes", {
      id: { type: Sequelize.STRING, primaryKey: true },
      title: Sequelize.STRING,
      sourceUrl: Sequelize.STRING,
      notes: Sequelize.TEXT,
      prepMinutes: Sequelize.INTEGER,
      cookMinutes: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Recipes");
  },
};
