exports.seed = knex => (
// Deletes ALL existing entries
  knex('recipe_ingredients').del().then(() => (
    knex('recipe_ingredients').insert([
      {
        recipe_id: 1,
        ingredient_id: 48,
        quantity: 2,
        units: 'tbsp',
        hasWeight: false,
        hasVolume: true,
      }, {
        recipe_id: 1,
        ingredient_id: 67,
        quantity: 0.5,
        units: 'lbs',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 1,
        ingredient_id: 98,
        quantity: 4,
        units: 'tbsp',
        hasWeight: false,
        hasVolume: true,
      }, {
        recipe_id: 1,
        ingredient_id: 99,
        quantity: 1,
        units: 'tsp',
        hasWeight: false,
        hasVolume: true,
      }, {
        recipe_id: 1,
        ingredient_id: 100,
        quantity: null,
        units: null,
        hasWeight: false,
        hasVolume: false,
      }, {
        recipe_id: 1,
        ingredient_id: 101,
        quantity: 2,
        units: 'oz',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 106,
        quantity: 350,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 48,
        quantity: 225,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 102,
        quantity: 225,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 37,
        quantity: 100,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 103,
        quantity: 300,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 104,
        quantity: 25,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 81,
        quantity: 60,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 100,
        quantity: 5,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      }, {
        recipe_id: 4,
        ingredient_id: 105,
        quantity: 5,
        units: 'g',
        hasWeight: true,
        hasVolume: false,
      },
    ])
  ))
);
