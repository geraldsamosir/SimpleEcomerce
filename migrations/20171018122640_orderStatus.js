
exports.up = function(knex, Promise) {
   return knex.schema
        .createTable('OrdersStatus', function(table) {
            table.increments('id').primary();
            table.string('status_name')
            table.timestamps();

        });
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTable('OrdersStatus')
};
