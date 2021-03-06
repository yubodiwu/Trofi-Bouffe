exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name').defaultTo('');
      table.string('last_name').defaultTo('');
      table.string('email').notNullable().unique();
      table.string('username').notNullable().unique();
      table.specificType('hashed_password', 'char(60)').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('recipes', (table) => {
      table.increments('id').primary();
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.string('name').notNullable();
      table.integer('calories');
      table.integer('servings');
      table.text('img');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('ingredients', (table) => {
      table.increments('id').primary();
      table.string('upc').defaultTo(null);
      table.string('plu').defaultTo(null);
      table.string('product_name');
      table.string('name');
      table.integer('calories').defaultTo(null);
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('recipe_ingredients', (table) => {
      table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('cascade');
      table.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('cascade');
      table.float('quantity');
      table.string('units');
      table.boolean('hasVolume');
      table.boolean('hasWeight');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('recipe_directions', (table) => {
      table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('cascade');
      table.integer('step_number').notNullable();
      table.text('step_content').notNullable();
    }),
    knex.schema.createTable('nutrition_facts_ingredients', (table) => {
      table.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('cascade');
      table.string('item_id').notNullable();
      table.float('serving_quantity');
      table.string('serving_unit');
      table.boolean('hasVolume');
      table.boolean('hasWeight');
      table.float('serving_weight_grams');
      table.float('calories');
      table.float('calories_from_fat');
      table.float('total_fat');
      table.float('saturated_fat');
      table.float('monounsaturated_fat');
      table.float('polyunsaturated_fat');
      table.float('trans_fatty_acid');
      table.float('cholesterol'); // mg
      table.float('sodium');
      table.float('total_carbohydrate');
      table.float('dietary_fiber');
      table.float('sugars');
      table.float('protein');
      table.float('vitamin_a_dv');
      table.float('vitamin_c_dv');
      table.float('calcium_dv');
      table.float('iron');
      table.float('potassium');
    }),
    knex.schema.createTable('nutrition_facts_recipes', (table) => {
      table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('cascade');
      table.float('calories');
      table.float('calories_from_fat');
      table.float('total_fat');
      table.float('saturated_fat');
      table.float('monounsaturated_fat');
      table.float('polyunsaturated_fat');
      table.float('trans_fatty_acid');
      table.float('cholesterol'); // mg
      table.float('sodium');
      table.float('total_carbohydrate');
      table.float('dietary_fiber');
      table.float('sugars');
      table.float('protein');
      table.float('vitamin_a_dv');
      table.float('vitamin_c_dv');
      table.float('calcium_dv');
      table.float('iron');
      table.float('potassium');
    }),
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('nutrition_facts_ingredients'),
    knex.schema.dropTable('nutrition_facts_recipes'),
    knex.schema.dropTable('recipe_directions'),
    knex.schema.dropTable('recipe_ingredients'),
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('recipes'),
    knex.schema.dropTable('users'),
  ])
);
