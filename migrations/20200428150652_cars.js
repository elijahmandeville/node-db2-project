exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.text("vin").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.boolean("isLemon").notNull();
    table.text("transType");
    table.text("title");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
