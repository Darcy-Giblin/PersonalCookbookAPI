"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeTags", {
      recipeId: {
        type: Sequelize.STRING,
        references: { model: "Recipes", key: "id" },
        onDelete: "CASCADE",
      },
      tag: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });

    await queryInterface.addConstraint("RecipeTags", {
      fields: ["recipeId", "tag"],
      type: "primary key",
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("RecipeTags");
  },
};
