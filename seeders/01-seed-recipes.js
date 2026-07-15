"use strict";

const fs = require("fs");

module.exports = {
  up: async (queryInterface) => {
    const data = JSON.parse(fs.readFileSync("./recipes.json", "utf8"));

    for (const recipe of data.recipes) {
      await queryInterface.bulkInsert("Recipes", [
        {
          id: recipe.id,
          title: recipe.title,
          sourceUrl: recipe.sourceUrl,
          notes: recipe.notes,
          prepMinutes: recipe.prepMinutes,
          cookMinutes: recipe.cookMinutes,
          createdAt: recipe.createdAt,
          updatedAt: recipe.updatedAt,
        },
      ]);

      if (recipe.temperature) {
        await queryInterface.bulkInsert("RecipeTemperatures", [
          {
            recipeId: recipe.id,
            value: recipe.temperature.value,
            unit: recipe.temperature.unit,
            appliance: recipe.temperature.appliance,
          },
        ]);
      }

      for (const ing of recipe.ingredients) {
        const [ingredientId] = await queryInterface.bulkInsert(
          "Ingredients",
          [
            {
              recipeId: recipe.id,
              rawText: ing.rawText,
              name: ing.name,
              amount: ing.amount,
              unit: ing.unit,
            },
          ],
          { returning: ["id"] },
        );

        await queryInterface.bulkInsert("IngredientMacros", [
          {
            ingredientId: ingredientId.id,
            caloriesKcal: ing.macros.caloriesKcal,
            proteinG: ing.macros.proteinG,
            carbsG: ing.macros.carbsG,
            fatG: ing.macros.fatG,
          },
        ]);
      }

      recipe.steps.forEach((step, index) => {
        queryInterface.bulkInsert("RecipeSteps", [
          {
            recipeId: recipe.id,
            stepNumber: index + 1,
            text: step,
          },
        ]);
      });

      recipe.tags.forEach((tag) => {
        queryInterface.bulkInsert("RecipeTags", [
          {
            recipeId: recipe.id,
            tag,
          },
        ]);
      });
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("RecipePhotos", null, {});
    await queryInterface.bulkDelete("RecipeTags", null, {});
    await queryInterface.bulkDelete("RecipeSteps", null, {});
    await queryInterface.bulkDelete("IngredientMacros", null, {});
    await queryInterface.bulkDelete("Ingredients", null, {});
    await queryInterface.bulkDelete("RecipeTemperatures", null, {});
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
