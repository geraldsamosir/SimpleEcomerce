
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('Products', function(table) {
            table.increments('id').primary();
            table.integer('users').unsigned();
            table.string("productname").notNullable()
            table.string("mainproductphoto").notNullable()
            table.string("photopath").notNullable()
            table.integer("category").unsigned()
            table.integer("price")
            table.integer("discount_price")
            table.text("body").notNullable()
            table.timestamps();

            table.foreign('category')
                .references("Categoryproduct.id")
                .onDelete('cascade')
                .onUpdate('cascade');
                
            table.foreign('users')
                .references('users.id')
                .onDelete('cascade')
                .onUpdate('cascade');

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('Products')
};
