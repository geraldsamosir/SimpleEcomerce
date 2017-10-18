
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('Orders', function(table) {
            table.increments('id').primary();
            table.integer('users').unsigned();
            table.integer('status').unsigned();
            table.timestamps();

            table.foreign('users')
                .references('users.id')
                .onDelete('cascade')
                .onUpdate('cascade');

            table.foreign('status')
                .references('OrdersStatus.id')
                .onDelete('cascade')
                .onUpdate('cascade');

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('Orders')
};
