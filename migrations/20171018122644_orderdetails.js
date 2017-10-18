
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('Ordersdetail', function(table) {
            table.increments('id').primary();
            table.integer('product').unsigned();
            table.integer('qty')
            table.integer("order").unsigned();

            table.timestamps();

             table.foreign('product')
                .references('Products.id')
                .onDelete('cascade')
                .onUpdate('cascade');

           table.foreign('order')
                .references('Orders.id')
                .onDelete('cascade')
                .onUpdate('cascade');

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('Ordersdetail')
};
